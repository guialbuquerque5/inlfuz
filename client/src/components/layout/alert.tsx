import React from 'react'

import { Alert } from '../../store/ducks/alert/types'

interface OwnProps {
  alert: Alert
}

export default function AlertComponent({alert}: OwnProps){
    return (
        <div>
            {alert.msg}
        </div>
    )
}
