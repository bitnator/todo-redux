import React from 'react'

const Form = ({change, inputValue, save, filterTodos}) => (
    <div className="container">
    <div className="row">
    <div className="col-sm-3"></div>
    <div className="col-sm-5">
    {/** input field */}
        <input 
        type='text' 
        onChange={change}
        value={inputValue}
        className="form-control"
        />
    </div>
        {/** the filter buttons bellow the text input */}
        <button className="btn btn-light" onClick={save}>Salvar</button>
    <div className="col-sm-4"></div>
    </div>
    <div className="row filters">
    <div className="col-sm-12">
            <button className="btn btn-light"  onClick={() => filterTodos('todos')}>Todos</button>
            <button className="btn btn-light"  onClick={() => filterTodos('pendings')}>Pendentes</button>
            <button className="btn btn-light"  onClick={() => filterTodos('completeds')}>Completados</button>
    </div>
    </div>

    </div>
)

export default Form
