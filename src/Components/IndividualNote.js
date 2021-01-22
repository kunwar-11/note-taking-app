import React from 'react'
import '../Styles/IndividualNote.css'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function IndividualNote(props) {
    console.log(props.location.aboutProps)
    return (
        <div className = 'individual__note'>
            <h1 className = 'individual__note__title'>{props.location.aboutProps.title}</h1>
            <small className = 'individual__note__date'>
                {props.location.aboutProps.date}
            </small>
            <p className = 'individual__note__notes'>
                {props.location.aboutProps.text.replace(/^\s*[\r\n]/gm)}
            </p>
            <Link to = '/'>
                <button className = 'back__to__home'> <ArrowBack /> Go Back</button>
            </Link>
        </div>
    )
}

export default IndividualNote
