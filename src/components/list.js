import React from 'react'

const List  = ({propsList, changeTodo, prepareToEdit, removeTodo, status1, status2}) => (
    <div className="container list">
    {propsList
        .filter((item) => item.status === status1 || item.status === status2)
        .map((todo, index) => (
        <div className={"row " + todo.status} key={todo.id}>
            <div className="col-sm-6 col-md-7 col-lg-8">
                <span className=" description">{todo.description}</span>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 text-right">
                <button className=" btn btn-success"  
                    onClick={() => changeTodo(todo.id, todo.status)}> Marcar</button>
                <button className=" btn btn-warning"  
                    onClick={() => prepareToEdit(todo.id, todo.description)}>Editar</button>
                <button className=" btn btn-danger"  
                    onClick={() => removeTodo(todo.id)}> Excluir</button>
            </div>
         </div>
     ))}
     </div> 
)

export default List