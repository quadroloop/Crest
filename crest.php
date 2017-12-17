<?php
/*
============================================================================
|#|   ____ ____  _____ ____ _____   |#| Crest API - v.01                 |#|
|#|  / ___|  _ \| ____/ ___|_   _|  |#|----------------------------------|#|
|#| | |   | |_) |  _| \___ \ | |    |#| * Native PHP                     |#|
|#| | |___|  _ <| |___ ___) || |    |#| * Lightweight Single File        |#|
|#|  \____|_| \_\_____|____/ |_|    |#| * Hardware and Software Dev API  |#|   
|#|                                 |#|    By Bryce Mercines 2017        |#|
============================================================================   
*/
 $request_type = $_SERVER['REQUEST_METHOD'];
 $get = $_GET["q"];
 $post = $_POST["p"];


// for get requests
 if($request_type == "GET") {
 	if(isset($get)){
 		// process get requests here..\
 		// count fucntion
 	    if($get=="count"){
 	      if(file_exists("crest_count.io")) {
 	      	// perform proper counting
 	      	$count = file_get_contents("crest_count.io");
 	      	$count_add = (int)$count+1;
 	      	file_put_contents("crest_count.io", $count_add);
 	      	echo file_get_contents("crest_count.io");
 	      }else{
 	      	$file_init = 0;
 	      	file_put_contents("crest_count.io", $file_init);
 	      	echo "count file is created";
 	      }	
 	    }
      // count function end

 	   if($get=="listen") {
         $rx= $_GET["rx"]; // sent data (recieved data)
         $tx= $_GET["tx"]; // transmit (transmit data)
         $del= $_GET["del"];
        //server init
        if(file_exists("rx.io")){
          // get some text data;
         $rx_data = file_get_contents("rx.io");
         echo $rx_data;
        }else{
         $file_init = "";
         file_put_contents("rx.io", $file_init);
        }
        // for recieving data;
        if(isset($rx)){
          $rx_data_index=file_get_contents("rx.io");
        }

        if(isset($tx)){
          $tx_data_index = $tx.PHP_EOL;
          file_put_contents("rx.io",$tx_data_index,FILE_APPEND);
          echo file_get_contents("rx.io");
        }
        
        if(isset($del)){
          $delete_value = "";
          file_put_contents("rx.io", $delete_value);
          echo "200: OK, Data is wiped out";	
        }   
 	   } 
 	}
 }

 // for PUT Request
  if($request_type == "POST"){
    if (isset($post)){
    	// process put request here..
    }
  }
?>

