import { useState } from "react";

const Diary = ({onCreate}) => {
    const [state, setState] = useState({
        content: " "
    });

    const submit = () => {
        onCreate(state.content)
        setState({
            content: " ",
        })
    }
    const change = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div><textarea
        className="textarea"
        name="content" 
        value={state.content}
        onChange={change}>
        </textarea>
        <button onClick={submit}>답글 달기</button>
        </div>
        
    )
}

export default Diary;