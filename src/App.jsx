import './App.css'
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";


function App() {
    const data = [
        {
            title: 'Suka ebanaya',
            text: 'Pizda blyat',
            date: new Date(),
        },
        {
            title: 'Ya hui znaet',
            text: 'Pizda blyat',
            date: new Date(),
        }
    ]

  return (
   <div className={'app'}>
       <LeftPanel>
           <Header/>
           <JournalList>
               <JournalAddButton/>
               <CardButton>
                   <JournalItem
                       title={data[0].title}
                       date={data[0].date}
                       text={data[0].text}
                   />
               </CardButton>
               <CardButton>
                   <JournalItem
                       title={data[1].title}
                       date={data[1].date}
                       text={data[1].text}
                   />
               </CardButton>
           </JournalList>
       </LeftPanel>
       <Body>
            <h2>Body</h2>
       </Body>
   </div>
)
}

export default App
