import './CardButton.css'

function CardButton({children, className, ...props}) {
    const cls = 'card-button' + (className ? ' ' + className : '');

    return (
        <button {...props} className={cls}>
            {children}
        </button>
    )
}

export default CardButton