import './JournalItem.css'

function JournalItem({title, date, text}) {

    return (
        <div className='journal-item'>
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className='journal-item__date'>{date.toString()}</div>
                <p className='journal-item__text'>{text}</p>
            </h2>
        </div>
    )
}

export default JournalItem