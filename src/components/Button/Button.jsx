import './Button.css'
import {useState} from "react";

function Button() {
    const [text, setText] = useState('Save')

    const clicked = () => {
        setText('Close')
        alert('pizda')
    }

    return (
        <button onClick={clicked} className="button accent">{text}</button>
    )
}

export default Button