import React from "react";
import { useNavigate } from "react-router-dom";
import "./Albums.css";

const Albums = ({ currentUserAlbum, currentUserdata }: any) => {
  let navigate = useNavigate();

  const openAlbum = (albumId: number) => {
    navigate(`/${albumId}`);
  };

  return (
    <div className="album-section">
      <div className="album-user-details">
        <div className="icon">
          <i
            className="fa fa-user green-icon avatar fa-4x"
            aria-hidden="true"
          ></i>
        </div>
        <div className="album-user-name">Username: Bret</div>
        <div className="album-user-fn">Name: Leanne Graham</div>
        <div className="album-social-icon">
          <i className="fa fa-envelope green-icon fa-2x" aria-hidden="true"></i>
          <i className="fa fa-phone green-icon fa-2x" aria-hidden="true"></i>
          <i className="fa fa-link green-icon fa-2x" aria-hidden="true"></i>
        </div>
        <div className="album-user-address">
          <div className="address-heading">
            <i className="fa fa-home green-icon fa-2x" aria-hidden="true"></i>
            <strong>Address:</strong>
          </div>
          <div className="address-data">
            Kulas Light, Apt. 556 <br />
            Gwenborough- 92998-3874 <br />
            lat: -37.3159,lng: 81.1496
          </div>
        </div>
      </div>

      <div className="album-section-scroll">
        <strong> Albums</strong>
        <div className="album-scroll">
          {currentUserAlbum?.map((album: any, key: any) => {
            return (
              <div
                className="albums"
                key={key}
                onClick={() => openAlbum(album.id)}
              >
                <i
                  className="fa fa-folder green-icon fa-2x right-margin"
                  aria-hidden="true"
                ></i>
                {album.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Albums;
