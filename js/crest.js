// Crest | Code builder toolkit
// Bryce Mercines 2017
// functions file..




// Important global variables for templating
var stitle; // Title of Setting
var hline; // headline text.
var headline_classifier; // headline class
var descript_text; // description text
var descript_classifier; // dexription classifier
var image_classifier; // image class
var section = "none";
var record_values = []; // array of sumitted values
var val_nav = 0; //navigation integer
var unshift  = 0;
var command_pass; // data to be passed to the kernel function for UI commands


// Pressing Enter key!

        var retcount = 0;

var urx = document.getElementById("data");
     urx.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) { 
        var log =  document.getElementById('logs');
        var str = urx.value;
        var syntax = str.split("#");
        // process syntax
         if( syntax.length > 4 ){
           log.innerHTML += '<a class="w3-text-red"><i class="fa fa-slack"></i> WP-ERROR (fatal) ['+urx.value+'] Syntax too long, not supported!</a>  ';
         }else{
          log.innerHTML += '<a class="w3-text-green"><i class="fa fa-slack"></i> WP-QUERY. ['+urx.value+'] Syntax OK</a>  ';
         }
         
         if( syntax[0]=="dt"||syntax[0]=="ht"||syntax[0]=="img"||syntax[0]=="sec"||syntax[0]=="affix"){
          log.innerHTML += '<a class="w3-text-green"><i class="fa fa-slack"></i> WP-QUERY. ['+urx.value+'] Syntax OK</a>  ';
          process_pointer();
        }else{
          if(syntax[0]==""){
            command_pass = urx.value;
            crest_kernel();
          }
          log.innerHTML += '<a class="w3-text-red"><i class="fa fa-slack"></i> WP-ERROR (fatal) ['+urx.value+'] Type Not Found.</a>  ';
        }

        retcount++;
        if(retcount > 30 ){
          log.innerHTML = " ";
          retcount = 0;
        }
        // record sumitted values
        if (record_values.indexOf(urx.value) > -1){
        // do nothing
      }else{
        record_values.push(urx.value);
      }
        urx.value = ""; // empty command box after submission
      }

      // use arrow keys to navigate recent values submitted
      // arrow down
      if (e.keyCode === 40 || e.keyCode === 38) {
        if(record_values.length > 0 || val_nav > record_values.length){
        val_nav++;
        if (val_nav == record_values.length) {
            val_nav = 0;
         }
         urx.value = record_values[val_nav];
       }else{
        // do nothing if array of subitted values is empty
       }
     }
    });


  function process_pointer() {
     var input = document.getElementById('data');
     var log = document.getElementById('logs');

     //check if section is set
       if (section=="none") {
       log.innerHTML += '<a class="w3-text-red"><i class="fa fa-cube"></i> WP-ERROR (fatal) NO SECTION! SET A SECTION FIRST!</a>  ';
        }else{
          // do nothing
        }
     // detect syntax command..
     var syntax = input.value.split("#");
     if (syntax[0] =="dt"){
      // description text command
      stitle = syntax[1];
      descript_text = syntax[2];
      descript_classifier = syntax[3];
      addscript(); // call description fucntion;
     }
     if (syntax[0]=="ht"){
      // headline text function
      stitle = syntax[1];
      hline = syntax[2];
      headline_classifier = syntax[3];
      addhead(); // call headline function
     }
     if (syntax[0]=="img"){
      stitle =syntax[1];
      image_classifier = syntax[2];
      addimage(); // call image function..
     }
     if (syntax[0]=="sec"){
      section = syntax[1]+"_section";
     }
     if (syntax[0]=="affix"){
       add_affix();
     }
  } // end of process pointer


