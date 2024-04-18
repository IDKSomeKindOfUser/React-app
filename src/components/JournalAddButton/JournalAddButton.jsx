import './JournalAddButton.css'
import CardButton from "../CardButton/CardButton.jsx";

function JournalAddButton() {
    return (
        <CardButton className="journal-add-button">
            <img className={'plus'} src="/public/plus.svg" alt="add"/>
            New memory
        </CardButton>
    )
}

export default JournalAddButton