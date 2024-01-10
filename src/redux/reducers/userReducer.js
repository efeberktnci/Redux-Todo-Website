const initialState = {
    user: [],
    category: []
}


const userReducer = (state = initialState ,action) => {
    switch(action.type){
        case "ADD_USER":
            return "BOŞ";
        case "REMOVE_USER":
            return "BOŞ";
            default:
                return state;
    }
};

export default userReducer;