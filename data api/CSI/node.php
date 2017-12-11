<?php
$basecount = file_get_contents('count.h');
$serialupdate = file_get_contents('serialm.h');
$serialdata = $_GET['data']; 
$addview = (int)$basecount+1;
file_put_contents("count.h", $addview);
file_put_contents("serialm.h", $serialdata);
?>