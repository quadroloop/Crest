<!-- Bryce Mercines 2017-->
<html>
<head>
<link rel="stylesheet" href="./css/w3.css">
<link rel="stylesheet" href="./css/font-awesome.css">
<link rel="stylesheet" href="./css/animate.css">
<script src="./js/jquery.min.js"></script>
<title>Elipsys - fingerprint student attendance system</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
</head>
<body class="w3-black" id="vbody">
<div class="w3-center">
<img src="./img/fprint.png" style="margin-top:90;width:150px;" class="animated fadeInDown">	
<h1 class="w3-text-orange animated fadeInUp">Elipsys</h1>
<p class="w3-small w3-text-grey animated fadeInUp">Arduino-Based Biometric Attendance System</p>
<p class="w3-animate-zoom w3-text-green" style="display:none;" id="ar"><i class="fa fa-check-circle w3-text-green"></i> Attendance Recorded!</p>
<p class="w3-animate-zoom w3-text-red" style="display:none;" id="nr"><i class="fa fa-times-circle w3-text-red"></i> User not Recognized!</p>
<p class="w3-animate-zoom" style="display:block;" id="def"><i class="fa fa-braille w3-text-blue"></i> Scan Fingerprint for Attendance.</p>

<center>
<input id="pincode" type="password" placeholder="pincode.." class="w3-input w3-black w3-round w3-border w3-center w3-animate-zoom" style="width:300px;display: none;">
<br>
<br>
</center>
<div class="animated fadeInUp" id="loader" style="display:none;">
<img src="./img/load.gif" style="width:80px;">
</div>
<p class="w3-text-black" id="mode"></p>
<!--
<hr id="line" style="margin-left:40%;margin-right:40%;" class="w3-dark-grey animated fadeInUp">
-->
</div>

<div id="attdn" class="w3-modal">
    <div class="w3-modal-content w3-animate-opacity">
      <header class="w3-container w3-black w3-border"> 
        <h2>Attendance</h2>
      </header>
     <div class="w3-container w3-border">
  <p class="w3-text-grey">Attendance of BT-IT 3A Today, </p>

  <div id="slist">
</div>
</div>
<br>
<br>
      <footer class="w3-container w3-black w3-border">
      <div class="w3-right">
      <p class="w3-btn w3-green w3-round w3-small">Export to Excel</p>
      </div>
      </footer>
    </div>
  </div>
</div>
</body>
<script src="./js/monolythics.js"></script>

<script>
window.onload = function() {
 setTimeout("scan()",4000);
}
</script>
</html>