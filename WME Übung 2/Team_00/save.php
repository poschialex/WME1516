<?php
include("world_data_parser.php");

$file = "world_data.csv";

$myParser = new WorldDataParser();
$array = $myParser->parseCSV($file);
$value = $myParser->saveXML($array);

if($value == FALSE)
	echo "XML Savestatus: nicht erfolgreich ($value)";
else
	echo "XML Savestatus: erfolgreich ($value)";



?>