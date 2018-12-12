import React from 'react'
import moment from 'moment'

const notifications = (props) => {
    const {notifications} = props
    return (
        <div>
            <h5>Notifications</h5>
            <ul>
                { notifications && notifications.map(item => {
                    return (
                        <li key={item.id}>
                        <span id='user'>{item.user} </span>
                        <span>{item.content} </span>
                        <span>{moment(item.time.toDate()).fromNow()}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default notifications