import React, {useState , useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header'
import Alert from './Components/Alert'
import AddedAlert from './Components/AddedAlert'
import './Styles/App.css'
import Notes from "./Components/Notes";
import IndividualNote from './Components/IndividualNote'
import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
function App() {
  const [notes , setNotes] = useState([])
  const [header , setHeader] = useState('')
  const [noteTake , setNoteTake] = useState('')
  const [isAlert , setIsAlert] = useState(false)
  const [alertStatement , setAlertStatement] = useState('')
  const [isAdded , setIsAdded] = useState(false)
  const todayDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month  + '\n'+ day  + ',' + year;
    return output
  }
  const submitClickHandler = () => {
      if(header === '' && noteTake === '') {
        setIsAlert(true)
        setAlertStatement('enter header and note')
        
      }
      if(header === '' && noteTake !== '') {
        setIsAlert(true)
        setAlertStatement('enter note title')
      }
      if(header !== '' && noteTake === '') {
        setIsAlert(true)
        setAlertStatement('enter your note')
      }
      if(header !== '' && noteTake !== '') {
      setNotes([...notes,{title : header , text : noteTake , date : todayDate() , id : uuidv4()}])
      setHeader('')
      setNoteTake('')
      setAlertStatement('Your note is added')
      setIsAdded(true)
      setIsAlert(false)
    }
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setNotes(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(notes));
  }, [notes]);
  // console.log(notes)
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
          <Route path = '/' exact>
            {isAdded ? <AddedAlert isAdded = {isAdded} setIsAdded = {setIsAdded} alertStatement = {alertStatement}/> : <Alert isAlert = {isAlert} setIsAlert = {setIsAlert} alertStatement = {alertStatement}/>}
            <input className = 'heading' type="text" value = {header} placeholder = 'enter heading here' onChange = {(e) => setHeader(e.target.value)}/>
            <textarea className = 'note' value = {noteTake} cols="30" rows="10" placeholder = 'enter your note here' onChange = {(e) => setNoteTake(e.target.value)}></textarea>
            <button className = 'submit' onClick = {submitClickHandler}>Submit</button>
            <Notes notes = {notes} setNotes = {setNotes}/>
          </Route>
          <Route path = '/notes/:notes' component = {IndividualNote}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
