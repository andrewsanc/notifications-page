export default function Notifications(props) {
  return (
    <div
      onClick={(e) => props.markAsRead(e, props.index)}
      className="badge"
      style={
        props.content.status === 2
          ? { backgroundColor: "white" }
          : { backgroundColor: "#f6fafd" }
      }
    >
      <div className="content">
        <img src={props.content.img} alt="userPic" />
        <div>
          <b>{props.content.name}</b>
          <p className="time">{props.content.time} ago</p>
        </div>
        <p className="message">{props.content.desc}</p>
        {props.content.status === 1 && (
          <img src="/images/circle.png" className="circle" />
        )}
      </div>
    </div>
  );
}
