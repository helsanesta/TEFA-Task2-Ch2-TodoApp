import React from "react";

function DeleteButton({ id, onClick }){
    return (
        <button className="todo-item__delete-button" onClick={() => onClick(id)}>
            Hapus
        </button>
    );
}

export default DeleteButton;