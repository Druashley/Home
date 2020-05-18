// home page specific js will be here
import { setJournal } from "http://localhost:3000/js/loadJournal.js"
import { submitPost } from "http://localhost:3000/js/newJournalPost.js"


function startUp() {

    window.addEventListener("load", function () {
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => setJournal(data));
    });
    
    submitPost();
}

startUp();