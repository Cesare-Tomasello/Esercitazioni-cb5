import "./Sidemenu.css";
import React from "react";

function Sidemenu() {
  return (
    <div className="Sidemenu">
      <div className="sideMenuHome">
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">home</span>
          Home
        </button>
      </div>
      <div className="sideMenuOthers">
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">search</span>
          Search
        </button>
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">explore</span>
          Explore
        </button>
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">movie</span>
          Reels
        </button>
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">send</span>
          Message
        </button>
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">favorite</span>
          Notifications
        </button>
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">add_box</span>
          Create
        </button>
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">account_circle</span>
          Profile
        </button>
      </div>
      <div className="sideMenuOptions">
        <button className="sideMenuBtn">
          <span className="material-symbols-outlined">menu</span>
          More
        </button>
      </div>
    </div>
  );
}

export default Sidemenu;
