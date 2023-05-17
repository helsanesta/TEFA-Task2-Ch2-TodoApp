import React from "react";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";

function TodoItemBodyActive({ id, title, description, dueDate, isCompleted, onDelete, onDone }) {
    if(isCompleted === false) {
        return (
            <div className="todo-item__body">
                <div className="todo-item__body__content">
                    <h3 className="todo-item__body__title">{title}</h3>
                    <p className="todo-item__body__description">{description}</p>
                    <p className="todo-item__body__due-date">Tanggal Deadline: <br></br>{dueDate}</p>
                </div>
                <div className="todo-item__body__buttons">
                    <DoneButton id={id} onDone={onDone} />
                    <DeleteButton id={id} onDelete={onDelete} />
                </div>
            </div>
        );
    }
}

export default TodoItemBodyActive;