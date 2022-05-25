import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import HomeMovie from "./components/Home/HomeMovie/HomeMovie";
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import PageFound from "./components/NotFound/PageFound";
import { UserStorage } from "./Hook/GlobalContext";

function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000);
  },[])
  
  if(!loading){
    return <Loading />
  } else
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/movie" element={<HomeMovie />} />
          <Route path="*" element={<PageFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
