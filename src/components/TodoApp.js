import React from "react";
import TodoInput from "./TodoInput";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.getDataFromLocalStorage() || [],
        };
    }

    getDataFromLocalStorage() {
        return JSON.parse(localStorage.getItem("notes"));
    }
    
      saveDataToLocalStorage(notes) {
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    onAddTodo = ({title, description, dueDate}) => {
        this.setState(() => {
            return{
                notes: [
                    {
                        id: +new Date(),
                        title,
                        description,
                        dueDate,
                        isCompleted: false,
                    }
                ]
            }
        },
        () => {
          this.saveDataToLocalStorage(this.state.notes);
        })
    }

    render() {
        return (
            <div className="todo-app_body">
                <h1 className="todo-app__header">My TodoApps</h1>
                <h2 className="todo-input__title">Tambah Todo</h2>
                <TodoInput addTodo={this.onAddTodo}/>
            </div>
        );
    }
}

export default TodoApp;