/**
 * Created by andresrojas on 2/2/17.
 */

export function createTodo(text){
    return {
        type: 'CREATE_TODO',
        payload: text
    }
}