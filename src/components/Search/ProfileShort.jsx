import React from "react";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";

const ProfileShort = () => {
  const profileName = useSelector((state) => state.search.value);
  const profile = useSelector((state) => state.search.profile);
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{`${error} не найден`}</h1>;
  }

  if (Object.keys(profile).length) {
    return <ProfileInfo profile={profile} />;
  }

  return null;
};

export default ProfileShort;
