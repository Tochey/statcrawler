import React from "react";
import "./App.css";
import LandingPage from "../pages/LandingPage";
import Signup from '../pages/users.signup'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/users.login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import EgnyteData from '../pages/services/Egnyte'




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
          <Route exact path="/dashboard/egnyte" element={<EgnyteData/>}  />
        </Routes>
        </Layout>
      </Router>
    </>

  );
}
export default App;
