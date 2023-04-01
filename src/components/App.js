import { useState } from 'react';
import '../style-components/App.scss';
import Notification from './Notification';

function App() {
  // hooks, in order: the notification counter and change all states to active or disactive
  const [cont, setCont] = useState(1)
  const [allNotificationsRead, setAllNotificationsRead] = useState(true);

  // func to change cont based on particular notification click
  const handleClickNotification = (number) => {
    setCont(cont + number)
  }

  // func to deal with change all states at once
  const handleClickMarker = () => {
    if (allNotificationsRead) {
      setCont(6)
      setAllNotificationsRead(false);
    } else {
      setCont(1)
      setAllNotificationsRead(true);
    }

  }

  return (
    <div className="App">
      <div className="notification-menu">
        <div className='infos'>
          <span className="notification-title">Notificações</span>
          <div className='notification-number'>{cont}</div>
        </div>

        <span className="marker" onClick={handleClickMarker}>Mark all as read</span>
      </div>

      <div className='all-notfications'>
        <Notification 
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-mark-webber.webp"}
          alt="Mark Webber"
          name="Mark Webber"
          whatdid="reacted to your recent post"
          wheredid="My first tournament today!"
          timedid="1m ago"
          isRead={allNotificationsRead}
        />

        <Notification 
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-angela-gray.webp"}
          alt="Angela Gray"
          name="Angela Gray"
          whatdid="followed you"
          timedid="5m ago"
          isRead={allNotificationsRead}
        />

        <Notification
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-jacob-thompson.webp"}
          alt="Jacob Thompson"
          name="Jacob Thompson"
          whatdid="has joined your group"
          wheredid="Chess Club"
          timedid="1 day ago"
          isRead={allNotificationsRead}
        />

        <Notification
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-rizky-hasanuddin.webp"}
          alt="Rizky Hasanuddin"
          name="Rizky Hasanuddin"
          whatdid="sent you a private message:"
          wheredid="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
            I'm already having lots of fun and improving my game."
          timedid="5 days ago"
          isRead={allNotificationsRead}
        />

        <Notification
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-kimberly-smith.webp"}
          alt="Kimberly Smith"
          name="Kimberly Smith"
          whatdid="commented on your picture"
          timedid="1 week ago"
          isRead={allNotificationsRead}
        />

        <Notification
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-nathan-peterson.webp"}
          alt="Nathan Peterson"
          name="Nathan Peterson"
          whatdid="reacted to your recent post"
          wheredid="5 end-game strategies to increase your win rate"
          timedid="2 weeks ago"
          isRead={allNotificationsRead}
        />

        <Notification 
          onClickChange={handleClickNotification}
          src={process.env.PUBLIC_URL + "/images/avatar-anna-kim.webp"}
          alt="Anna Kim"
          name="Anna Kim"
          whatdid="left the group"
          wheredid="Chess Club"
          timedid="2 weeks ago"
          isRead={allNotificationsRead}
        />
      </div>
    </div>
  );
}

export default App;

// this is the main div, all content is inside it
