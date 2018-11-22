import {todo} from './todoReducer'

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': 
        return [
            ...state,
            todo({}, action)
        ]
        case 'EDIT_TODO': 
        return state.map(
            t => todo(t, action)
        )
        case 'CHECK_TODO': 
        return state.map(
            t => todo(t, action)
        )
        case 'REMOVE_TODO':
        return state.filter((_state) => _state.id !== action.id)
        default :
          return state
    } // fim do switch
}