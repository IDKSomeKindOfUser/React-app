import './App.css'
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import {useState} from "react";


const INITIAL_DATA = [
    // {
    //     id: 1,
    //     title: 'Suka ebanaya',
    //     text: 'Pizda blyat',
    //     date: new Date(),
    // },
    // {
    //     id: 2,
    //     title: 'Ya hui znaet',
    //     text: 'Pizda blyat',
    //     date: new Date(),
    // }
];

function App() {
    const [data, setData] = useState(INITIAL_DATA);

    const addData = data => {
        setData(oldData => [...oldData, {
            text: data.text,
            title: data.title,
            date: new Date(data.date),
            id: oldData.length > 0 ? Math.max(...oldData.map(i => i.id)) + 1 : 1,
        }])
    }


    return (
        <div className={'app'}>
            <LeftPanel>
                <Header/>
                <JournalList data={data}>
                    <JournalAddButton/>
                </JournalList>
            </LeftPanel>
            <Body>
                <JournalForm onSubmit={addData}/>
            </Body>
        </div>
    )
}

export default App
