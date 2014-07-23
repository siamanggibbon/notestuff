// popup.js

var timeout;

// add new notes
var newNote = document.getElementsByTagName("textarea")[0];
newNote.addEventListener("input", addNote, false);

// get saved notes into textbox
var saved = localStorage.getItem("note");
if (saved) {
    newNote.value = saved;
}

function addNote(e) {
    var text = this.value;
    console.log(text);

    // autosave feature
    active();
    inactive(text);
}

function inactive(text) {
    // Saves text shortly after a keyboard event.
    // Function active() inactivates "timeout"
    timeout = window.setTimeout(function() {
        localStorage.setItem("note", text);
        var status = document.getElementsByTagName("p")[0];
        status.className = "status fade";
        var statusRemove = window.setTimeout(function() {
            status.className = "status";
        }, 1000);

    }, 350);
}

function active() {
    var status = document.getElementsByTagName("p")[0];
    status.className = "status";
    // if keyboard event is dectected, 
    // removes timeout and does not save anything from the textbox
    window.clearTimeout(timeout);
}