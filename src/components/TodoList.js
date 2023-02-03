import { ListItem } from "./Listitem";

import "./TodoList.css";




export const TodoList = ({todos, removeTodo}) => {
    
    return <div className="todo-list" >
        {
            todos.map((todo, idx) => {
                console.log(todo, idx);
                return <ListItem text={todo} key={idx} removeTodo={() => removeTodo(idx)}/>
            })
        }
        <p>Total number of Items: {todos.length}</p>
        {/* <button onClick={localStorage.clear()}>ClearAll</button> */}
    </div>
}

