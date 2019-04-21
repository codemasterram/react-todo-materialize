import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, todo: "learn react and redux" },
      { id: 2, todo: "learn web api in .net core" },
      { id: 3, todo: "Learn REST API with react" }
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo]
    this.setState({
      todos: newTodos
    })
  }

  removeTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container">
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
