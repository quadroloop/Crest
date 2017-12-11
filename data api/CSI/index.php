<?php
$ipaddr = $_SERVER['SERVER_ADDR'];
$ipfinal = "http://".$ipaddr."/CSI/";
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>CSI - Compact Sensor interfacer</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./css/w3.css">
<link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">
<link rel="stylesheet" href="./css/font-awesome.min.css">
<link rel="stylesheet" href="./css/animate.css"> 
<link rel="stylesheet" href="./css/monolyth.css"> 
<script src="./js/jquery.min.js"></script>
<script src="./js/qrcode.js"></script>
<script>
var auto_refresh = setInterval(
      function ()
      {
         $('#usri').load('usr.php').fadeIn("slow");
       autolog(); // login when user is detected!!
      }, 200); // refresh every 10000 milliseconds



</script>
<style type="text/css">
  #qrcode {
  width:120px;
  height:120px;
 
 
}
</style>

</head>
<body class="hero">
<!--webcointainer-->

<center>
<a class="w3-text-white" id="usri"></a>
<img src="./img/csitrans.png" class="hero-logo fadeInUp animated w3-hide-small">
<img src="./img/csitrans.png" class="hero-mini-logo fadeInUp animated w3-hide-large w3-hide-medium">
<h4 class="w3-text-indigo animated fadeInUp">COMPACT SENSOR INTERFACER</h4>
<div class="animated fadeInUp">
<i class="fa fa-mobile fa-3x w3-text-grey"></i>
<p class="w3-text-indigo"><i class="w3-text-green fa fa-circle"></i> Connect using Mobile App.</p>
<p class="w3-text-dark-grey"><i class="w3-text-orange fa fa-joomla"></i> Scan the QR Code to Connect Instantly!</p>
<input id="text" type="text" value="<?php echo $ipfinal; ?>" style="display:none;" />
<div id="qrcode" class="w3-center"></div>
</div>
<p class="w3-text-grey" id="nd" style="display:none;">No Device Detected</p>
<p class="w3-text-green animated fadeInUp" id="nd" style="display:none;">Device Found!</p>
<br>
<div id="sd" style="display:none" class="animated fadeInUp">
<p class="w3-text-indigo w3-small">Searching for Devices...</p>
<img src="./img/load.gif" style="width:55px;display:block;" id="loader">
</div>
</center>
</body>
<script>
window.onload = function() {
setTimeout("searchdev()",2000);

//setTimeout("proceed()",5000);
}

function searchdev() {
// search devices
document.getElementById("sd").style.display = "block";
}

function autolog() {
  var ui = document.getElementById("usri").innerHTML;
  if (ui == "init") {
  window.location = "CSI.php";
}else{
}
}
</script>
<script type="text/javascript">
 var qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 135,
  height : 120
});

function makeCode () {    
  var elText = document.getElementById("text");
  
  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });

</script>
</html>
