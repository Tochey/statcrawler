import React from "react";
import "./App.css";
// import SpServices from "../services/SpServices";
import Navbar from "../layouts/navbar/navbar";
import Hero from "../layouts/hero/hero";
import Works from "../layouts/works/how-it-works";
import Teams from "../layouts/design/design-for-teams";
import Features from "../layouts/features/features";
import Footer from "../layouts/footer/footer";

// commented the import statement for the SpServices
// everything there has to go into its own component

function App() {
  return (
    <div className="App">
   {/* <SpServices url='https://status.logmeinremotesupport.com'/> */}
   {/* functional with {"https://status.zoom.us",https://status.notion.so, https://status.egnyte.com, https://status.logmeinremotesupport.com } */}
   <Navbar/>
   <Hero/>
   <Teams/>
   <Works/>
   <Features/>
   <Footer/>
    </div>
  );
}
export default App;
