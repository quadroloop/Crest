// monolyth.js
// Bryce Mercines 2017

//nvbar js
var cdata; //current data
 var serialf = 0;
 function w3_open() {
  document.getElementById("main").style.marginLeft = "15%";
  document.getElementById("mySidebar").style.width = "15%";
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
}

      

        var MONTHS = ["Node 1", "Node 2", "Node 3", "Node 4", "Node 5", "Node 6", " Node 7", "Node 8", "Node 9", "Node 10", "Node 11", "Node 12"];
        var config = {
            type: 'line',
            data: {
                labels: ["NS 1", "NS 2", "NS 3", "NS 4", "NS 5", "NS 6", "NS 7"],
                datasets: [{
                    label: "Sensor Data",
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [
                     randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                        
                    ],
                    fill: false,
                }, {
                    label: "Sensor Data",
                    fill: false,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Demo Sensor Data Telemetry'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Data over Network'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Values'
                        }
                    }]
                }
            }
        };

        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        setTimeout("w3_open()",500);        //subloop
        //subloop();
        };


        function randomize1() {
            config.data.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() {
                    return randomScalingFactor();
                });

            });

            window.myLine.update();
           serialmonitor();
        }

        var colorNames = Object.keys(window.chartColors);
        document.getElementById('addDataset').addEventListener('click', function() {
            var colorName = colorNames[config.data.datasets.length % colorNames.length];
            var newColor = window.chartColors[colorName];
            var newDataset = {
                label: 'Dataset ' + config.data.datasets.length,
                backgroundColor: newColor,
                borderColor: newColor,
                data: [],
                fill: false
            };

            for (var index = 0; index < config.data.labels.length; ++index) {
                newDataset.data.push(randomScalingFactor());
            }

            config.data.datasets.push(newDataset);
            window.myLine.update();
        });

       // adding data for  silmulation
       var pointcount = 0;
        function addsimln() {
            if (pointcount > 87){
                randomize1();

            }else{
            if (config.data.datasets.length > 0) {
                var month = MONTHS[config.data.labels.length % MONTHS.length];
                config.data.labels.push(month);

                config.data.datasets.forEach(function(dataset) {
                    dataset.data.push(randomScalingFactor());
                });

                window.myLine.update();
            }
        }
         serialmonitor();
         pointcount++
        }

        // removing data
       function remdata() {
            config.data.labels.splice(-1, 1); // remove the label first

            config.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myLine.update();
        }
    


   

        document.getElementById('removeDataset').addEventListener('click', function() {
            config.data.datasets.splice(0, 1);
            window.myLine.update();
        });

        document.getElementById('removeData').addEventListener('click', function() {
            config.data.labels.splice(-1, 1); // remove the label first

            config.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myLine.update();
        });
    


   
//chart2

var config1 = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Page Views",
                    fill: false,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                    
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    
                    ],
                }, {
                    label: "Downloads",
                    fill: false,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    borderDash: [5, 5],
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                        
                    ],
                }, {
                    label: "Session",
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.red,
                    data: [
                    
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                        
                    ],
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'User Acitivity'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Page View'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

       
       // pie chart

    var randomSF = function() {
        return Math.round(Math.random() * 100);
    };

    var config2 = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomSF(),
                    randomSF(),
                    randomSF(),
                    randomSF(),
                    randomSF(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
        title: {
            display:true,
            text:'Session Devices'
        }
        }
    };

    
        
    

    document.getElementById('rdata').addEventListener('click', function() {
        config2.data.datasets.forEach(function(dataset) {
            dataset.data = dataset.data.map(function() {
                return randomSF();
            });
        });

        window.myPie.update();
    });

    var colorNames = Object.keys(window.chartColors);
    document.getElementById('adata').addEventListener('click', function() {
        var newDataset = {
            backgroundColor: [],
            data: [],
            label: 'New dataset ' + config2.data.datasets.length,
        };

        for (var index = 0; index < config2.data.labels.length; ++index) {
            newDataset.data.push(randomSF());

            var colorName = colorNames[index % colorNames.length];;
            var newColor = window.chartColors[colorName];
            newDataset.backgroundColor.push(newColor);
        }

        config2.data.datasets.push(newDataset);
        window.myPie.update();
    });

    document.getElementById('remdata').addEventListener('click', function() {
        config2.data.datasets.splice(0, 1);
        window.myPie.update();
    });

    //piechart add data
    function pdata() {
     var newDataset = {
            backgroundColor: [],
            data: [],
            label: 'New dataset ' + config2.data.datasets.length,
        };

        for (var index = 0; index < config2.data.labels.length; ++index) {
            newDataset.data.push(randomSF());

            var colorName = colorNames[index % colorNames.length];;
            var newColor = window.chartColors[colorName];
            newDataset.backgroundColor.push(newColor);
        }

        config2.data.datasets.push(newDataset);
        window.myPie.update();
    }


    // keycodes UI
    //starts here

     var urx = document.getElementById("vbody");
     urx.addEventListener("keydown", function (e) {
      if (e.keyCode === 37) { 
       randomize1(); //real time data function
      }
      if (e.keyCode === 39) { 
       addsimln(); //add data
      }
      if (e.keyCode === 107) {
       nds(); // add datasheet
      }
      if (e.keyCode === 109) { 
       remdata(); // add  silmulated data
      }

    });


