import React from "react";
import TodoItemBodyActive from "./TodoItemBodyActive";

function TodoItemActive({ todos, onDelete, onDone }){
    return(
        <div className="todo-app__list">
            {
                todos.filter((todo) => todo.isCompleted===false).length > 0 ? (todos.map((todo) => (
                    <TodoItemBodyActive key={todo.id} id={todo.id}
                    onDelete={onDelete} onDone={onDone} {...todo}/>
                ))) :
                (
                <p className="todo-app__list__empty-message">Tidak Ada Todo List</p>
                )
                
            }

        </div>
    );
}

export default TodoItemActive;