<html>
<head>
<script type="text/javascript" src="shopTest.js"></script>

<?php $someData = "button "; ?>
</head>
<body>

<div id = "m"><h2></h2></div>
<div id = "myDiv"><h2>Let AJAX change this text</h2></div>
<button type="button" onClick="getOption()"><?php echo $someData; ?></button>
<form>
<select id= "listbox" onchange="setOption()">
<option>select somthing</option>
</select>
</form>






<div id="colortext">color me</div>
</body>
</html>