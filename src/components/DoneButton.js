import React from "react";

function DoneButton({ id, onClick }){
    return (
        <button className="todo-item__done-button" onClick={() => onClick(id)}>Selesai</button>
    );
}

export default DoneButton;