<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<title>许愿墙</title>
	<link rel="stylesheet" href="base.min.css"/>
	<style>

	#wish {
	       background: url(234.jpg) no-repeat 0 0;
           width: 100%;
           height: 900px;
           margin: 15px;
           position: relative;
          }
   
  
	</style>
</head>


<div id="wish">

<?php
$dbhost = 'localhost';
$dbname = 'wish';
$dbtablename = 'wishtext';
$dbuser = 'root';
$dbpass = '1234';
$link = mysqli_connect("$dbhost","$dbuser","$dbpass") or die(mysqli_error() );
mysqli_query($link,"set names utf8");
mysqli_select_db($link,$dbname) or die( mysqli_error() ); 

$query = "select * from $dbtablename";
$result = mysqli_query($link,$query) or die( mysqli_error() ); 

while($row = mysqli_fetch_assoc($result))
    {
        $id[] = $row['id'];
        $w_id[] = $row['w_id'];
        $text[] = $row['text'];
      
    }


$query2 = "select count(*) from $dbtablename";
$result2 = mysqli_query($link,$query2) or die( mysqli_error() ); 
$row2 = mysqli_fetch_array($result2);
for($i = 0;$i < $row2[0];$i++)
    {

	  echo '<div><a href="#" title="開新視窗" onclick="MM_openBrWindow($str)"><img src="345.png" alt="測試圖片" border="0"></a></button></div>';
    }
?>
<div><a href="#" title="開新視窗" onclick="MM_openBrWindow('test.php','test','width=700,height=300')"><img src="345.png" alt="測試圖片" border="0"></a></button></div>
</div>
</html>
<script src="jquery.min.js"></script>
<script src="jquery-ui.min.js"></script>
<script src="wish.js"></script>
<script>
$(function(){
	$('#wish').wish();
});
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

</script>
