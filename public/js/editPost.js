// all of the information will go here.
// steps for this are as follows
// create something similar to the info box
// populate the box's values with that are present in the div. 
// make sure the post's id is passed
// send new data
// reload


import { setInfoBox } from "http://localhost:3000/js/infoBox.js"


const editPost = (e) => {

    const originalTitle = e.originalTarget.parentElement.children[0].textContent;
    const originalDescription = e.originalTarget.parentElement.children[1].textContent; 
    const postToEdit = e.originalTarget.parentElement.id;


    setInfoBox("Are you sure you want to edit this entry?", "Edit", postToEdit, originalTitle, originalDescription);

}


export { editPost }