import React from "react";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            charlimit: 30,
            dueDate: "",
        };
    }

    onTitleChange = (event) => {
        this.setState({ 
            title: event.target.value 
        });
    }

    onDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
        if (event.target.value.length === this.state.charlimit) {
            window.alert(
                "Username shouldn't exceed 50 characters"
            );
        }
    }

    onDueDateChange = (event) => {
        this.setState({
            dueDate: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.title === "" || this.state.description === "" || this.state.dueDate === ""){
            window.alert("Please fill all the fields");
        }

        this.props.addTodo(this.state);
        this.setState({
            title: "",
            description: "",
            dueDate: "",
        });
    }

    render(){
        return(
            <form className="todo-input" onSubmit={this.onSubmit}>
                <div className="todo-input__body">
                    <input type="text" placeholder="Judul Todo" value={this.state.title} onChange={this.onTitleChange}/>
                    <textarea type="text" placeholder="Deskripsi Todo" value={this.state.description} onChange={this.onDescriptionChange}/>
                    <p className="todo-input__desc-limit">Remaining Characters = {this.state.charlimit - this.state.description.length} </p>
                    <input type="date" placeholder="Tanggal Deadline" value={this.state.dueDate} onChange={this.onDueDateChange}/>
                    <button type="submit" disabled={this.state.description.length > this.state.charlimit ? true : false}>Add Todo</button>
                </div>
            </form>
        )
    }
}

export default TodoInput;