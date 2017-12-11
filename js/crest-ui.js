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


 
function editor_bind_settings() {
 
 var mode = document.getElementById('language');
 var theme = document.getElementById('theme');

 

 var supportedModes = {
    ABAP:        ["abap"],
    ABC:         ["abc"],
    ActionScript:["as"],
    ADA:         ["ada|adb"],
    Apache_Conf: ["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],
    AsciiDoc:    ["asciidoc|adoc"],
    Assembly_x86:["asm|a"],
    AutoHotKey:  ["ahk"],
    BatchFile:   ["bat|cmd"],
    Bro:         ["bro"],
    C_Cpp:       ["cpp|c|cc|cxx|h|hh|hpp|ino"],
    C9Search:    ["c9search_results"],
    Cirru:       ["cirru|cr"],
    Clojure:     ["clj|cljs"],
    Cobol:       ["CBL|COB"],
    coffee:      ["coffee|cf|cson|^Cakefile"],
    ColdFusion:  ["cfm"],
    CSharp:      ["cs"],
    Csound_Document: ["csd"],
    Csound_Orchestra: ["orc"],
    Csound_Score: ["sco"],
    CSS:         ["css"],
    Curly:       ["curly"],
    D:           ["d|di"],
    Dart:        ["dart"],
    Diff:        ["diff|patch"],
    Dockerfile:  ["^Dockerfile"],
    Dot:         ["dot"],
    Drools:      ["drl"],
    Dummy:       ["dummy"],
    DummySyntax: ["dummy"],
    Eiffel:      ["e|ge"],
    EJS:         ["ejs"],
    Elixir:      ["ex|exs"],
    Elm:         ["elm"],
    Erlang:      ["erl|hrl"],
    Forth:       ["frt|fs|ldr|fth|4th"],
    Fortran:     ["f|f90"],
    FTL:         ["ftl"],
    Gcode:       ["gcode"],
    Gherkin:     ["feature"],
    Gitignore:   ["^.gitignore"],
    Glsl:        ["glsl|frag|vert"],
    Gobstones:   ["gbs"],
    golang:      ["go"],
    GraphQLSchema: ["gql"],
    Groovy:      ["groovy"],
    HAML:        ["haml"],
    Handlebars:  ["hbs|handlebars|tpl|mustache"],
    Haskell:     ["hs"],
    Haskell_Cabal:     ["cabal"],
    haXe:        ["hx"],
    Hjson:       ["hjson"],
    HTML:        ["html|htm|xhtml|vue|we|wpy"],
    HTML_Elixir: ["eex|html.eex"],
    HTML_Ruby:   ["erb|rhtml|html.erb"],
    INI:         ["ini|conf|cfg|prefs"],
    Io:          ["io"],
    Jack:        ["jack"],
    Jade:        ["jade|pug"],
    Java:        ["java"],
    JavaScript:  ["js|jsm|jsx"],
    JSON:        ["json"],
    JSONiq:      ["jq"],
    JSP:         ["jsp"],
    JSSM:        ["jssm|jssm_state"],
    JSX:         ["jsx"],
    Julia:       ["jl"],
    Kotlin:      ["kt|kts"],
    LaTeX:       ["tex|latex|ltx|bib"],
    LESS:        ["less"],
    Liquid:      ["liquid"],
    Lisp:        ["lisp"],
    LiveScript:  ["ls"],
    LogiQL:      ["logic|lql"],
    LSL:         ["lsl"],
    Lua:         ["lua"],
    LuaPage:     ["lp"],
    Lucene:      ["lucene"],
    Makefile:    ["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],
    Markdown:    ["md|markdown"],
    Mask:        ["mask"],
    MATLAB:      ["matlab"],
    Maze:        ["mz"],
    MEL:         ["mel"],
    MUSHCode:    ["mc|mush"],
    MySQL:       ["mysql"],
    Nix:         ["nix"],
    NSIS:        ["nsi|nsh"],
    ObjectiveC:  ["m|mm"],
    OCaml:       ["ml|mli"],
    Pascal:      ["pas|p"],
    Perl:        ["pl|pm"],
    pgSQL:       ["pgsql"],
    PHP:         ["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],
    Pig:         ["pig"],
    Powershell:  ["ps1"],
    Praat:       ["praat|praatscript|psc|proc"],
    Prolog:      ["plg|prolog"],
    Properties:  ["properties"],
    Protobuf:    ["proto"],
    Python:      ["py"],
    R:           ["r"],
    Razor:       ["cshtml|asp"],
    RDoc:        ["Rd"],
    Red:         ["red|reds"],
    RHTML:       ["Rhtml"],
    RST:         ["rst"],
    Ruby:        ["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],
    Rust:        ["rs"],
    SASS:        ["sass"],
    SCAD:        ["scad"],
    Scala:       ["scala"],
    Scheme:      ["scm|sm|rkt|oak|scheme"],
    SCSS:        ["scss"],
    SH:          ["sh|bash|^.bashrc"],
    SJS:         ["sjs"],
    Smarty:      ["smarty|tpl"],
    snippets:    ["snippets"],
    Soy_Template:["soy"],
    Space:       ["space"],
    SQL:         ["sql"],
    SQLServer:   ["sqlserver"],
    Stylus:      ["styl|stylus"],
    SVG:         ["svg"],
    Swift:       ["swift"],
    Tcl:         ["tcl"],
    Tex:         ["tex"],
    Text:        ["txt"],
    Textile:     ["textile"],
    Toml:        ["toml"],
    TSX:         ["tsx"],
    Twig:        ["twig|swig"],
    Typescript:  ["ts|typescript|str"],
    Vala:        ["vala"],
    VBScript:    ["vbs|vb"],
    Velocity:    ["vm"],
    Verilog:     ["v|vh|sv|svh"],
    VHDL:        ["vhd|vhdl"],
    Wollok:      ["wlk|wpgm|wtest"],
    XML:         ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],
    XQuery:      ["xq"],
    YAML:        ["yaml|yml"],
    Django:      ["html"]
};

var themeData = {
SQL_Server:["sqlserver"],
Ambiance:["ambiance"],
Chaos:["chaos"],
Clouds_Midnight:["clouds_midnight"],
Cobalt:["cobalt"],
Gruvbox:["gruvbox"],
Green_on_Black:["gob"],
idle_Fingers:["idle_fingers"],
krTheme:["kr_theme"],
Merbivore:["merbivore"],
Merbivore_Soft:["merbivore_soft"],
Mono_Industrial:["mono_industrial"],
Monokai:["monokai"],
Pastel_on_dark:["pastel_on_dark"],
Solarized_Dark:["solarized_dark"],
Terminal:["terminal"],
Tomorrow_Night:["tomorrow_night"],
Tomorrow_Night_Blue:["tomorrow_night_blue"],
Tomorrow_Night_Bright:["tomorrow_night_bright"],
Tomorrow_Night_80s:["tomorrow_night_eighties"],
Twilight:["twilight"],
Vibrant_Ink:["vibrant_ink"]
};


 var set_mode_to_string = supportedModes[mode.value];
 var string_mode = String(set_mode_to_string);
 var set_mode = string_mode.split("|");

 var theme_selection = theme.value.split(" ").join("_");
 var selected_theme = themeData[theme_selection];

 // reconfigure ace editor
 editor.setOptions({
   useWrapMode: true,
   highlightActiveLine: true,
   showPrintMargin: false,
   theme: 'ace/theme/'+ selected_theme,
   mode: 'ace/mode/'+ set_mode[0]
})
 
}


function set_editor() {
swal({
  title: '<i class="fa fa-cog"></i> Code &amp; Editor Settings',
  html:
    '<p>set mode and editor theme..</p> <a>Language: </a><select name="dropdown" id="language"><option value="PHP" selected>PHP</option><option value="ABAP"> ABAP</option><option value="ABC"> ABC</option><option value="ActionScript"> ActionScript</option><option value="ADA"> ADA</option><option value="Apache_Conf"> Apache_Conf</option><option value="AsciiDoc"> AsciiDoc</option><option value="Assembly_x86"> Assembly_x86</option><option value="AutoHotKey"> AutoHotKey</option><option value="BatchFile"> BatchFile</option><option value="Bro"> Bro</option><option value="C_Cpp"> C_Cpp</option><option value="C9Search"> C9Search</option><option value="Cirru"> Cirru</option><option value="Clojure"> Clojure</option><option value="Cobol"> Cobol</option><option value="coffee"> coffee</option><option value="ColdFusion"> ColdFusion</option><option value="CSharp"> CSharp</option><option value="Csound_Document"> Csound_Document</option><option value="Csound_Orchestra"> Csound_Orchestra</option><option value="Csound_Score"> Csound_Score</option><option value="CSS"> CSS</option><option value="Curly"> Curly</option><option value="D"> D</option><option value="Dart"> Dart</option><option value="Diff"> Diff</option><option value="Dockerfile"> Dockerfile</option><option value="Dot"> Dot</option><option value="Drools"> Drools</option><option value="Dummy"> Dummy</option><option value="DummySyntax"> DummySyntax</option><option value="Eiffel"> Eiffel</option><option value="EJS"> EJS</option><option value="Elixir"> Elixir</option><option value="Elm"> Elm</option><option value="Erlang"> Erlang</option><option value="Forth"> Forth</option><option value="Fortran"> Fortran</option><option value="FTL"> FTL</option><option value="Gcode"> Gcode</option><option value="Gherkin"> Gherkin</option><option value="Gitignore"> Gitignore</option><option value="Glsl"> Glsl</option><option value="Gobstones"> Gobstones</option><option value="golang"> golang</option><option value="GraphQLSchema"> GraphQLSchema</option><option value="Groovy"> Groovy</option><option value="HAML"> HAML</option><option value="Handlebars"> Handlebars</option><option value="Haskell"> Haskell</option><option value="Haskell_Cabal"> Haskell_Cabal</option><option value="haXe"> haXe</option><option value="Hjson"> Hjson</option><option value="HTML"> HTML</option><option value="HTML_Elixir"> HTML_Elixir</option><option value="HTML_Ruby"> HTML_Ruby</option><option value="INI"> INI</option><option value="Io"> Io</option><option value="Jack"> Jack</option><option value="Jade"> Jade</option><option value="Java"> Java</option><option value="JavaScript"> JavaScript</option><option value="JSON"> JSON</option><option value="JSONiq"> JSONiq</option><option value="JSP"> JSP</option><option value="JSSM"> JSSM</option><option value="JSX"> JSX</option><option value="Julia"> Julia</option><option value="Kotlin"> Kotlin</option><option value="LaTeX"> LaTeX</option><option value="LESS"> LESS</option><option value="Liquid"> Liquid</option><option value="Lisp"> Lisp</option><option value="LiveScript"> LiveScript</option><option value="LogiQL"> LogiQL</option><option value="LSL"> LSL</option><option value="Lua"> Lua</option><option value="LuaPage"> LuaPage</option><option value="Lucene"> Lucene</option><option value="Makefile"> Makefile</option><option value="Markdown"> Markdown</option><option value="Mask"> Mask</option><option value="MATLAB"> MATLAB</option><option value="Maze"> Maze</option><option value="MEL"> MEL</option><option value="MUSHCode"> MUSHCode</option><option value="MySQL"> MySQL</option><option value="Nix"> Nix</option><option value="NSIS"> NSIS</option><option value="ObjectiveC"> ObjectiveC</option><option value="OCaml"> OCaml</option><option value="Pascal"> Pascal</option><option value="Perl"> Perl</option><option value="pgSQL"> pgSQL</option><option value="PHP"> PHP</option><option value="Pig"> Pig</option><option value="Powershell"> Powershell</option><option value="Praat"> Praat</option><option value="Prolog"> Prolog</option><option value="Properties"> Properties</option><option value="Protobuf"> Protobuf</option><option value="Python"> Python</option><option value="R"> R</option><option value="Razor"> Razor</option><option value="RDoc"> RDoc</option><option value="Red"> Red</option><option value="RHTML"> RHTML</option><option value="RST"> RST</option><option value="Ruby"> Ruby</option><option value="Rust"> Rust</option><option value="SASS"> SASS</option><option value="SCAD">SCAD</option><option value="Scala"> Scala</option><option value="Scheme">Scheme</option><option value="SCSS"> SCSS</option><option value="SH"> SH</option><option value="SJS"> SJS</option><option value="Smarty"> Smarty</option><option value="snippets"> snippets</option><option value="Soy_Template"> Soy_Template</option><option value="Space"> Space</option><option value="SQL"> SQL</option><option value="SQLServer"> SQLServer</option><option value="Stylus"> Stylus</option><option value="SVG"> SVG</option><option value="Swift"> Swift</option><option value="Tcl"> Tcl</option><option value="Tex"> Tex</option><option value="Text"> Text</option><option value="Textile"> Textile</option><option value="Toml"> Toml</option><option value="TSX"> TSX</option><option value="Twig"> Twig</option><option value="Typescript"> Typescript</option><option value="Vala"> Vala</option><option value="VBScript"> VBScript</option><option value="Velocity"> Velocity</option><option value="Verilog"> Verilog</option><option value="VHDL"> VHDL</option><option value="Wollok"> Wollok</option><option value="XML"> XML</option><option value="XQuery"> XQuery</option><option value="YAML"> YAML</option><option value="Django"> Django</option></select><br><br><a>Editor Theme: <select id="theme"><option value="monokai">Monokai</option><option value="SQL Server">SQL Server</option><option value="Ambiance">Ambiance</option><option value="Chaos">Chaos</option><option value="Clouds Midnight">Clouds Midnight</option><option value="Cobalt">Cobalt</option><option value="Gruvbox">Gruvbox</option><option value="Green on Black">Green on Black</option><option value="idle Fingers">idle Fingers</option><option value="krTheme">krTheme</option><option value="Merbivore">Merbivore</option><option value="Merbivore Soft">Merbivore Soft</option><option value="Mono Industrial">Mono Industrial</option><option value="Monokai">Monokai</option><option value="Pastel on dark">Pastel on dark</option><option value="Solarized Dark">Solarized Dark</option><option value="Terminal">Terminal</option><option value="Tomorrow Night">Tomorrow Night</option><option value="Tomorrow Night Blue">Tomorrow Night Blue</option><option value="Tomorrow Night Bright">Tomorrow Night Bright</option><option value="Tomorrow Night 80s">Tomorrow Night 80s</option><option value="Twilight">Twilight</option><option value="Vibrant Ink">Vibrant Ink</option></select></a>',
  showCancelButton: true,
  confirmButtonColor: 'rgb(110, 11, 172)',
  cancelButtonColor: '#d33',
  confirmButtonText: '<i class="fa fa-check"></i> Save Changes'
}).then((result) => {
  if (result.value) {
   editor_bind_settings();
  }
})
 // end option processing
}



