export function addTodo(todo) {
    console.log(todo)
    return {
        type: "ADD_TODO",
        payload: todo
    }
}
export function deleteTodo(todoId) {
    return {
        type: "DELETE_TODO",
        payload: todoId
    }
}
export function modifyTodo(todo) {
    return {
        type: "MODIFY_TODO",
        payload: todo
    }
}