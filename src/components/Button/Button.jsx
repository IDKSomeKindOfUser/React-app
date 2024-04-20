import './Button.css'

// eslint-disable-next-line react/prop-types
function Button({ text, onClick }) {
    return (
        <button className="button accent" onClick={onClick}>{text}</button>
    )
}

export default Button