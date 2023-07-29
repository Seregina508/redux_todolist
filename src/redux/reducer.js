const initialState = {
    appName: "TodoList",
    todo: [
        {
            id: 1,
            name: "Learn Redux",
            done: false
        },
        {
            id: 2,
            name: "Learn React-Thunk",
            done: false
        },
        {
            id: 3,
            name: "Learn Redux-Saga",
            done: false
        },
    ]
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case 'DELETE_TASK': return {
           ...state, todo: state.todo.filter(el => el.id !== action.payload)
       };

       case 'UPDATE_TASK': {
           const newTask = state.todo.map(el => el.id === action.payload.id ?
               {...el, name: action.payload.name} : el)
           return {...state, todo: newTask}
       }

       case 'CREATE_NEW_TASK': return {
           ...state, todo: [...state.todo, {id: Math.random(), name: action.payload, done: false}]
       };

       case 'TASK_IS_DONE':
           const newTask = state.todo.map(el => el.id === action.payload ?
               {...el, done: !el.done} : el)
           return {...state, todo: newTask}

       default:
           return state;
   }
}
export default reducer;