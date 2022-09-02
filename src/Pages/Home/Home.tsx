import React from 'react';
import Albums from '../../Components/Albums/Albums';
import UserCards from '../../Components/UserCards/UserCards';
import "./Home.css";

const Home = ({currentUserAlbum, setCurrentUserAlbum}:any) => {
  return (
    <div className="home-page-container">
      <div className="user-cards-section">
        <UserCards setCurrentUserAlbum={setCurrentUserAlbum}/>
      </div>
      <div className="card-detail-section">
        <Albums currentUserAlbum={currentUserAlbum}/>
      </div>
    </div>
  )
}

export default Home