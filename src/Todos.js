import React from 'react';

const Todos = ({ todos, removeTodo }) => {

    return (
        <ul className="collection">
            <li className="collection-header center "><h4 className="blue-text">{todos.length ? "Todo's List" : "No todos"}</h4></li>
            {todos.map((item, indx) => {
                return (<li key={item.id} className="collection-item"><div>{indx + 1} -{item.todo}
                    <a href="#!" onClick={() => { removeTodo(item.id) }} className="secondary-content"><i className="material-icons">Delete</i></a></div></li>)
            })}
        </ul>
    )
}

export default Todos;