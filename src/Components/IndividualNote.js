import React from 'react'
import '../Styles/IndividualNote.css'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function IndividualNote({match}) {
    const title_text = match.params.notes.split('^')
    return (
        <div className = 'individual__note'>
            <h1 className = 'individual__note__title'>{title_text[1]}</h1>
            <small className = 'individual__note__date'>
                {title_text[0]}
            </small>
            <p className = 'individual__note__notes'>
                {title_text[2].replace(/^\s*[\r\n]/gm)}
            </p>
            <Link to = '/'>
                <button className = 'back__to__home'> <ArrowBack /> Go Back</button>
            </Link>
        </div>
    )
}

export default IndividualNote
