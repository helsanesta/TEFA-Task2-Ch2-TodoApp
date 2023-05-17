import React from "react";
import DeleteButton from "./DeleteButton";
import UnDoneButton from "./UnDoneButton";

function TodoItemBodyFinished({ id, title, description, dueDate, isCompleted, onDelete, onUnDone }) {
    dueDate = new Date().toISOString().split("T")[0];
    if(isCompleted === true) {
        return (
            <div className="todo-item__body">
                <div className="todo-item__body__content">
                    <h3 className="todo-item__body__title">{title}</h3>
                    <p className="todo-item__body__description">{description}</p>
                    <p className="todo-item__body__due-date">Tanggal selesai: <br></br>{dueDate}</p>
                </div>
                <div className="todo-item__body__buttons">
                    <UnDoneButton id={id} onUnDone={onUnDone} />
                    <DeleteButton id={id} onDelete={onDelete} />
                </div>
            </div>
        );
    }
}

export default TodoItemBodyFinished;