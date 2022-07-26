import React from "react";
import "./App.css";
import LandingPage from "../pages/LandingPage";
import Signup from '../pages/users.signup'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/users.login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import EmailVerificationPage from "../pages/emailVerify";


function App() {

  return (
    <>
      <Router >
        <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/signup" element={<Signup/>}  />
          <Route exact path="/user/:id/verify/:token" element={<EmailVerificationPage/>}  />
        </Routes>
        </Layout>
      </Router>
    </>

  );
}
export default App;
