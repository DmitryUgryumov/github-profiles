import React from "react";
import { useSelector } from "react-redux";

import ProfileInfo from "./ProfileInfo";
import PageLoader from "../UI/Loaders/PageLoader";

const ProfileShort = () => {
  const profile = useSelector((state) => state.search.profile);
  const loading = useSelector((state) => state.search.loading);
  const errorLogin = useSelector((state) => state.search.error);

  if (loading) {
    return <PageLoader />;
  }

  if (errorLogin) {
    return <h2 className="error">{`"${errorLogin}" не найден`}</h2>;
  }

  if (Object.keys(profile).length) {
    return <ProfileInfo profile={profile} />;
  }

  return null;
};

export default ProfileShort;
