import { ListItem } from "./Listitem";

import "./TodoList.css";




export const TodoList = ({todos, removeTodo, todoState, todoCompleted}) => {
    console.log(todos);
    return <div className="todo-list" >
        {
            todos.map((todo, idx) => {
                console.log(todo, idx);
                return <ListItem text={todo.title} key={idx} todoCompleted={todo.completed} removeTodo={() => removeTodo(idx)} todoState={() => todoState(idx)}/>
            })
        }
        <p>Total number of Items: {todos.length}</p>
        {/* <button onClick={localStorage.clear()}>ClearAll</button> */}
    </div>
}

