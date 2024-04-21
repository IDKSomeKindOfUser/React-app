import './JournalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournalItem from "../JournalItem/JournalItem.jsx";

function JournalList({data}) {
    if (data.length === 0) {
        return <h2>No entries yet, add the first one</h2>
    }


    const sortItems = (a, b) => {
        if (a.id < b.id) {
            return 1;
        } else {
            return -1;
        }
    }
    return <>{data.sort(sortItems).map(e => (
        <CardButton key={e.id}>
            <JournalItem
                title={e.title}
                date={e.date}
                text={e.text}
            />
        </CardButton>
    ))}</>

    return (
        <div className="journal-list">
            {children}
        </div>
    )
}

export default JournalList