import React, {useState} from "react";
import UserCards from "./Components/UserCards/UserCards";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Galary from "./Pages/galary";

function App() {

  const [currentUserAlbum, setCurrentUserAlbum] = useState<any>();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setCurrentUserAlbum={setCurrentUserAlbum} currentUserAlbum={currentUserAlbum}/>}></Route>
        <Route path="/:albumId" element={<Galary />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
