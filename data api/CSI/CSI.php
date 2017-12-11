<?php
$ipaddr = $_SERVER['SERVER_ADDR'];
$ipfinal = "http://".$ipaddr."/CSI/CSI.php";
?>
<!DOCTYPE html>
<html>
<head>
<title>CSI - Compact Sensor Interfacer</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./css/w3.css">
<link rel="stylesheet" href="./css/animate.css">
<link rel="stylesheet" href="./css/font-awesome.min.css">
  <script src="./js/jquery.min.js"></script>
<script src="./js/qrcode.js"></script>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Line Chart</title>
   
    <script src="./js/analytics.js" async=""></script>
    <script src="./js/Chart.js"></script>
    <script src="./js/utils.js"></script>
    <link rel="stylesheet" href="./css/monolyth.css">
    <script type="text/javascript" src="./js/monolythics.js"></script>
</head>
<body class="w3-light-grey" id="vbody">
<div class="w3-sidebar w3-bar-block w3-card-2 w3-animate-left" style="display:none;background-color:rgb(46, 46, 66);" id="mySidebar">
  <h4 class="w3-bar-item w3-text-blue w3-large" onclick="w3_close()" style="font-family: 'Rajdhani', sans-serif;"> <b><i class="fa fa-codepen w3-text-green"></i> CSI &times;</b></h4>
  <div class="w3-small w3-text-white">
 <button class="w3-bar-item w3-button w3-hover-green" id="randomizeData"><i class="fa fa-hashtag w3-text-blue"></i> Randomize Data</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="addDataset"><i class="fa fa-hashtag w3-text-blue"></i> Add Sensor Data</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="removeDataset"><i class="fa fa-hashtag w3-text-blue"></i> Remove Dataset</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="addData"><i class="fa fa-hashtag w3-text-blue"></i> Add Data</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="removeData"><i class="fa fa-hashtag w3-text-blue"></i> Remove Data</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="rdata"><i class="fa fa-hashtag w3-text-blue"></i> Rdata</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="adata"><i class="fa fa-hashtag w3-text-blue"></i> AData</button>
    <button class="w3-bar-item w3-button w3-hover-green" id="remdata"><i class="fa fa-hashtag w3-text-blue"></i> remdata</button>

    </div>
</div>

<div zclass="w3-main" id="main">

<a style="display:none" id="pagev"></a>
<a style="display:none" id="serdata"></a>
<div class="w3-top">
<div class="w3-bar w3-white w3-card-2 w3-animate-top">
<img class="w3-bar-item" src="./img/csi.png" style="width:120px;margin-top:-1px;" onclick="w3_open();">
<a class="w3-bar-item" style="display:none;"><i class="fa fa-check w3-text-green fa-2x w3-animate-zoom"></i> </a>
<input id="dname" title="Name of expected Data.." class="w3-bar-item w3-input w3-small w3-border w3-hover-pale-yellow" placeholder="Data Name" style="margin-top:8px;border-radius: 4px 0px 0px 4px;">
<input id="dval" title="Value of expected Data.." class="w3-bar-item w3-input w3-small w3-border w3-hover-pale-yellow" placeholder="Data Value" style="margin-top:8px;border-radius: 0px 4px 4px 0px;">
 <i title="Add data expectation.." class="fa fa-plus-circle w3-bar-item w3-text-indigo fa-2x add" style="margin-top:2px;" onclick="dadd()"></i>
  <i title="Share Dashboard" class="fa fa-share-alt w3-bar-item w3-text-indigo fa-2x add" style="margin-top:2px;" onclick="document.getElementById('id01').style.display='block'"></i>
<i title="Close side bar" class="w3-hide-large fa fa-chevron-circle-left w3-bar-item w3-text-indigo fa-2x add" style="margin-top:2px;" onclick="w3_close()"></i>
</div>
</div>
<br>
<br>
<br>     

<!--modal-->
  <div id="id01" class="w3-modal" onclick="document.getElementById('id01').style.display='none'">
    <div class="w3-modal-content w3-card-4  w3-animate-zoom" style="width:160px;border-radius:10px;">
      <header class="w3-container w3-white"> 
        <h4 class="w3-text-grey"><i class="fa fa-share-alt w3-text-amber"></i> Share Dashboard</h4>
      </header>
      <div class="w3-container">
      <input id="text" type="text" value="<?php echo $ipfinal; ?>" style="display:none;" />
