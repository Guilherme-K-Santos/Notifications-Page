import React, { useState, useEffect } from 'react'
import '../style-components/Notification.scss'

function Notification(props) {
    // props from App.js
    const { onClickChange, isRead } = props;

    // hooks, in order: to show the notification orange dot and change bakcground
    const [showNotificationDot, setShowNotificationDot] = useState(false)
    const [color, setColor] = useState('white')
    
    // to change notification background
    const divBackColor = {backgroundColor: color}

    // using notification dot state to change between the active and disactive
    function handleClick() {
        if (showNotificationDot === false) {
            activeState()
        } else {
            disactiveState()
        }
    }

    // active func
    const activeState = () => {
        setColor('hsl(211, 68%, 94%)')
        onClickChange(1)
        setShowNotificationDot(true)
    }

    // disactive func
    const disactiveState = () => {
        setColor('white')
        onClickChange(-1)
        setShowNotificationDot(false)
    }

    // React default hook (read react doc)
    useEffect(() => {
        if (isRead) {
            disactiveState();
        } else {
            activeState();
        }
      }, [isRead]);

    return(
        <div className='notification' style={divBackColor} onClick={handleClick}>
            <div>
                <img className="profile-image" src={props.src} alt={props.alt}/>
            </div>
            <div className="content">
                <span className={"profile-name"}>{props.name}</span>
                <span className="whatdid">{props.whatdid}</span>
                <span className={`wheredid ${showNotificationDot ? 'notification-on' : ''}`}>{props.wheredid}</span>
                <span className={`${showNotificationDot ? 'visible' : ''}`}></span>

                <p className="timedid">{props.timedid}</p>
            </div>
        </div>
    )
}

export default Notification
