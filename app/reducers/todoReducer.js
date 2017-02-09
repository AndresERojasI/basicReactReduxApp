/**
 * Created by andresrojas on 2/3/17.
 */
const DefaultState = {
    todos: []
};

const todoReducer = function(state=DefaultState, action){

    console.log('ACTION: ', action);

    if(action.type === 'LOAD_TODOS'){
        return {
            ...state,
            todos: action.payload
        }
    }

    if(action.type === 'CREATE_TODO'){
        return {
            ...state,
            todos : [...state.todos, action.payload]
        };
    }

    if(action.type === 'DELETE_TODO'){

        let todos = state.todos.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            todos : todos
        };
    }

    return state;
}

export default todoReducer;