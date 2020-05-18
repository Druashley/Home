// here we will put the logic  to delete a post
import { setInfoBox } from "http://localhost:3000/js/infoBox.js"


const deletePost = (e) => {
    // when we click on the delete box icon this runs and passes along the id along with the text and type for the infobox.
    const postToDelete = e.originalTarget.parentElement.id;
    setInfoBox("Are you sure you want to delete this entry?", "Delete", postToDelete);
}


export { deletePost }