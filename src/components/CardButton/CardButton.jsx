import './CardButton.css'

function CardButton({children, className}) {
    const cls = 'card-button' + (className ? ' ' + className : '');

    return (
        <button className={cls}>
            {children}
        </button>
    )
}

export default CardButton