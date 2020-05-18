// home page specific js will be here
import { setJournal } from "http://localhost:3000/js/loadJournal.js"
import { submitPost } from "http://localhost:3000/js/newJournalPost.js"

//this does say index . js but this is really journal.js - I need to go through and change this at some point.
function startUp() {
    // on page load does a fetch for all posts and then generates each post in the journal.
    window.addEventListener("load", function () {
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => setJournal(data));
    });
    submitPost();
}

startUp();