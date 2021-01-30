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
           let index = -1;
           for (let i=0; i< numbers.length; i++) {
               index++;

               if(numbers[i].id == action.payload.id) {
                   break;
               }
           }
           if (index !=-1) {
               numbers[index] = action.payload
               return numbers;
           }
        default:
            return state;
    }
}