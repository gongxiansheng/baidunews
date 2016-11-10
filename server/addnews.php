<?php
header("Content-type:application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
  	{
    	die('Could not connect: ' . mysql_error());
  	}else{
		mysql_select_db("phplesson", $con);
		$newstitle = htmlspecialchars($_POST["newstitle"]);
		$newsimg = htmlspecialchars($_POST["newsimg"]);
		$newstype = htmlspecialchars($_POST["newstype"]);
		$newssrc = htmlspecialchars($_POST["newssrc"]);
		$newstime = htmlspecialchars($_POST["newstime"]);
		$sql = "INSERT INTO `news`( `newstype`, `newsimg`, `newstitle`, `newssrc`, `newstime`) VALUES ('{$newstype}','{$newsimg}','{$newstitle}','{$newssrc}','{$newstime}')";
		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);
		if (!$result)
		 {
			die('Error: ' . mysql_error());
			echo json_encode(array("success"=>"NO"));
		}else{
			echo json_encode(array("success"=>"OK"));
		}
	}
mysql_close($con);
?>