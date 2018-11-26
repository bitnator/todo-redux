let counter = 0

export const addTodo = description => ({
    type: 'ADD_TODO', 
    id: counter++, 
    description
})
export const removeTodo = (id) => ({  
    type: 'REMOVE_TODO',
    id
})
export const editTodo = (id, description) => ({
    type: 'EDIT_TODO',
    id,
    description
})
export const checkTodo = (id, check) => ({
    type: 'CHECK_TODO',
    id,
    check
})
