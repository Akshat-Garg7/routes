import "./App.css";
import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  return (
    <div className="w-screen h-screen bg-black  flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}/>}></Route>
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Route path="/dashboard" element={<Dashboard />} />
        </PrivateRoute>
      </Routes>

    </div>
  );
}

export default App;
