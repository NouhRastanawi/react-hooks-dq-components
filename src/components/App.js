import React from "react";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";
import Logo from "./Logo.js";
import TopMenu from "./TopMenu.js";
import SideMenu from "./SideMenu.js";
import GenrePicker from "./GenrePicker.js";
import MainContent from "./MainContent.js";

function App() {
  return (
    <div className="app-container">
      <TopMenu/>
      <MainContent/>
      <SideMenu/>
    </div>
  );
}

export default App;
