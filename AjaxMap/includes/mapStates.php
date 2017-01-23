<?php 
$state = $_GET["state"];
//$hostname_indust = "localhost";
//$database_indust = "industri_indust";
//$username_indust = "industri_pshaw";
//$password_indust = "bAx$=gCMxdcci-!efL?$";

$hostname_indust = "localhost";
$database_indust = "indust";
$username_indust = "root";
$password_indust = "root";
$con = mysql_connect($hostname_indust, $username_indust, $password_indust);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db($database_indust, $con);// dont forget

$sql = "SELECT * FROM clubs WHERE `state` = '".$state."' ORDER BY rating desc";
$result = mysql_query($sql);
echo "<table>";
while($row = mysql_fetch_array($result)){
if($row['rating'] == 1){
$ratingImage = "<img src='/map_images/1star.jpg'/>";
}else if($row['rating'] == 2){
$ratingImage = "<img src='/map_images/2star.jpg'/>";
}else if($row['rating'] == 3){
$ratingImage = "<img src='/map_images/3star.jpg'/>";
}else if($row['rating'] == 4){
$ratingImage = "<img src='/map_images/4star.jpg'/>";
}else if($row['rating'] == 5){
$ratingImage = "<img src='/map_images/5star.jpg'/>";
}else{
$ratingImage = "<img src='/map_images/0star.jpg'/>";
}
$club = $row['clubname'];
  echo "<tr>";
  echo "<td>"."<a href='mapClubs.php?club=$club'>" . $club ."</a>". " ( " .$row['city'] ." ) ". $ratingImage ."</td>";
  echo "</tr>";
}
echo "</table>";

mysql_close($con);
?> 