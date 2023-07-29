import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTask = (props) => {

    const [inputValue, setInputValue] = useState('');

    const createBtnHandler = () => {
        props.createTask(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input type="text" placeholder='Create New Task' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={createBtnHandler}>Create</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    createTask: (input) => dispatch({type: 'CREATE_NEW_TASK', payload: input})
})

export default connect(null, mapDispatchToProps)(CreateTask);