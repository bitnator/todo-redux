import React from 'react'

const List  = ({propsList, changeTodo, prepareToEdit, removeTodo, status1, status2}) => (
    <div>{propsList
        .filter((item) => item.status === status1 || item.status === status2)
        .map((todo, index) => (
         <div className={todo.status} key={todo.id}>
         <span className="description">{todo.description}</span>
            <button onClick={() => changeTodo(todo.id, todo.status)}> Marcar</button>
            <button onClick={() => prepareToEdit(todo.id, todo.description)}>Editar</button>
            <button onClick={() => removeTodo(todo.id)}> Excluir</button>
         </div>
     ))}</div> 
)

export default List