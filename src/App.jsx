import './App.css'
import Button from './components/Button/Button.jsx'
import JournalItem from "./components/JournalItem/JournalItem.jsx";

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
   <>
     <h1>Suchka ti kak razgovarivaesh</h1>
       <Button/>
       <JournalItem
           title={data[0].title}
           date={data[0].date}
           text={data[0].text}
       />
       <JournalItem
           title={data[1].title}
           date={data[1].date}
           text={data[1].text}
       />
   </>
)
}

export default App
