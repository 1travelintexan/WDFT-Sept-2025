const User = ({ theName, theHandle }) => {
  return (
    <span className="user">
      <span className="name">{theName}</span>
      <span className="handle">@{theHandle}</span>
    </span>
  );
};
export default User;
