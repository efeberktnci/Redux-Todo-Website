
const initialState = {
    todos: [],
    category: [],
}


const todoReducer = (state = initialState ,action) => {
    switch(action.type){
        case "ADD_TODO":
            const tempTodos = state.todos.concat(action.payload);

            return {...state, todos: tempTodos }
            
        case "REMOVE_TODO":
            return "BOŞ";
            default:
                return state;
    }
};

export default todoReducer