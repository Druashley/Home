// this will be a box that pops up like a prompt but made in the dom via js.
// this will hopefully be able to be used in multiple ways.

import { journalContainer } from "http://localhost:3000/js/domelements.js"

// The infobox has a few requiments. Not all need to be met to be used.
// This is a popup type thing to help the user understand what they are clicking.
// This is a custom box that appears when the user interacts on the website.
// It is responsible for the error handling to the user and the user exeperience for patch / delete requests for the journal.

const setInfoBox = function (msg, type, postId, originalTitle, originalDescription) {
    // this is the main constructor for the journal post.
    // depending on the type argument different things are added to the base infobox.

    const infoBoxContainer = document.createElement("div");
    const infoBoxText = document.createElement("div");
    const infoBoxButtonBack = document.createElement("button");
    const infoBoxButtonOkay = document.createElement("button");

    infoBoxText.textContent = msg;
    infoBoxButtonBack.textContent = "Back"
    infoBoxButtonOkay.textContent = "Okay"

    infoBoxText.classList.add("info-box-text")
    infoBoxContainer.classList.add("info-box-container")

    infoBoxButtonOkay.classList.add("info-button");
    infoBoxButtonBack.classList.add("info-button");

    infoBoxButtonOkay.setAttribute("id", postId);

    if (type == 'Info') {
        console.log("We are in the info if statment")
        infoBoxButtonBack.addEventListener("click", clearInfoBox);
        infoBoxButtonOkay.addEventListener("click", clearInfoBox);
    }

    if (type == 'Delete') {
        console.log("We got into the delete post if statement")
        infoBoxButtonBack.addEventListener("click", clearInfoBox);
        infoBoxButtonOkay.addEventListener("click", confirmDeletePost);
    }

    if (type == 'Edit') {
        console.log('We are in the edit if statment')
        const infoBoxEditTitle = document.createElement("input");
        const infoboxEditDescription = document.createElement("textarea");
        const importedDescription = document.createTextNode(originalDescription);


        infoBoxEditTitle.setAttribute("value", originalTitle);
        infoboxEditDescription.appendChild(importedDescription)
        infoBoxEditTitle.classList.add("post-title")
        infoboxEditDescription.classList.add("post-description")

        infoBoxButtonBack.addEventListener("click", clearInfoBox);
        infoBoxButtonOkay.addEventListener("click", confirmEditPost);

        infoBoxContainer.appendChild(infoBoxEditTitle);
        infoBoxContainer.appendChild(infoboxEditDescription);

    }

    infoBoxContainer.appendChild(infoBoxText);
    infoBoxContainer.appendChild(infoBoxButtonOkay);
    infoBoxContainer.appendChild(infoBoxButtonBack);

    journalContainer.appendChild(infoBoxContainer);
}



function clearInfoBox(e) {
    e.originalTarget.parentElement.remove();
}

function confirmDeletePost(e) {
    const deletePost = e.originalTarget.id

    const options = {
        method: 'DELETE'
    }

    fetch(`http://localhost:3000/posts/${deletePost}`, options).then(e.originalTarget.parentElement.remove());

    setTimeout(function () {
        location.reload();
    }, 750);

}


function confirmEditPost(e) {
    const editPost = e.originalTarget.id;

    const editPostData = {
        "title": e.originalTarget.parentElement.children[0].value,
        "description": e.originalTarget.parentElement.children[1].value
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editPostData)
    }

    fetch(`http://localhost:3000/posts/${editPost}`, options).then(e.originalTarget.parentElement.remove());

    setTimeout(function () {
        location.reload();
    }, 1000);
}




export { setInfoBox }