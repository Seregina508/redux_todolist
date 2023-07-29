import './App.css';
import {connect} from "react-redux";
import TodoItem from "./components/TodoItem";
import CreateTask from "./components/CreateTask";

function App({appName, todo}) {
    return (
        <div className="App">
            <h1>{appName}</h1>
            <CreateTask/>
            {todo.map(task => <TodoItem
                task={task}
            />)}

        </div>
    );
}

const mapStateToProps = (state) => ({
    appName: state.appName,
    todo: state.todo
})
export default connect(mapStateToProps)(App);
