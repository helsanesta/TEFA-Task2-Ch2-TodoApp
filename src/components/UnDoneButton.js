import React from "react";

function UnDoneButton({ id, onUnDone }) {
  return (
    <button className="todo-item__done-button" onClick={() => onUnDone(id)} >
      Batal Selesai
    </button>
  );
}

export default UnDoneButton;