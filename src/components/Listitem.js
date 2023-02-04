import "./Listitem.css";

export const ListItem = ({text, removeTodo, todoState, todoCompleted}) => {
    if (todoCompleted){
    return <div className="list-item">
        <p className="text">{text}</p>
        <button className="checkbox1" onClick={removeTodo}>x</button>
        <button className="checkbox2" onClick={todoState}>√</button>
    </div>
    }
    else {
    return <div className="list-item">
    <p className="text">{text}</p>
    <button className="checkbox1" onClick={removeTodo}>x</button>
    <button className="checkbox2" onClick={todoState}>-</button>
</div>
}

}
// {`${todoCompleted}===true? innerHTMLtext="√": innerHTMLtext=""`}