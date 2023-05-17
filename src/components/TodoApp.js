import React from "react";
import TodoInput from "./TodoInput";
import TodoItemActive from "./TodoItemActive";
import TodoItemFinished from "./TodoItemFinished";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.getDataFromLocalStorage() || [],
        };

        this.onAddTodo = this.onAddTodo.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onDone = this.onDone.bind(this)
        this.onUnDone = this.onUnDone.bind(this)
    }

    getDataFromLocalStorage() {
        return JSON.parse(localStorage.getItem("todos"));
    }
    
      saveDataToLocalStorage(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    onAddTodo = ({title, description, dueDate}) => {
        this.setState((prevState) => {
            return{
                todos: [
                    ...prevState.todos,
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
          this.saveDataToLocalStorage(this.state.todos);
        })
    }

    onDelete = (id) => {
        const todos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos }, () => {
            this.saveDataToLocalStorage(this.state.todos);
        });
    }

    onDone = (id) => {
        const data = this.state.todos
        const index = data.findIndex((todo) => todo.id === id);
        data[index].isCompleted = true;
        this.setState((prevState) => {
            return {
                ...prevState,
                todos: data,
            }
        }, () => {
            this.saveDataToLocalStorage(this.state.todos);
        })
    }

    onUnDone = (id) => {
        const data = this.state.todos
        const index = data.findIndex((todo) => todo.id === id);
        data[index].isCompleted = false;
        this.setState((prevState) => {
            return {
                ...prevState,
                todos: data,
            }
        }, () => {
            this.saveDataToLocalStorage(this.state.todos);
        })
    }

    render() {
        return (
            <div className="todo-app_body">
                <h1 className="todo-app__header">My TodoApps</h1>
                <h2 className="todo-input__title">Tambah Todo List</h2>
                <TodoInput addTodo={this.onAddTodo}/>
                <h1 className="todo-app__list-header">Todo List Active</h1>
                <TodoItemActive todos={this.state.todos} onDelete={this.onDelete} onDone={this.onDone}/>
                <h1 className="todo-app__list-header">Todo List Finished</h1>
                <TodoItemFinished todos={this.state.todos} onDelete={this.onDelete} onUnDone={this.onUnDone}/>
            </div>
        );
    }
}

export default TodoApp;