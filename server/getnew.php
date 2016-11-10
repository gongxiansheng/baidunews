<?php 
header("Content-type:application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
 {
  	die('Could not connect: ' . mysql_error());
 }else{

  	mysql_select_db("phplesson", $con);
  	$newsid = $_POST["newsid"];
  	$sql = "SELECT * FROM `news` WHERE `newsid`= {$newsid}";
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql,$con);
	$arr=array();
	while($row = mysql_fetch_array($result))
	  {
	  array_push($arr,array(
	  						"newsid" =>$row['newsid'],
	  						"newstype" =>$row['newstype'],
						  	"newstitle"=>$row['newstitle'],
						  	"newsimg"=>$row['newsimg'],
						  	"newssrc"=>$row['newssrc'],
						  	"newstime"=>$row['newstime'],
						  	)
	  			);
	  }
	echo json_encode($arr);
}
mysql_close($con);
?>