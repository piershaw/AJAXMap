<?php
//making and php xml file
header("Content-type: text/xml");

$options = array("red","green","blue");
echo '<?xml version = "1.0"?>';
echo '<options>';
foreach ($options as $value){
    echo '<option>';
    echo $value;
    echo '</option>';

}
echo '</options>';
?>