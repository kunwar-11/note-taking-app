import React , {useEffect} from 'react'
import {Clear} from '@material-ui/icons'
import '../Styles/AddedAlert.css'
function AddedAlert({isAdded , setIsAdded , alertStatement}) {
    useEffect(() => {
        if(isAdded) {
            window.setTimeout(disapperAlert,2750)
        }
    })
    const disapperAlert = () => {
        setIsAdded(false)
    }
    return (
        <div className = {`${isAdded ? 'alert__success' : 'notAlert'}`}>
            <h4 className = 'alert__header'>{alertStatement}</h4>
            <Clear className = "alert__remover" onClick = {() => setIsAdded(false)}/>
        </div>
    )
}

export default AddedAlert
