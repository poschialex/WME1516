<pre>
<?php
include("world_data_parser.php");
$file = "world_data.csv";

$myParser = new WorldDataParser();
print_r($myParser->parseCSV($file));

?>
</pre>