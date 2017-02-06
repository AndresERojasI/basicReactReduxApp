/**
 * Created by andresrojas on 2/3/17.
 */

const todoReducer = function(state={}, action){
    if(action.type === 'CREATE_TODO'){
        state = {...state, };
    }
    return state;
}

export default todoReducer;