function serialmonitor() {
 var sm = document.getElementById("Smonitor");
 var msd = document.getElementById("msd");
 var ssd = document.getElementById("ssd");
 var sdata = localStorage.getItem("serdata");
 //var sdata = "hello";
 sm.innerHTML+="<a class='w3-text-green'><i class='fa fa-circle'></i> <span class='w3-text-grey'>"+sdata+"</span></a><br>";
 msd.innerHTML+="<a class='w3-text-green'><i class='fa fa-circle'></i> <span class='w3-text-grey'>"+sdata+"</span></a><br>";
 ssd.innerHTML+="<a class='w3-text-green'><i class='fa fa-circle'></i> <span class='w3-text-grey'>"+sdata+"</span></a><br>";
 cdata = sdata.toString();
 datachk();
 serialf++;
 if ( serialf == 24 ) {
 sm.innerHTML = " ";
 ssd.innerHTML = " ";
 msd.innerHTML = " ";
 serialf = 0;
}
}




var listset = []; // collection of data;
var dnlist = []; // list of data names
var dvlist = []; // list of data values
var addflag = 0;


var daddlimit = 0;
function dadd() {
 var dn = document.getElementById("dname").value;
 var dv = document.getElementById("dval").value;
 var mdc = document.getElementById("sdlist");
 var dlist = document.getElementById("datalist");
 if ( dn == [ ] ) {
    alert("put a data name!");
    addflag++;
 }else{
    addflag = 0;
 }
 if ( dv == [ ] ) {
    alert("put a data value!");
    addflag++;
 }else{
    addflag = 0;
 }
 if (addflag == 0) {
 if (listset.indexOf("<a class='w3-text-aqua w3-animate-opacity'><i class='fa fa-circle w3-text-amber'></i> "+dn+" = <span class='w3-blue'>"+dv+"</span></a><br>") > -1){
 
 }else{

 dlist.innerHTML += "<a class='w3-text-aqua w3-animate-opacity'><i class='fa fa-circle w3-text-amber'></i> "+dn+" = <span class='w3-blue'>"+dv+"</span></a><br>";
 mdc.innerHTML = "<a class='w3-text-aqua w3-animate-opacity'><i class='fa fa-circle w3-text-amber'></i> "+dn+" = <span class='w3-blue'>"+dv+"</span></a><br>";
 listset.push("<a class='w3-text-aqua w3-animate-opacity'><i class='fa fa-circle w3-text-amber'></i> "+dn+" = <span class='w3-blue'>"+dv+"</span></a><br>");
 dnlist.push(dn);
 dvlist.push(dv);
daddlimit++;
daddlim();
}
}else{//do nothing 
}
}

function datachk() {  
 var db = document.getElementById("databoard");
 var dp = document.getElementById("dpanel");
var dbs = document.getElementById("sdataboard"); //small data dasboard class
 var dps = document.getElementById("sdb"); // small data banner class
 if (dvlist.indexOf(cdata) > -1){
  var ds = dvlist.indexOf(cdata);
  var dvs = dvlist[ds];
  var dns = dnlist[ds];
  db.className = db.className.replace(" w3-purple "," w3-green ");
  dp.innerHTML = "<h3>Data Matched!</h3><a>Data Info:</a> <a class='w3-text-aqua'>"+dns+"="+dvs+"</a>";
   dbs.className = db.className.replace(" w3-purple "," w3-green ");
  dps.innerHTML = "Data Matched! <a>Data Info:</a> <a class='w3-text-aqua'>"+dns+"="+dvs+"</a>";

 }else{
   db.className = db.className.replace(" w3-green "," w3-purple "); 
   dp.innerHTML = "<h3>No Matches.</h3>";
    dbs.className = db.className.replace(" w3-green "," w3-purple "); 
   dps.innerHTML = "No Matches.";
 }
}

 
function daddlim() {
    if (daddlimit == 8) {
        document.getElementById("datalist").innerHTML = "";
        daddlimit = 0;
    }
}