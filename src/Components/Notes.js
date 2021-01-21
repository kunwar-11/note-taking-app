import React from 'react'
import { Delete } from '@material-ui/icons'
import '../Styles/Notes.css'
function Notes( {notes , setNotes}) {
    function textAbstract(text, length) {
        if (text == null) {
            return "";
        }
        if (text.length <= length) {
            return text;
        }
        text = text.substring(0, length);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "...";
    }
    const deleteHandler = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }
    return (
        <div className = "notes">
            {notes.map((note) => {
                return (
                    <div key = {note.id} className = "notes__each">
                        <h1 className = 'notes__title'>
                            {textAbstract(note.title,15)}
                        </h1>
                        <small className = "notes__date">
                            {note.date}
                        </small>
                        <h4 className = 'notes__content'>
                            {textAbstract(note.text , 200)}
                        </h4>
                        <Delete className = "notes__delete__btn" size = '2x' onClick = {() => deleteHandler(note.id)}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Notes
