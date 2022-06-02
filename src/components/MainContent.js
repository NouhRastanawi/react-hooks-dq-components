import React from "react";
import AlbumList from "./AlbumList.js";

import GenrePicker from "./GenrePicker.js";


function MainContent() {
  return <main>
    <GenrePicker/>
    <AlbumList/> 
    </main>;
}

export default MainContent;
