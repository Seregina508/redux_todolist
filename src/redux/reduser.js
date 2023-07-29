const initialState = {
    appName: "TodoList",
    todo: [
        {
            id: 1,
            name: "Learn Redux",
        },
        {
            id: 2,
            name: "Learn React-Thunk",
        },
        {
            id: 3,
            name: "Learn Redux-Saga",
        },
    ]
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case 'DELETE_TASK': return {...state, todo: state.todo.filter(el => el.id !== action.payload)};
       default: return state;
   }
}
export default reducer;