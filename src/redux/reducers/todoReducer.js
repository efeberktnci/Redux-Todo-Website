import { ActionTypes } from "./actionTypes";

const initialState = {
  todos: [],
  category: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return { ...state, todos: tempTodos };

    case ActionTypes.REMOVE_TODO:
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: filtered };

    case ActionTypes.UPDATE_TODO:
      const newTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, todos: newTodos };

    case ActionTypes.SET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;

// const copyTodos = [...state.todos ];

// const index = copyTodos.findIndex(
//     (todo) => todo.id === action.payload.id
//     );

// copyTodos.splice(index, 1,action.payload);

// return { ...state, todos: copyTodos}
