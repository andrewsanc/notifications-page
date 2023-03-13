import Notifications from "./Notifications";
import { useState } from "react";

export default function Card() {
  const [notiData, setNotiData] = useState(data);

  const readNotifications = (notificationData) => {
    return notificationData.reduce((acc, data) => {
      return data.status == 2 ? acc - 1 : acc - 0;
    }, notiData.length);
  };

  const [notiCount, setNotiCount] = useState(readNotifications(notiData));

  const markAsRead = (e, index) => {
    const notiDataCopy = [...notiData];
    const selectedNotification = notiDataCopy[index];
    selectedNotification.status = 2;
    setNotiData(notiDataCopy);
    setNotiCount(readNotifications(notiDataCopy));
  };

  const markAllAsRead = () => {
    const notiDataCopy = [...notiData];
    const markAllData = notiDataCopy.map((x) => {
      x.status = 2;
      return x;
    });
    setNotiData(markAllData);
    setNotiCount(readNotifications(markAllData));
  };

  return (
    <div>
      <div className="page">
        <div className="header">
          <h2 className="noti-title">
            Notifications
            <p className="noti-num">{notiCount}</p>
          </h2>
          <button className="read-toggle" onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>
        <div className="noti-container">
          {notiData.map((content, index) => {
            return (
              <Notifications
                content={content}
                markAsRead={markAsRead}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Mark Webber",
    desc: "reacted to your recent post",
    status: 1,
    img: "/images/avatar-mark-webber.webp",
    time: "3 min",
  },
  {
    name: " Angela Grey",
    desc: "followed you",
    status: 1,
    img: "/images/avatar-angela-gray.webp",
    time: "20 min",
  },
  {
    name: "Kimberly Smith",
    desc: "commented on your picture",
    status: 2,
    img: "/images/avatar-kimberly-smith.webp",
    time: "7 hours",
  },
  {
    name: "Anna Kim",
    desc: "left the group Chess Club",
    status: 2,
    img: "/images/avatar-anna-kim.webp",
    time: "2 days",
  },
  {
    name: "Anna Kim",
    desc: "left the group Chess Club",
    status: 1,
    img: "/images/avatar-anna-kim.webp",
    time: "2 days",
  },
];
