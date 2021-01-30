import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';

function ToDoInput() {
    let [name, setName] = useState();
    const dispatch = useDispatch();
    return (
        <div>
                <div className="row m-2">
                    <input type ="text" className="col form-control" value = {name || ''} onChange = {(e) => setName(e.target.value)} />
                    <button 
                    onClick = {()=> {
                        dispatch(addTodo({
                        id: uuid(),
                        name: name
                    }))
                    setName('');
                }
                    }className="btn btn-primary mx-2">Add</button>
                </div>
        </div>
    )
}

export default ToDoInput