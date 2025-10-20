import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ProfilePage = () => {
  const [profileUser, setProfileUser] = useState({});

  //get data from the context
  //first destructure it from the context you want it
  const { currentUser } = useContext(AuthContext);
  // console.log("on the profile page", currentUser);

  useEffect(() => {
    async function getProfileUserData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${currentUser._id}`
        );
        console.log(data);
        setProfileUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUserData();
  }, []);

  return <div>{profileUser.username}'s ProfilePage</div>;
};
export default ProfilePage;
