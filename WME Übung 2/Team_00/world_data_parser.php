<?php

class WorldDataParser
{
	//liest  die daten aus der CSV und fügt es in einem Array ein
	function parseCSV($file)
	{
		//neues Array wird erstellt
		$array = array();
		if(($handle = fopen($file, "r")) !== FALSE)
		{
			$header = fgetcsv($handle, 300, ",");
			while(($data = fgetcsv($handle, 300, ",")) !== FALSE)
			{
				$row = array();
				for($i=0; $i < count($data);$i++)
				{
					//jeder Zeile des Array wird ein neues Array zugewiesen
					//header steht für die Attribute jedes Landes
					//und data für den Wert davon
					$row[$header[$i]] = $data[$i];
				}
				$array[] = $row;
			}
		}
	
		return $array;
	}
	
	//verwandelt einen Array mit Daten einer CSV Datei in eine XML Datei
	function saveXML($array)
	{
		//Kodierung für die XML Datei
		$dom = new DOMDocument("1.0", "UTF-8");
		//das Format wird behalten und man kann so die Hierarchie
		//in der  XML Datei erkennen
		$dom->formatOutput = true;
		
		//Erzeugt den Wurzelknoten für die neue Datei
		$element = $dom->createElement("Countries");
		
		foreach($array as $value)
		{
			//Erzeugung des ersten Kindknotens
			$country = $dom->createElement("Country");
			
			foreach($value as $key => $valueTwo)
			{
				//Das erste Wort von den Attributen wird als Kindknoten von Country erzeugt
				$keyArray = explode(' ', trim($key));
				$elem = $dom->createElement($keyArray[0], trim($valueTwo));
				//Knoten wird an Country verknüpft
				$country->appendChild($elem);
				
			}
			//Country wird an Countries verknüpft
			$element->appendChild($country);
		}
		//Die Datei bekommt alle Knoten 
		$dom->appendChild($element);
		
		$result = $dom->save("world_data.xml");
		
		if($result == FALSE)
			return FALSE;
		else
			return TRUE;
		
	}
	
	function printXML($xmlPath, $xsltPath)
	{
		// Load the XML source
		$xml = new DOMDocument;
		$xml->load($xmlPath);

		$xsl = new DOMDocument;
		$xsl->load($xsltPath);

		// Configure the transformer
		$proc = new XSLTProcessor;
		$proc->importStyleSheet($xsl); // attach the xsl rules
		
		$file = $proc->transformToDoc($xml);//transform xml to doc

		return $file->saveHTML();//return as html doc

	}

}
?>