<?php
require("world_data_parser.php");

//get all required files
$xmlPath = "world_data.xml";
$xsltPath = "world_data.xsl";

$file = "world_data.csv";

//execute parse & save
$myParser = new WorldDataParser();
$array = $myParser->parseCSV($file);
$value = $myParser->saveXML($array);

//if save was successfull, execute print
if($value == FALSE)
	echo "XML Savestatus: nicht erfolgreich ($value)";
else
	echo $myParser->printXML($xmlPath, $xsltPath);
?>