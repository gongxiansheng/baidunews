<?php
header("Content-type:application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
  	{
    	die('Could not connect: ' . mysql_error());
  	}else{
		mysql_select_db("phplesson", $con);
		$newsid = $_POST["newsid"];
		$sql = "DELETE FROM `news` WHERE `newsid` = {$newsid}";//此处传入的参数要用插值法包裹，对数据库表格进行操作应用对象属性方式进行,
		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);
		if (!$result)
		 {
			die('Error: ' . mysql_error());
			echo json_encode(array("deleteSuccess"=>"NO"));
		}else{
			echo json_encode(array("deleteSsuccess"=>"OK"));
		}
	}
mysql_close($con);
?>