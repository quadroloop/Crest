// Crest Command javascript file
// Bryce Mericnes 2017

// generally for UI commands.

function crest_kernel() {
    var command = command_pass;
    var command_query = command.split("#");

    var command_pointer = command_query[1];
    if (command_pointer == "open_settings"){open_settings();} // open settings
    if (command_pointer == "open_tools"){open_tools();} // open tools
    if (command_pointer == "kill") {kill();} // kill test command;
    if (command_pointer == "import_code") {import_template();} 
    if (command_pointer == "dash-close") {w3_close();} //close dashboard
    if (command_pointer == "dash-open") {w3_open();}  // open sideboard
}

function kill() {
	alert("hey it works");
}