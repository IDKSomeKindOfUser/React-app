import './JournalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournalItem from "../JournalItem/JournalItem.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

function JournalList({data}) {
    const { userId }  = useContext(UserContext)

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
    return <>{data.filter(e => e.userId === userId).sort(sortItems).map(e => (
        <CardButton key={e.id}>
            <JournalItem
                title={e.title}
                date={e.date}
                post={e.post}
            />
        </CardButton>
    ))}</>
}

export default JournalList