function addhead(){
 // ace editor set value.
 var editor = ace.edit("editor");	
 //creates a blog of code for the headline section..
 var codebin = document.getElementById("code_output");
 // add title
  codebin.innerHTML = " ";
  codebin.innerHTML += " //"+stitle+"&#13;&#10;&#13;&#10;";
  codebin.innerHTML += " $wp_customize->add_setting('"+headline_classifier+"',array(&#13;&#10;";
  codebin.innerHTML +=	"'default' => '"+hline+"'&#13;&#10;";
  codebin.innerHTML +=	"));&#13;&#10;";
  codebin.innerHTML += "&#13;&#10;";
  codebin.innerHTML += "$wp_customize->add_control(new WP_Customize_Control($wp_customize, '"+headline_classifier+"_control', array(&#13;&#10;";
  codebin.innerHTML +=  "	'label' => '"+stitle+"',&#13;&#10;";
  codebin.innerHTML +=  " 	'section' => '"+section+"',&#13;&#10;";
  codebin.innerHTML +=  "	'settings' => '"+headline_classifier+"'&#13;&#10;";
  codebin.innerHTML += 	")));&#13;&#10;&#13;&#10;";
  editor.insert(document.getElementById('code_output').value,1);  
}

// function for creating descritions, multi line stuff

 function addscript() {
 	 // ace editor set value.
    var editor = ace.edit("editor");
    var codebin = document.getElementById("code_output");

  codebin.innerHTML = " ";
  codebin.innerHTML += " //"+stitle+"&#13;&#10;&#13;&#10;";
  codebin.innerHTML += " $wp_customize->add_setting('"+descript_classifier+"',array(&#13;&#10;";
  codebin.innerHTML +=	"&quot;default&quot; => &quot;"+descript_text+"&quot;&#13;&#10;";
  codebin.innerHTML +=	"));&#13;&#10;";
  codebin.innerHTML += "&#13;&#10;";
  codebin.innerHTML += "$wp_customize->add_control(new WP_Customize_Control($wp_customize, '"+descript_classifier+"_control', array(&#13;&#10;";
  codebin.innerHTML +=  "	'label' => '"+stitle+"',&#13;&#10;";
  codebin.innerHTML +=  " 	'section' => '"+section+"',&#13;&#10;";
  codebin.innerHTML +=  "	'settings' => '"+descript_classifier+"',&#13;&#10;";
  codebin.innerHTML +=  "	'type' => 'textarea'&#13;&#10;";
  codebin.innerHTML += 	")));&#13;&#10;&#13;&#10;";    
  editor.insert(document.getElementById('code_output').value,1);  

 }

 // function for image creation

 function addimage() {
 	 // ace editor set value.
    var editor = ace.edit("editor");
    var codebin = document.getElementById("code_output");

   codebin.innerHTML = " ";
   codebin.innerHTML += " //"+stitle+"&#13;&#10;&#13;&#10;";
   codebin.innerHTML += "$wp_customize->add_setting('"+image_classifier+"',array(&#13;&#10;";
   codebin.innerHTML += "));&#13;&#10;";

  codebin.innerHTML += 	"$wp_customize->add_control(new WP_Customize_Cropped_Image_Control($wp_customize, '"+image_classifier+"', array(&#13;&#10;";
  codebin.innerHTML += 	"	'label' => '"+stitle+"',&#13;&#10;";
  codebin.innerHTML += 	"	'section' => '"+section+"',&#13;&#10;";
  codebin.innerHTML += 	"	'settings' => '"+image_classifier+"',&#13;&#10;";
  codebin.innerHTML += 	"	'width' => 5000,&#13;&#10;";
  codebin.innerHTML += 	"	'height' => 5000&#13;&#10;";
  codebin.innerHTML += 	"	)));&#13;&#10;&#13;&#10;";
  editor.insert(document.getElementById('code_output').value,1);  

 }

 
// clear editor value; 
function clearcode() {
  editor.setValue() = "";
}

//tag history
function tag_history() {
  swal(
    'Feature under Developement',
    'viewing extracted tags..',
    'error'
    )
}

