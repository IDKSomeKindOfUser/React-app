import './JournalAddButton.css'
import CardButton from "../CardButton/CardButton.jsx";

function JournalAddButton({clearForm}) {
    return (
        <CardButton className="journal-add-button" onClick={clearForm}>
            <img className={'plus'} src="/plus.svg" alt="add"/>
            New memory
        </CardButton>
    )
}

export default JournalAddButton