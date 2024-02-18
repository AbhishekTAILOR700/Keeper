import React from "react";
import 'boxicons';
// import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        {/* <DeleteIcon /> */}
        Delete
        <i class='bx bxs-trash-alt'></i>
      </button>
    </div>
  );
}

export default Note;
