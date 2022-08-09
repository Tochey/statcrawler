import React from "react";
import "./App.css";
import LandingPage from "../../routes/LandingPage";
import Login from "../pages/login";
import UserLogin from '../pages/users.signup'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </>

  );
}
export default App;
