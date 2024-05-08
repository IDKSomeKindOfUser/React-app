import './JournalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournalItem from "../JournalItem/JournalItem.jsx";
import {useContext, useMemo} from "react";
import {UserContext} from "../../context/user.context.jsx";

function JournalList({data, setData}) {
    const { userId }  = useContext(UserContext);
    const sortItems = (a, b) => {
        if (a.id < b.id) {
            return 1;
        } else {
            return -1;
        }
    }
    const filteredData = useMemo( () => data.filter(e => e.userId === userId).sort(sortItems), [data, userId])

    if (data.length === 0) {
        return <h2>No entries yet, add the first one</h2>
    }



    return <>{filteredData.map(e => (
        <CardButton key={e.id} onClick={() => setData(e)}>
            <JournalItem
                title={e.title}
                date={e.date}
                post={e.post}
            />
        </CardButton>
    ))}</>
}

export default JournalList