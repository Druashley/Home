// this is where we will put the logic to load the journal.

// this will loop through the array of posts and break them down into individual parts.

import { postContainer } from "http://localhost:3000/js/domelements.js"

import { deletePost } from "http://localhost:3000/js/deletePost.js"

import { editPost } from "http://localhost:3000/js/editPost.js"



function setJournal(data) {
   
    postContainer.innerHTML = '';


    for (let i = data.length - 1 ; i >= 0; i--) {
        let postTitle = data[i].title;
        let postDescription = data[i].description;
        let postDate = data[i].data;
        let postNumber = i + 1;
        let postId = data[i]._id;
        createPost(postTitle, postDescription, postDate, postNumber, postId);
        // I need to put code here that then puts this data through the div consructor. 
        // we wont console log here - we will the pass the info through the createPost function

    };
};


// going to create the div constructor here

function createPost(postTitle, postDescription, postDate, postNumber, postId) {
    const newPostBody = document.createElement("div");
    const newPostTitle = document.createElement("h1");
    const newPostDescription = document.createElement("p");
    const newPostDate = document.createElement("div");
    const newPostNumber = document.createElement("div");
    const editButton = document.createElement("img");
    const trashButton = document.createElement("img");


    newPostBody.setAttribute("id", postId)
    newPostBody.classList.add("journal-entry-container")
    newPostNumber.classList.add("journal-entry-background");
    editButton.classList.add("edit-icon")
    trashButton.classList.add("trashcan-icon")


    newPostTitle.textContent = postTitle;
    newPostDescription.textContent = postDescription;
    newPostDate.textContent = postDate.substring(0,10);
    newPostNumber.textContent = postNumber;

    editButton.src = "http://localhost:3000/pictures/pencil.png"
    trashButton.src = "http://localhost:3000/pictures/trashcan.png"

    editButton.addEventListener("click", editPost)
    trashButton.addEventListener("click", deletePost);




    newPostBody.appendChild(newPostTitle);
    newPostBody.appendChild(newPostDescription);
    newPostBody.appendChild(newPostDate);
    newPostBody.appendChild(newPostNumber);
    newPostBody.appendChild(editButton);
    newPostBody.appendChild(trashButton);



    postContainer.appendChild(newPostBody);



};

export { setJournal }