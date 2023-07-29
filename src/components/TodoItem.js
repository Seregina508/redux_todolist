import React, {useState} from 'react';
import {connect} from "react-redux";

const TodoItem = (props) => {

    const {task} = props;

    const [inputName, setInputName] = useState(props.task.name);

    return (
        <div>
            <li style={ props.task.done ? {textDecoration: 'line-through'} : null}>

            <span style={{
                fontSize: "25px",
                marginRight: "5px"
            }}>
                {task.name}
                <input type="text" value={inputName} onChange={e => setInputName(e.target.value)}/>
            </span>
            <button onClick={() => props.deleteTask(task.id)}>Delete</button>
            <button onClick={() => props.updateTask(task.id, inputName)}>Update</button>
            <button onClick={() => props.taskIsDone(task.id)}>Done</button>
            <button>↑</button>
            <button>↓</button>
            </li>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    updateTask: (id, name) => dispatch({type: 'UPDATE_TASK', payload: {id: id, name: name}}),
    taskIsDone: (id) => dispatch({type: 'TASK_IS_DONE', payload: id})
})

export default connect(null, mapDispatchToProps)(TodoItem);