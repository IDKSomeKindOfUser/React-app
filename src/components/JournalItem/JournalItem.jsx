import './JournalItem.css'

// eslint-disable-next-line react/prop-types
function JournalItem({title, date, post}) {
    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className='journal-item__date'>{formatedDate}</div>
                <p className='journal-item__text'>{post}</p>
            </h2>
        </>
    )
}

export default JournalItem