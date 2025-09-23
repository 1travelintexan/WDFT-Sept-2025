import UserPicture from "./UserPicture";

export const User = (props) => {
  console.log(props);
  const { userName, userAge, image } = props.user;
  return (
    <div>
      <UserPicture ourPicture={image} />
      <h3>User Name: {userName} </h3>
      <h3>User Age: {userAge}</h3>
    </div>
  );
};

export const PostCard = () => {
  return <div>PostCArd</div>;
};
