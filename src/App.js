import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PageFound from "./components/NotFound/PageFound";
import { UserStorage } from "./Hook/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
