import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { removeTodo ,addTodo, editTodo, checkTodo } from '../actions'

class Main extends Component {
    state = {
        inputValue: '',
        editing: false,
        updateId: 0,
        status1: 'pending',
        status2: 'completed'
    }
    change = event => {
        this.setState({
            inputValue: event.target.value
        })
    }
    save = () => {
        if (!this.state.editing){
            this.props.addTodo(this.state.inputValue)
            this.setState({
                updateId: 0,
                editing: false,
                inputValue: '',
            })
        }
        else {
            this.props.editTodo(this.state.updateId, this.state.inputValue)
            this.setState({
                updateId: 0,
                editing: false,
                inputValue: '',
            })
        }
    } 
    prepareToEdit = (id, description) => {
        this.setState({
            inputValue: description,
            editing: true,
            updateId: id
        })
    }
    changeTodo = (id, status) => {
        if (status === 'pending')
            this.props.checkTodo(id, 'completed')
        else 
            this.props.checkTodo(id, 'pending')
    }
    filterTodos = (status) => {
        if (status === 'pendings') {
            this.setState({
                status1: 'pending',
                status2: 'pending'
            })
        }
        else if (status === 'completeds') {
            this.setState({
                status1: 'completed',
                status2: 'completed'
            })
        } else {
            this.setState({
                status1: 'pending',
                status2: 'completed'
            })
        }
    }

    render() {
        
        return (
            <div>
             <input 
             type='text' 
             onChange={this.change}
             value={this.state.inputValue}
             />

             <button onClick={this.save}>Salvar</button>
             <div>
                <button onClick={() => this.filterTodos('todos')}>Todos</button>
                <button onClick={() => this.filterTodos('pendings')}>Pendentes</button>
                <button onClick={() => this.filterTodos('completeds')}>Completados</button>
             </div>

             <div>{this.props.listaProps
                .filter((item) => item.status === this.state.status1 || item.status === this.state.status2)
                .map((todo, index) => (
                 <div className={todo.status} key={todo.id}>
                 <span className="description">{todo.description}</span>
                    <button onClick={() => this.changeTodo(todo.id, todo.status)}> Marcar</button>
                    <button onClick={() => this.prepareToEdit(todo.id, todo.description)}>Editar</button>
                    <button onClick={() => this.props.removeTodo(todo.id)}> Excluir</button>
                 </div>
             ))}</div>
            </div>
        )
    }
}
const mapStateToProps = store => ({
    listaProps: store.todosState,
})
const mapDispatchToProps = dispatch => 
        bindActionCreators({addTodo, removeTodo, editTodo, checkTodo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);