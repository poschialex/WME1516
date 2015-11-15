<?php

class WorldDataParser
{
	function parseCSV($file)
	{
		$array = array();
		if(($handle = fopen($file, "r")) !== FALSE)
		{
			$header = fgetcsv($handle, 300, ",");
			while(($data = fgetcsv($handle, 300, ",")) !== FALSE)
			{
				$row = array();
				for($i=0; $i < count($data);$i++)
				{
					$row[$header[$i]] = $data[$i];
				}
				$array[] = $row;
			}
		}
	
		return $array;
	}
	
	function saveXML($array)
	{
		$dom = new DOMDocument("1.0", "UTF-8");
		$dom->formatOutput = true;
		
		$element = $dom->createElement("Countries");
		
		foreach($array as $value)
		{
			$country = $dom->createElement("Country");
			
			foreach($value as $key => $valueTwo)
			{
				$keyArray = explode(' ', trim($key));
				$elem = $dom->createElement($keyArray[0], trim($valueTwo));
				$country->appendChild($elem);
				
			}
			$element->appendChild($country);
		}
		
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
		
		$file = $proc->transformToDoc($xml);

		return $file->saveHTML();

	}

}
?>