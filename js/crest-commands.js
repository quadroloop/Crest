// Crest Command javascript file
// Bryce Mericnes 2017

// generally for UI commands.
// and function calls from crest.js

function crest_kernel() {
    var command = command_pass;
    var command_query = command.split("#");

    var command_pointer = command_query[1];
    if (command_pointer == "settings"){open_settings();} // open settings
    if (command_pointer == "tools"){open_tools();} // open tools
    if (command_pointer == "kill") {kill();} // kill test command;
    if (command_pointer == "import-code") {import_template();} 
    if (command_pointer == "dclose") {w3_close();} //close dashboard
    if (command_pointer == "dopen") {w3_open();}  // open sideboard
}

function kill() {
	alert("hey it works");
}