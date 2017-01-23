  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php require_once('Connections/indust2.php'); ?>


<?php
//secure
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}





//req1
mysql_select_db($database_indust2, $indust2);
$query_Recordset1 = "SELECT name, url FROM bands ORDER BY id ASC";
$Recordset1 = mysql_query($query_Recordset1, $indust2) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Untitled Document</title>





</head>

<body>
<?php echo $row_Recordset1['url'];?>

<script language="JavaScript">
var XMLHttpRequestObject = false;

//microsoft or not
if(window.XMLHttpRequest){
	XMLHttpRequestObject = new XMLHttpRequest();
}else if(window.ActiveXObject){
	XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}
//


function getData(dataSource, divID) {

	if(XMLHttpRequestObject){
		
		//document.getElementById("to").innerHTML=
//xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
		
	var obj = document.getElementById("divID");
	XMLHttpRequestObject.open("GET", dataSource);
	
	XMLHttpRequestObjec.onreadystatechange = function(){

		if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
		{
			obj.innerHTML = XMLHttpRequestObject.responseText;
			//obj.innerHTML = "you can use AJAX";
		}
		
			XMLHttpRequestObject.send(null);
		};



}else{
	
	var obj = document.getElementById("divID");
	obj.innerHTML = "you cant use AJAX on this browser";
}

	
}
</script> 

<form>
<input type="button" value="button" onclick="getData('testbox.txt','textboxDIV')"/>
</form>

<div id="textboxDIV">
<p>this is the test</p>
</div>


</body>
</html>
<?php
mysql_free_result($Recordset1);
?>

