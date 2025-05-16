import PageHeader from "@/component/PageHeader/PageHeader";
import UserProfile from "@/component/UserProfile/UserProfile";
import FeatureSection from "@/component/FeatureSection/FeatureSection";

import "./style.scss";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader />
      <UserProfile />
      <FeatureSection />
    </div>
  );
};

export default ProfilePage;
