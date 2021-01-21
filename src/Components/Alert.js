import React , { useEffect } from 'react'
import '../Styles/Alert.css'
import {Clear} from '@material-ui/icons'
function Alert({isAlert , setIsAlert , alertStatement}) {
    useEffect(() => {
        if(isAlert) {
            window.setTimeout(disapperAlert,2750)
        }
    })
    const disapperAlert = () => {
        setIsAlert(false)
    }
    return (
        <div className = {`${isAlert ? 'alert' : 'notAlert'}`}>
            <h4 className = 'alert__header'>{alertStatement}</h4>
            <Clear onClick = {() => setIsAlert(false)}/>
        </div>
    )
}

export default Alert
