import React from "react";

function DoneButton({ id, onDone }){
    return (
        <button className="todo-item__done-button" onClick={() => onDone(id)}>
            Selesai
        </button>
    );
}

export default DoneButton;