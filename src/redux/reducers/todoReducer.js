
const initialState = {
    todos: [],
    category: [],
}


const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            const tempTodos = state.todos.concat(action.payload);

            return {...state, todos: tempTodos }
            
        case "REMOVE_TODO": 
            const filtered = state.todos.filter(
             (todo) => todo.id !== action.payload)
            return {...state, todos: filtered};


            default:
                return state;
        
    }
};

export default todoReducer