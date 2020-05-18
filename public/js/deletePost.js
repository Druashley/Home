// here we will put the logic  to delete a post
import { setInfoBox } from "http://localhost:3000/js/infoBox.js"


const deletePost = (e) => {

    const postToDelete = e.originalTarget.parentElement.id;

    setInfoBox("Are you sure you want to delete this entry?", "Delete", postToDelete);

}


export { deletePost }