/**
 * Created by andresrojas on 2/3/17.
 */

const userReducer = function(state, action){
    if(action.type === 'CHANGE_NAME'){
        state = {...state, email: action.payload}
    }

    if(action.type === 'CHANGE_EMAIL'){
        state = {...state, name: action.payload}
    }

    return state;
}

export default userReducer;