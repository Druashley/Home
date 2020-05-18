//logic for doing a post request will go here
import { postTitle, postDescription, postSubmit } from "http://localhost:3000/js/domelements.js"

import { setJournal } from "http://localhost:3000/js/loadJournal.js"
import { setInfoBox } from "http://localhost:3000/js/infoBox.js"





function sendJournalEntry() {

    if (postTitle.value && postDescription.value) {
        const postData = {
            "title": postTitle.value,
            "description": postDescription.value

        }


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }


        fetch('http://localhost:3000/posts', options);

        postDescription.classList.add("post-description-transition");

        setTimeout(function () {
            location.reload();
        }, 2000);

    }
    else {
        // I need to put code here to create some sort of msg saying there has to be a title and description 
        // When button is clicked remove functionality of other buttons on page thenb when we click out of the box re apply the functunality. 
        setInfoBox("You must have a Title and a Description", "Info")
        
    }

}


const submitPost = () => {
    postSubmit.addEventListener("click", sendJournalEntry);
}





export { submitPost }