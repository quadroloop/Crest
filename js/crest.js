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
         
         if( syntax[0]=="dt"||syntax[0]=="ht"||syntax[0]=="img"||syntax[0]=="sec"){
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
  }


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

//importing code template
function import_template() {
 swal.setDefaults({
  input: 'textarea',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2']
})

var steps = [
  {
    title: 'Import Code Template',
    text: 'Paste your template code here'
  },
  'Edit content parameters',
]

swal.queue(steps).then((result) => {
  swal.resetDefaults()

  if (result.value) {
    swal({
      title: 'Template Generated',
      html:
        'Results: <pre>' +
          JSON.stringify(result.value) +
        '</pre>',
      confirmButtonText: 'OK'
    })
  }
})
}


 // Prevent Browser from closing

 window.onbeforeunload = function () {
        return "You have attempted to leave this page. Are you sure?";
};

