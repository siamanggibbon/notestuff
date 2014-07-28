// popup.js

(function() {

    var timeout,
        status,
        newNode,
        saved,
        statusRemove,
        closeBtn;

    newNote = document.getElementsByTagName("textarea")[0];
    closeBtn = document.getElementsByClassName("close")[0];

    if (localStorageAvail() === false) {
        newNote.value = "There is a problem with localStorage.  Notes will not be saved.";
        newNote.disabled = true;
        return;
    }

    // add new notes
    newNote.addEventListener("input", addNote, false);
    closeBtn.addEventListener("click", closePopup, false);

    // get saved notes into textbox
    saved = localStorage.getItem("note");
    console.log(saved);
    newNote.value = saved;

    function addNote(e) {
        // autosave feature
        active();
        inactive(this.value);
    }

    function inactive(text) {
        // Saves text shortly after a keyboard event.
        // active() inactivates "timeout"
        timeout = window.setTimeout(function() {
            localStorage.setItem("note", text);
            newNode = document.getElementsByTagName("textarea")[0];
            newNode.className = "saved";
            status = document.getElementsByTagName("p")[0];
            status.className = "status fade";
            statusRemove = window.setTimeout(function() {
                newNode.className = "";
                status.className = "status";
            }, 2200);
        }, 200);
    }

    function active() {
        status = document.getElementsByTagName("p")[0];
        status.className = "status";
        // if keyboard event is dectected, 
        // removes timeout and does not save anything from the textbox
        window.clearTimeout(timeout);
    }

    function localStorageAvail() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    function closePopup() {
        window.close();
    }

})();