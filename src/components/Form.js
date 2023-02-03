import "./Form.css";

import { useState } from 'react'; 

const Form = ({addTodo}) => {

    const[text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (<form className="form" onSubmit={handleSubmit}>
        <input autoFocus 
        type="text" 
        className="textfield" 
        placeholder="input new ToDo"
        value={text}
        onChange={e => setText(e.target.value)}/>
        <input type="submit" className="submit-btn" value="Add"/>
    </form>
    );
};

export default Form;