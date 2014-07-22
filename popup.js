// popup.js


var timeout;

// close popup.html
var closeNote = document.getElementsByClassName("close-box")[0];
closeNote.addEventListener("click", function() {
    window.close();
})

// add new notes
var newNote = document.getElementsByTagName("textarea")[0];
newNote.addEventListener("input", addNote);

function addNote(e) {
    var text = this.value;
    console.log(text);

    // autosave feature
    active();
    inactive();
}



function inactive() {
    // Saves text shortly after a keyboard event.
    // Function active() inactivates "timeout"
    timeout = window.setTimeout(function() {
        console.log("saved");
    }, 350);
}

function active() {
    // if keyboard event is dectected, 
    // removes timeout and does not save anything from the textbox
    window.clearTimeout(timeout);
}