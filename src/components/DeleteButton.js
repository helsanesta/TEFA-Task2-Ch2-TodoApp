import React from "react";

function DeleteButton({ id, onDelete }){
    return (
        <button className="todo-item__delete-button" onClick={() => onDelete(id)}>
            Hapus
        </button>
    );
}

export default DeleteButton;