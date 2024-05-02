import './App.css'
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import {useLocalStorage} from "../hooks/use-localstorage.hooks.js";
import {UserContextProvider} from "./context/user.context.jsx";


function mapData(datas){
    if (!datas){
        return []
    }
    return datas.map(i => ({
        ...i,
        date: new Date(i.date),
    }))
}


function App() {
    const [datas, setData] = useLocalStorage('KeyData');

    const addData = data => {
        setData([...mapData(datas), {
            post: data.post,
            title: data.title,
            date: new Date(data.date),
            id: datas.length > 0 ? Math.max(...datas.map(i => i.id)) + 1 : 1,
        }])
    }


    return (
        <UserContextProvider>
            <div className={'app'}>
                <LeftPanel>
                    <Header/>
                    <JournalList data={mapData(datas)}>
                        <JournalAddButton/>
                    </JournalList>
                </LeftPanel>
                <Body>
                    <JournalForm onSubmit={addData}/>
                </Body>
            </div>
        </UserContextProvider>
    )
}

export default App



