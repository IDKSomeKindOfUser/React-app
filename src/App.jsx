import './App.css'
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import {useLocalStorage} from "../hooks/use-localstorage.hooks.js";
import {UserContextProvider} from "./context/user.context.jsx";
import {useState} from "react";


function mapData(datas) {
    if (!datas) {
        return []
    }
    return datas.map(i => ({
        ...i,
        date: new Date(i.date),
    }))
}


function App() {
    const [datas, setData] = useLocalStorage('KeyData', []);
    const [selectedItem, setSelectedItem] = useState(null);

    const addData = data => {
        if (!data.id) {
            setData([...mapData(datas), {
                ...data,
                date: new Date(data.date),
                id: datas.length > 0 ? Math.max(...datas.map(i => i.id)) + 1 : 1,
            }])
        } else {
            setData([...mapData(datas).map(d => {
                if (d.id === data.id) {
                    return {
                        ...data,
                    };
                }
                return d;
            })])
        }
    }

    const deleteData = (id) => {
        setData([...datas.filter(d => d.id !== id)]);
    }


    return (
        <UserContextProvider>
            <div className={'app'}>
                <LeftPanel>
                    <Header/>
                    <JournalAddButton clearForm={() => setSelectedItem(null)}/>
                    <JournalList data={mapData(datas)} setData={setSelectedItem}/>
                </LeftPanel>
                <Body>
                    <JournalForm onSubmit={addData} onDelete={deleteData} itemsData={selectedItem}/>
                </Body>
            </div>
        </UserContextProvider>
    )
}

export default App



