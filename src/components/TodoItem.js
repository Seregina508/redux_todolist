import React from 'react';
import {connect} from "react-redux";

const TodoItem = (props) => {

    const {task} = props;

    return (
        <div>
            <span style={{
                fontSize: "25px",
                marginRight: "5px"
            }}>
                {task.name}
            </span>
            <button onClick={() => props.deleteTask(task.id)}>Delete</button>
            <button>Update</button>
            <button>Done</button>
            <button>↑</button>
            <button>↓</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id})
})

export default connect(null, mapDispatchToProps)(TodoItem);