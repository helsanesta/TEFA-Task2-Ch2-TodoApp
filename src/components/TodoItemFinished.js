import React from "react";
import TodoItemBodyFinished from "./TodoItemBodyFinished";

function TodoItemFinished({ todos, onDelete, onUnDone }){
    return(
        <div className="todo-app__list">
            {
                todos.filter((todo) => todo.isCompleted===true).length > 0 ? (todos.map((todo) => (
                    <TodoItemBodyFinished key={todo.id} id={todo.id}
                    onDelete={onDelete} onUnDone={onUnDone} {...todo}/>
                ))) :
                (
                <p className="todo-app__list__empty-message">Tidak Ada Todo List</p>
                )
                
            }

        </div>
    )
}

export default TodoItemFinished;