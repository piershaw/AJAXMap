<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>My AJAX MAP</title>
<style type="text/css">
<!--
body {
	background-color: #000000;
	
}

body,td,th {
	color: #FFFFFF;
}

#statediv {
	position:absolute;
	overflow:hidden;
	visibility: hidden;
	z-index:990;
	width:500px;
	background-color:#000000;
	color:#000000;
	border: 1px 1px 1px 1px;
	border-color: #990000;
	border-style:solid;
	border-width:thin;
	border-top:none;
	
}
#clubdiv {
	position:absolute;
	overflow:hidden;
	visibility: hidden;
	z-index:991;
	width:700px;
	background-color:#000000;
	color:#000000;
	border: 1px 1px 1px 1px;
	border-color: #990000;
	border-style:solid;
	border-width:thin;
	border-top:none;
	
}
#stateheaddiv {
	position:absolute;
	overflow:hidden;
	visibility: hidden;
	z-index:990;
	width:500px;
	background-color:#330000;
	color:#FFFFFF;
	border: 1px 1px 1px 1px;
	border-color: #990000;
	border-style:solid;
	border-width:thin;
	border-bottom:none;
	
}
a:link {
	color: #FFFFFF;
	font-weight: bold;
	text-decoration: none;
}
a:visited {
	text-decoration: none;
	color: #CCCCCC;
}
a:hover {
	text-decoration: none;
	color: #FF0000;
}
a:active {
	text-decoration: none;
	color: #FFFFFF;
}
-->
</style>
<script type="text/javascript" src="javaScripts/Map.js"></script>



<body onload="init()">


<div align="center"><img src="map_images/usaMap.png" alt="usa" width="900" height="825" border="0" usemap="#Map" />
<map name="Map" id="Map">
  <area id="ca" shape="poly" coords="26,168,93,183,79,242,148,343,151,356,138,390,81,390,41,358,17,263,14,193,27,169,25,167"  href="#" alt="CA" />
<area id="nv" shape="poly" coords="95,183,183,201,159,323,148,321,149,342,81,238" href="#" alt="NV" />
</map>
</div>
<div id="stateheaddiv"></div>
<div id="statediv"></div>
<div id="clubdiv"></div>


</body>
</html>
