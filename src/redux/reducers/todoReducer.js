
const initialState = {
    todos: [],
    category: [,]
}


const todoReducer = (state = initialState ,action) => {
    switch(action.type){
        case "ADD_TODO":
            return "BOŞ";
        case "REMOVE_TODO":
            return "BOŞ";
            default:
                return state;
    }
};

export default todoReducer