import React, { Component } from 'react'

import { Alert, AlertTypes } from '../../store/ducks/alert/types'

import { ApplicationState } from '../../store'
import {connect} from 'react-redux'
import { render } from 'react-dom';


interface Props{
    alerts: Alert[]
}


const AlertComponent = (alerts: Alert[]) => {
    const alertss = alerts
    return(
    alertss.map(alert => (
    <div key = {alert.id} className = {`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
    )))
}


function mapStateToProps(state: ApplicationState){
    const {alert} = state
    return {alerts: alert.alerts}
};

export default connect(mapStateToProps)(AlertComponent)
