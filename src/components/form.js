import React from 'react'

const Form = ({change, inputValue, save, filterTodos}) => (
    <div>
        <input 
        type='text' 
        onChange={change}
        value={inputValue}
        />
        <button onClick={save}>Salvar</button>
        <div>
            <button onClick={() => filterTodos('todos')}>Todos</button>
            <button onClick={() => filterTodos('pendings')}>Pendentes</button>
            <button onClick={() => filterTodos('completeds')}>Completados</button>
        </div>
    </div>
)

export default Form

// <input 
// type='text' 
// onChange={this.change}
// value={this.state.inputValue}
// />

// <button onClick={this.save}>Salvar</button>
// <div>
// <button onClick={() => this.filterTodos('todos')}>Todos</button>
// <button onClick={() => this.filterTodos('pendings')}>Pendentes</button>
// <button onClick={() => this.filterTodos('completeds')}>Completados</button>
// </div>