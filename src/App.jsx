import './App.css'
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataKey = JSON.parse(localStorage.getItem("KeyData"));
        if (dataKey) {
            setData(dataKey.map(d => ({
                ...d,
                date: new Date(d.date),
            })))
        }
    }, []);

    useEffect(() => {
        if (data.length) {
            localStorage.setItem('KeyData', JSON.stringify(data));
        }
    }, [data]);

    const addData = data => {
        setData(oldData => [...oldData, {
            post: data.post,
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



