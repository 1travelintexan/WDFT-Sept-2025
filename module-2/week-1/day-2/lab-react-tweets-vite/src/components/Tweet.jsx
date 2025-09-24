import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./TimeStamp";
import User from "./User";

function Tweet(props) {
  const { user, message, timestamp } = props.tweetProp;
  return (
    <div className="tweet">
      <ProfileImage theImage={user.image} />

      <div className="body">
        <div className="top">
          <User theName={user.name} theHandle={user.handle} />
          <TimeStamp theTime={timestamp} />
        </div>
        <Message theCoolMessage={message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
