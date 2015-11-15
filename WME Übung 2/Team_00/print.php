<?php
require("world_data_parser.php");

$xmlPath = "world_data.xml";
$xsltPath = "world_data.xsl";

$file = "world_data.csv";

$myParser = new WorldDataParser();
$array = $myParser->parseCSV($file);
$value = $myParser->saveXML($array);

if($value == FALSE)
	echo "XML Savestatus: nicht erfolgreich ($value)";
else
	echo $myParser->printXML($xmlPath, $xsltPath);
?>