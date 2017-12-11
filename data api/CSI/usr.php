<?php
$usr = file_get_contents("usr.h");
$usrlivedata = $_GET['usr'];
echo $usr;
$usr = file_put_contents("usr.h", $usrlivedata);
?>
