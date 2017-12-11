//Crest UI 
// javascript file for UI functionalities
// Bryce Mercines 2017

// UI dashboard close and open

function w3_open() {
  document.getElementById("main").style.marginLeft = "15%";
  document.getElementById("mySidebar").style.width = "15%";
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
}



window.onload = function() {
  setTimeout("w3_open()",500); // open dashboard
  document.getElementById("data").focus(); // focus on command bar..
}


// Tabs UI
var ctab = "tools"

function open_tools() {
  document.getElementById(ctab).style.display = "none";	
  document.getElementById("tools").style.display = "block";
  document.getElementById("tool_state").innerHTML = '<i class="fa fa-map w3-text-grey"></i> TOOLS';
  ctab = "tools"
}

function open_settings() {
	document.getElementById(ctab).style.display = "none";	
	document.getElementById("settings").style.display = "block";
	document.getElementById("tool_state").innerHTML = '<i class="fa fa-gear w3-text-grey"></i> SETTINGS';
	ctab = "settings";
}

function set_editor() {
	swal({
  title: '<i class="fa fa-cog"></i> Code &amp; Editor Settings',
  html:
    '<p>set mode and editor theme..</p> <select name = "dropdown"><option value = "Java" selected>Java</option><option value =" ABAP"> ABAP</option><option value =" ABC"> ABC</option><option value =" ActionScript"> ActionScript</option><option value =" ADA"> ADA</option><option value =" Apache_Conf"> Apache_Conf</option><option value =" AsciiDoc"> AsciiDoc</option><option value =" Assembly_x86"> Assembly_x86</option><option value =" AutoHotKey"> AutoHotKey</option><option value =" BatchFile"> BatchFile</option><option value =" Bro"> Bro</option><option value =" C_Cpp"> C_Cpp</option><option value =" C9Search"> C9Search</option><option value =" Cirru"> Cirru</option><option value =" Clojure"> Clojure</option><option value =" Cobol"> Cobol</option><option value =" coffee"> coffee</option><option value =" ColdFusion"> ColdFusion</option><option value =" CSharp"> CSharp</option><option value =" Csound_Document"> Csound_Document</option><option value =" Csound_Orchestra"> Csound_Orchestra</option><option value =" Csound_Score"> Csound_Score</option><option value =" CSS"> CSS</option><option value =" Curly"> Curly</option><option value =" D"> D</option><option value =" Dart"> Dart</option><option value =" Diff"> Diff</option><option value =" Dockerfile"> Dockerfile</option><option value =" Dot"> Dot</option><option value =" Drools"> Drools</option><option value =" Dummy"> Dummy</option><option value =" DummySyntax"> DummySyntax</option><option value =" Eiffel"> Eiffel</option><option value =" EJS"> EJS</option><option value =" Elixir"> Elixir</option><option value =" Elm"> Elm</option><option value =" Erlang"> Erlang</option><option value =" Forth"> Forth</option><option value =" Fortran"> Fortran</option><option value =" FTL"> FTL</option><option value =" Gcode"> Gcode</option><option value =" Gherkin"> Gherkin</option><option value =" Gitignore"> Gitignore</option><option value =" Glsl"> Glsl</option><option value =" Gobstones"> Gobstones</option><option value =" golang"> golang</option><option value =" GraphQLSchema"> GraphQLSchema</option><option value =" Groovy"> Groovy</option><option value =" HAML"> HAML</option><option value =" Handlebars"> Handlebars</option><option value =" Haskell"> Haskell</option><option value =" Haskell_Cabal"> Haskell_Cabal</option><option value =" haXe"> haXe</option><option value =" Hjson"> Hjson</option><option value =" HTML"> HTML</option><option value =" HTML_Elixir"> HTML_Elixir</option><option value =" HTML_Ruby"> HTML_Ruby</option><option value =" INI"> INI</option><option value =" Io"> Io</option><option value =" Jack"> Jack</option><option value =" Jade"> Jade</option><option value =" Java"> Java</option><option value =" JavaScript"> JavaScript</option><option value =" JSON"> JSON</option><option value =" JSONiq"> JSONiq</option><option value =" JSP"> JSP</option><option value =" JSSM"> JSSM</option><option value =" JSX"> JSX</option><option value =" Julia"> Julia</option><option value =" Kotlin"> Kotlin</option><option value =" LaTeX"> LaTeX</option><option value =" LESS"> LESS</option><option value =" Liquid"> Liquid</option><option value =" Lisp"> Lisp</option><option value =" LiveScript"> LiveScript</option><option value =" LogiQL"> LogiQL</option><option value =" LSL"> LSL</option><option value =" Lua"> Lua</option><option value =" LuaPage"> LuaPage</option><option value =" Lucene"> Lucene</option><option value =" Makefile"> Makefile</option><option value =" Markdown"> Markdown</option><option value =" Mask"> Mask</option><option value =" MATLAB"> MATLAB</option><option value =" Maze"> Maze</option><option value =" MEL"> MEL</option><option value =" MUSHCode"> MUSHCode</option><option value =" MySQL"> MySQL</option><option value =" Nix"> Nix</option><option value =" NSIS"> NSIS</option><option value =" ObjectiveC"> ObjectiveC</option><option value =" OCaml"> OCaml</option><option value =" Pascal"> Pascal</option><option value =" Perl"> Perl</option><option value =" pgSQL"> pgSQL</option><option value =" PHP"> PHP</option><option value =" Pig"> Pig</option><option value =" Powershell"> Powershell</option><option value =" Praat"> Praat</option><option value =" Prolog"> Prolog</option><option value =" Properties"> Properties</option><option value =" Protobuf"> Protobuf</option><option value =" Python"> Python</option><option value =" R"> R</option><option value =" Razor"> Razor</option><option value =" RDoc"> RDoc</option><option value =" Red"> Red</option><option value =" RHTML"> RHTML</option><option value =" RST"> RST</option><option value =" Ruby"> Ruby</option><option value =" Rust"> Rust</option><option value =" SASS"> SASS</option><option value =" SCAD"> SCAD</option><option value =" Scala"> Scala</option><option value =" Scheme"> Scheme</option><option value =" SCSS"> SCSS</option><option value =" SH"> SH</option><option value =" SJS"> SJS</option><option value =" Smarty"> Smarty</option><option value =" snippets"> snippets</option><option value =" Soy_Template"> Soy_Template</option><option value =" Space"> Space</option><option value =" SQL"> SQL</option><option value =" SQLServer"> SQLServer</option><option value =" Stylus"> Stylus</option><option value =" SVG"> SVG</option><option value =" Swift"> Swift</option><option value =" Tcl"> Tcl</option><option value =" Tex"> Tex</option><option value =" Text"> Text</option><option value =" Textile"> Textile</option><option value =" Toml"> Toml</option><option value =" TSX"> TSX</option><option value =" Twig"> Twig</option><option value =" Typescript"> Typescript</option><option value =" Vala"> Vala</option><option value =" VBScript"> VBScript</option><option value =" Velocity"> Velocity</option><option value =" Verilog"> Verilog</option><option value =" VHDL"> VHDL</option><option value =" Wollok"> Wollok</option><option value =" XML"> XML</option><option value =" XQuery"> XQuery</option><option value =" YAML"> YAML</option><option value =" Django"> Django</option></select>',

  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-check"></i> Save Changes',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
  '<i class="fa fa-close"></i> Cancel',
  cancelButtonAriaLabel: 'Thumbs down',
})
}