//importing code template
var binder = "[#"; 
var parser = "temp_item[";
var parse_count = 0;
function import_template() {
 swal.setDefaults({
  input: 'textarea',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['#']
})

var steps = [
  {
    title: 'Import Code Template',
    text: 'Paste your template code here'
  },
]

swal.queue(steps).then((result) => {
  swal.resetDefaults()

  if (result.value) {
    var hold_code = document.getElementById("code_base");
    hold_code.value = "";
    hold_code.value = result.value;
  
 template_parser(); // 1st call
 binder = "#]";
parser = "]";  
template_parser();
 binder = "[#"; 
parser = "temp_item[";
 alert(hold_code.value);
  }
})
}

function template_parser() {  
var hold_code = document.getElementById("code_base");
var searchfor = '';
var replacewith = parser.replace(/\r/gi,'');
var text = hold_code.value.replace(/\r/gi,'')
var flagg = 'g';
var flagi = 'i';
var flagm = '';
if(document.getElementById('globl').checked == false) flagg = '';
if(document.getElementById('case_sen').checked == true) flagi = '';
if(document.getElementById('multi_line') != null)
if(document.getElementById('multi_line').checked == true) flagm = 'm';
var flags = flagg + flagi + flagm;
searchfor = binder.replace(/\r/gi,'').replace(/([.*+?^=!:${}()|\[\]\/\\])/g,'\\$1');
var killfun = 'no';
try{var searchexp = new RegExp(searchfor,flags);}
catch(err){
alert('Something is incorrect (' + err + ') within your regular expression.\nBe sure special characters .*+?^=!:${}()|\\ used as literals have been escaped with a backslash.');
killfun = 'yes';}
if(killfun == 'no'){
var rcount = 0;
var matched = text.match(searchexp);
if(matched != null) rcount = matched.length;
text = text.replace(searchexp,replacewith);
hold_code.value = text;
}}



// success alert for templating
function success() {
  swal (
    "Template Created!",
    "successfully imported code!",
    'success'
    )
}

//API functions

function api_POST() {
 swal(
  'Feature Under Developement',
  'you called a POST API function',
  'error'
)
}

function api_GET() {
 swal(
  'Feature Under Developement',
  'you called a GET API function',
  'error'
)
}

function api_SEND() {
 swal(
  'Feature under Developement',
  'you called a SEND API function',
  'error'
)
}

function api_listen() {
  swal(
   'CREST API Listener',
   'Listening to Crest API Server',
   'error' 
    )
}



// add suffix and prefix functions from text
// TextMechanic.com
// (c) http://textmechanic.com/wp-content/uploads/source/Add-Prefix-Suffix-to-Text.html

function add_affix(){
var inputdata = document.getElementById("data").value;
var affix = inputdata.split("#");  
var prfx = affix[1];
var sufx = affix[2];
var text = editor.getValue();
var belong2 = 'pbclevtug grkgzrpunavp.pbz';
text = text.replace(/\r/g,'');
text = text.split(/\n/);
var textlen = text.length;
var textarrout = new Array();
for(var x=0;x<textlen;x++){
textarrout[x] = prfx + text[x] + sufx;}
textout = textarrout.join('\n');
document.getElementById('output').value = textout;
editor.setValue(document.getElementById("output").value);
count_me();}




// File functions

function file_chk() {
  if ( file_holder.value == [ ] ){
    setTimeout("file_chk();",200)
  }else{
    // do nothing
    setTimeout("upload_process();",200);
   }
}

function upload() {
  var file_holder = document.getElementById("file_holder");
  file_holder.value = "";
  file_holder.click();
  file_chk();
}

function upload_process()
{
    var fileToLoad = document.getElementById("file_holder").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        editor.setValue(textFromFileLoaded);
        uploaded = 1;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}



function save() {
    var editor = ace.edit("editor");  
    var script = editor.getValue();
    var textToSave = script;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "crest.file";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
  }

  // destroy clicked element for file.js
  function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}





 // Prevent Browser from closing

 window.onbeforeunload = function () {
        return "You have attempted to leave this page. Are you sure?";
};

