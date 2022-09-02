import React, { useEffect, useState } from "react";
import { fetchAlluser } from "../../Services/fetchUser";
import { fetchAllAlbums } from "../../Services/albums";
import Mailto from "../../GlobalComponents/Mailto/Mailto";
import "./UserCards.css";

const UserCards = ({ setCurrentUserAlbum, setCurrentUserData }: any) => {

  const [users, setUsers] = useState<any>();
  const [userId, setUserId] = useState<any>();

  useEffect(() => {
    const userData = fetchAlluser();
    userData.then((data) => {
      setUsers(data);
      setUserId(data[0].id);
      setCurrentUserData(data[0]);
      fetchAndSetAlbum(data[0].id);
    });
  }, []);

  const fetchAndSetAlbum = (userId: number) => {
    const albumData = fetchAllAlbums(userId);
    albumData.then((albumData) => {
      setCurrentUserAlbum(albumData);
    });
  };

  const fetchAlbums = (user: any) => {
    const { id } = user;
    if (id !== userId) {
      setUserId(id);
      fetchAndSetAlbum(id);
      setCurrentUserData(user);
    }
  };

  return (
    <div>
      <div className="user-card-container">
        {users?.map((user: any, key: any) => {
          const { name, company, id, website, phone } = user;
          return (
            <div
              className={`${
                id === userId ? "user-card selected-card" : "user-card"
              }`}
              key={key}
            >
              <div className="icon">
                <i
                  className="fa fa-user green-icon avatar fa-3x"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="user-name">{name}</div>
              <div className="user-company">
                <i
                  className="fa fa-building green-icon"
                  aria-hidden="true"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                {company.name}
              </div>
              <div className="social-icons">
                <Mailto email="some@gmail.com" subject="" body="">
                  <i
                    className="fa fa-envelope green-icon"
                    aria-hidden="true"
                  ></i>
                </Mailto>
                <i
                  className="fa fa-phone green-icon"
                  aria-hidden="true"
                  onClick={() => {
                    navigator.clipboard.writeText(phone);
                  }}
                ></i>
                <i
                  className="fa fa-link green-icon"
                  aria-hidden="true"
                  onClick={() => window.open(website, "_blank")}
                ></i>
                <i
                  className="fa fa-folder"
                  aria-hidden="true"
                  style={{ color: id === userId ? "black" : "#34A654" }}
                  onClick={() => fetchAlbums(user)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserCards;
