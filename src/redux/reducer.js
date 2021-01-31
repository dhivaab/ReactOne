import { todos } from "./states";


export let reducer= (state = todos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(state)
            let newtodos = [...state];
            newtodos.push(action.payload);
            return newtodos;    
        case "DELETE_TODO":
            let newTodos  = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload)
            return newTodos;
        
        case "MODIFY_TODO":
            let numbers = [...state];
            let index = numbers.findIndex((e) => e.id == action.payload.id);
            numbers[index].name = action.payload.name;
           return numbers;
        default:
            return state;
    }
}