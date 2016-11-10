<?php 
header("Content-type:application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
 {
  	die('Could not connect: ' . mysql_error());
 }else{
 	mysql_select_db("phplesson", $con);
 	$newstype = $_GET["newstype"];
 	if($newstype){
	  	$sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}'";
	  	//第一个‘=’是赋值符号可以与左右有空格，但第二个‘=’是指定哪个值的等号，此等号最好不要有空格
		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);
		$arr=array();
		while($row = mysql_fetch_array($result))
		  {
		  array_push($arr,array(
							  	"newstitle"=>$row['newstitle'],
							  	"newsid"=>$row['newsid'],
							  	"newstype"=>$row['newstype'],
							  	"newsimg"=>$row['newsimg'],
							  	"newssrc"=>$row['newssrc'],
							  	"newstime"=>$row['newstime'],
							  	)
		  			);
		  }
		echo json_encode($arr);
	}else {
	  	$sql = "SELECT * FROM news";
		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);
		$arr=array();
		while($row = mysql_fetch_array($result))
		  {
		  array_push($arr,array(
							  	"newstitle"=>$row['newstitle'],
							  	"newsid"=>$row['newsid'],
							  	"newstype"=>$row['newstype'],
							  	"newsimg"=>$row['newsimg'],
							  	"newssrc"=>$row['newssrc'],
							  	"newstime"=>$row['newstime'],
							  	)
		  			);
		  }
		echo json_encode($arr);
	}
}

mysql_close($con);
?>