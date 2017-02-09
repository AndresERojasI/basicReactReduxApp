/**
 * Created by andresrojas on 2/2/17.
 */

export function loadTodos(){
    return {
        type: 'LOAD_TODOS',
        payload: [
            {task: "go shopping",id: 1},
            {task: "fix car",id: 2},
            {task: "meeting with michael",id: 3}
        ]
    }
}

export function createTodo(text){
    return {
        type: 'CREATE_TODO',
        payload: {task: text, id: Date.now()}
    }
}

export function deleteTodo(id){
    return {
        type: 'DELETE_TODO',
        payload: {id: id}
    }
}