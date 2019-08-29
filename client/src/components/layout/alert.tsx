import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Alert, AlertTypes } from '../../store/ducks/alert/types'
import { ApplicationState } from '../../store'
import {connect} from 'react-redux'


interface Props{
    alerts: Alert[]
}


class AlertComponent extends Component<Props>{
    
    render() {
        const alerts = this.props.alerts
        console.log(alerts)
        return(
            alerts.map(alert => (
            <div key = {alert.id} className = {`alert alert-${alert.alertType}`}>
                {alert.msg}
            </div>
            ))
        )
    }
}

function mapStateToProps(state: ApplicationState){
    const {alerts} = state.alert
    return {alerts}
};


export default connect(mapStateToProps)(AlertComponent);
