//monolythics.js
//Bryce Mercines 2017

//update analytics data.

var usrpin = ["010","011","012","013","014","015","016","017","019","020"]; // set of user pins.
var ahistory = []; // history of logged students.
var pinstate = 0; // set pincode log.
var dstate = 0;
var atoggle = 0;

var auto_refresh = setInterval(
      function ()
      {
         $('#mode').load('node.php').fadeIn("slow");
        // functions here boy
        usrchk();
      }, 200); // refresh every 10000 milliseconds

function usrchk(){
    var xenon = document.getElementById("mode").innerHTML;
        if (xenon == 1){
          //document.getElementById("pincode").style.display = "none";
         hidepin();
        }else{
          //document.getElementById("pincode").style.display = "block";
         pincode();
        }
}

function hidepin() {
  if (pinstate == 1) {
    pincode();
  }else{
  document.getElementById("pincode").style.display = "none";
}
}
function scan() {
  document.getElementById("loader").style.display = "block";  
  dstate = 1;
}
function pincode() {
 if (dstate == 0){hidepin()}else{
 pinstate = 1;
  document.getElementById("pincode").style.display = "block"; 
    document.getElementById("pincode").focus();
    } 
}

  var urx = document.getElementById("pincode");
     urx.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) { 
       datamain();
      }

    });

  var kcodemain = document.getElementById("vbody");
    kcodemain.addEventListener("keydown", function (j) {
      if (j.keyCode === 192 && atoggle==0){
        document.getElementById("attdn").style.display = "block";
        lister();
        atoggle++;
       }else{
        document.getElementById("attdn").style.display = "none";
        atoggle = 0;
        document.getElementById("slist").innerHTML = " ";
       }
    });



function datamain() {
  var pin = document.getElementById("pincode");
  

  pin.focus();
  if (usrpin.indexOf(pin.value) == -1) {
   // alert("already logged in!");
   document.getElementById("ar").style.display = "none";
    document.getElementById("nr").style.display = "block";
    document.getElementById("def").style.display = "none";

  }else{
    //usrpin.push(pin.value);
    if (ahistory.indexOf(pin.value) > -1){
         document.getElementById("ar").style.display = "none";
document.getElementById("nr").style.display = "block";
    document.getElementById("def").style.display = "none";

    }else{
      // log the student.
    ahistory.push(pin.value);
    document.getElementById("ar").style.display = "block";
    document.getElementById("nr").style.display = "none";
    document.getElementById("def").style.display = "none";

}
  }
  pin.value = "";
  pinstate = 0;
}

function lister() {
    var lister = document.getElementById("slist");
    /*
    for (var i=0;i<usrpin.length;i++){
      lister.innerHTML += "<p>hello<p>";
    }
*/
    
    var stnum = 0;
    var status;
    var d = new Date();
    for (var i=0;i < usrpin.length;i++) {
      stnum++;
      if (ahistory.indexOf(usrpin[i]) > -1) {
        status = "Present";
      lister.innerHTML += "<div class='w3-bar w3-white w3-text-black'><a class='w3-bar-item'>Student "+stnum+"</a><a class='w3-bar-item w3-text-green'>"+status+"</a><a class='w3-bar-item w3-text-blue'>"+d.getHours()+":"+d.getMinutes()+"</a></div>";
   }else{
      status = "Absent";
          lister.innerHTML += "<div class='w3-bar w3-white w3-text-black w3-card-2'><a class='w3-bar-item'>Student "+stnum+"</a><a class='w3-bar-item w3-text-red'>"+status+"</a><a class='w3-bar-item w3-text-blue'>"+d.getHours()+":"+d.getMinutes()+"</a></div>";

   }

} 

}