<div id="qrcode" class="w3-center"></div>
</div>
        <p class="w3-text-grey w3-margin">Scan the qrcode to access dashboard..</p>
      </div>
    </div>

  
<!--chart-->
<div style="position:fixed;width:850px;" class="w3-hide-small w3-hide-medium w3-container w3-round w3-card-2 w3-white w3-margin w3-round w3-small w3-animate-zoom">
  
        <canvas class="chartjs-render-monitor w3-hide-small w3-hide-medium" height="350" width="1002" style="display: block; width: 1002px; height: 501px;" id="canvas"></canvas>
           <i class="fa fa-line-chart fa-5x w3-hide-large"></i>
    </div>

    <div style="margin-top:300px;width:518px;position:fixed;" class="w3-animate-zoom w3-hide-small w3-hide-medium">
   <div class="w3-container w3-indigo w3-margin w3-round w3-card-2" style="height:200px;background-color: rgb(124, 35, 163)">
   <p><i class="fa fa-file-text-o w3-text-white"></i> List of Expected Data</p>
   <div id="datalist" class="w3-small">
   </div>
   </div>
  </div>

  <div style="margin-top:300px;margin-left:500px;width:380px;position:fixed;" class="w3-hide-small w3-hide-medium w3-animate-zoom">
   <div id="databoard" class="w3-container w3-purple w3-margin w3-round w3-card-2" style="height:200px;">
    <p><i class="fa fa-superpowers w3-spin w3-text-white"></i> Data</p>
    <div id="dpanel">
    </div>
   </div>
  </div>
   


<div class="w3-hide-small w3-hide-medium w3-container w3-white w3-round w3-card-2 animated fadeInUp" style="position:fixed;right:25px;width:250px;height:500px;margin-top:15px;">
 <a class="w3-indigo w3-small w3-btn"><i class="w3-text-white fa fa-area-chart"></i> Serial Monitor</a>
 <hr class="w3-card-2">
<div id="Smonitor" class="w3-small">
</div>
</div>
</div>

<!--dash board for small screens-->
<div class="w3-hide-large w3-hide-medium" style="margin-top:110px;">
</div>
<div class="w3-hide-large w3-row-padding w3-margin-bottom">
  <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
    <!--data dashboard-->
    <div class="w3-quarter">
      <div id="sdataboard" class="w3-container w3-purple w3-padding-16">
        <div class="w3-left"><i class="fa fa-superpowers w3-spin w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>Data</h3>
        </div>
        <div class="w3-clear"></div>
        <p id="sdb">No matches.</p>
      </div>
    </div>
    <!--data list-->
    <div class="w3-quarter">
      <div class="w3-container w3-indigo w3-padding-16">
        <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>Data List</h3>
        </div>
        <div class="w3-clear"></div>
        <p id="sdlist">expected data</p>
      </div>
    </div>
    <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
      <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
      <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
      <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
      <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
      <!--spacer-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-light-grey w3-padding-16">
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
      </div>
    </div>
    <!--end spacer-->
    <!--medium serial monitor-->
    <div class="w3-quarter w3-hide-small">
      <div class="w3-container w3-white w3-card-2 w3-round w3-padding-16" style="height:800px;width:417px;">
        <div class="w3-left">
          <p class="w3-btn w3-indigo"><i class="fa fa-area-chart"></i> Serial Monitor</p>
           <div id="msd" class="w3-small">
     </div>
        </div>
    </div>
     <!--serial data-->
    </div>
    <!--small serial monitor-->
     <div class="w3-quarter w3-hide-medium">
      <div class="w3-container w3-white w3-card-2 w3-round w3-padding-16" style="height:800px;">
        <div class="w3-left">
          <p class="w3-btn w3-indigo"><i class="fa fa-area-chart"></i> Serial Monitor</p>
          <div id="ssd" class="w3-small">
     </div>
        </div>  
    </div>
     <!--serial data-->
    </div>
  
  
     </div>
</body>
<script src="./js/monolyth.js"></script>
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
