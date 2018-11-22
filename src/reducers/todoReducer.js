export const todo = (state = {}, action) => {
    switch ( action.type) {
        case 'ADD_TODO' : 
        return {
            id: action.id,
            description: action.description,
            status: 'pending'
        }
        case 'EDIT_TODO' : 
        return (state.id !== action.id) ? 
            state: {
                ...state,
                description: action.description
            }
        case 'CHECK_TODO' : 
        if (action.check === 'completed') {
            return (state.id !== action.id) ? 
            state: {
                ...state,
                status: 'completed'
            }
        } else {
            return (state.id !==  action.id) ? 
            state: {
                ...state,
                status: 'pending'
            }
        }
        default : 
        return state
    }
}