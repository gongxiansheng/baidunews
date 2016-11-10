<?php
header("Content-type:application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
  	{
    	die('Could not connect: ' . mysql_error());
  	}else{
		mysql_select_db("phplesson", $con);
		$newsid = htmlspecialchars($_POST["newsid"]);
		$newstitle = htmlspecialchars($_REQUEST["newstitle"]);
		$newsimg = htmlspecialchars($_REQUEST["newsimg"]);
		$newstype = htmlspecialchars($_REQUEST["newstype"]);
		$newssrc = htmlspecialchars($_REQUEST["newssrc"]);
		$newstime = htmlspecialchars($_REQUEST["newstime"]);
		$sql = "UPDATE `news` SET `newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstitle`='{$newstitle}',`newssrc`='{$newssrc}',`newstime`='{$newstime}' WHERE `newsid`= {$newsid}";
		//此处的参数引用有加引号的，有没加的需注意；
		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);
		if (!$result)
		 {
			die('Error: ' . mysql_error());
			echo json_encode(array("modifySuccess"=>"NO"));
		}else{
			echo json_encode(array("modifySsuccess"=>"OK"));
		}
	}
mysql_close($con);
?>