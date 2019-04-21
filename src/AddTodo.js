import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        todo: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.todo.length ? this.props.addTodo(this.state) : console.log("no todo");
        this.setState({
            todo: ""
        })
    }
    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="input-field col s6">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Enter todo" id="todo" type="text" className="validate" value={this.state.todo} onChange={this.handleChange} />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTodo;