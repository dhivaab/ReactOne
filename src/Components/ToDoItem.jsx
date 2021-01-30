import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../redux/states'
import {deleteTodo, modifyTodo} from '../redux/actions'

function ToDoItem({todo}) {
    let [editable, setEditable] = useState(false);
let [name, setName] = useState(todo.name)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>{todo.id}</div>
                <div className ="col">
                    {editable? <input type = "text" className ="form-control"  value= {name}
                    onChange = {(e) => setName(e.target.value)}/>:  <h4> {name}</h4>}
                   
                </div>
                <button className ="btn btn-primary mx-2" onClick = {() => 
                    { 
                        dispatch(modifyTodo(
                            {
                            ...todo,
                            name: name
                        }
                        ));

                        if(editable) {
                            setName(todo.name)
                        }
                        setEditable(!editable)}
                }>{editable? "Update": "Edit" }</button>
                <button  onClick = {()=> dispatch(deleteTodo(todo.id))} className ="btn btn-danger mx-2">Delete</button>
            </div>
        </div>
    )
}

export default ToDoItem