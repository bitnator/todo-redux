import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { removeTodo ,addTodo, editTodo, checkTodo } from '../actions'
//components
import List from '../components/list'
import Form from '../components/form'

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
    //this function is used to sincronize the value state for the time of 
    //save it when the save() be used
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
    //the save button has two behaviors, one is to add todos and other is 
    // the editions of the todo's descriptions
    } 
    prepareToEdit = (id, description) => {
        this.setState({
            inputValue: description,
            editing: true,
            updateId: id
        })
    //this function is used to pass the value of an especific todo for
    //the form 
    }
    changeTodo = (id, status) => {
        if (status === 'pending')
            this.props.checkTodo(id, 'completed')
        else 
            this.props.checkTodo(id, 'pending')
    //this function is used to change the status of an especific todo
    //when the users hit the specific button for it
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
    //this function is used to controll the visibility of the todos
    //using the local states of this container
    }

    render() {
        
        return (
            <div className="body">
             <Form change={this.change} inputValue={this.state.inputValue}
              save={this.save} filterTodos={this.filterTodos} />

             <List propsList={this.props.listaProps} changeTodo={this.changeTodo} 
             prepareToEdit={this.prepareToEdit} removeTodo={this.props.removeTodo} 
             status1={this.state.status1} status2={this.state.status2} />
             </div>
        )
        //I prefered to use two components for the return of the render() 
        // one for the form and another for the todo listings 
        // I've chosen the use of the this.props.* for learning pourposes
        // of other react learnings who find this repository usefull for analysis
    }
}
//the above function is used to map the reducers for use of the global states
const mapStateToProps = store => ({
    listaProps: store.todosState,
})
//the next function is used to activate the functions of the actions
//I opted to use each name of the actions for learning pourposes
const mapDispatchToProps = dispatch => 
        bindActionCreators({addTodo, removeTodo, editTodo, checkTodo}, dispatch)

//the connect function is the connection of the store, reducers and containers
export default connect(mapStateToProps, mapDispatchToProps)(Main)