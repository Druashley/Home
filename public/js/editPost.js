import { setInfoBox } from "http://localhost:3000/js/infoBox.js"


const editPost = (e) => {
    //grabs the current value of the title and description along with the unique id and passes them along to info box as default values. 
    const originalTitle = e.originalTarget.parentElement.children[0].textContent;
    const originalDescription = e.originalTarget.parentElement.children[1].textContent; 
    const postToEdit = e.originalTarget.parentElement.id;
    setInfoBox("Are you sure you want to edit this entry?", "Edit", postToEdit, originalTitle, originalDescription);
}


export { editPost }