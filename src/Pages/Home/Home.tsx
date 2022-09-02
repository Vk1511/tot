import React from "react";
import Albums from "../../Components/Albums/Albums";
import UserCards from "../../Components/UserCards/UserCards";
import "./Home.css";

const Home = ({
  currentUserAlbum,
  setCurrentUserAlbum,
  setCurrentUserData,
  currentUserdata,
}: any) => {
  return (
    <div className="home-page-container">
      <div className="user-cards-section">
        <UserCards
          setCurrentUserAlbum={setCurrentUserAlbum}
          setCurrentUserData={setCurrentUserData}
        />
      </div>
      <div className="card-detail-section">
        <Albums
          currentUserAlbum={currentUserAlbum}
          currentUserdata={currentUserdata}
        />
      </div>
    </div>
  );
};

export default Home;
