import React, { useEffect } from "react";
import "./App.css";
<<<<<<< HEAD:client/src/components/app/App.js
import SpServices from "../services/SpServices";
import network from "../../logic/network";
import axios from "axios";
=======
// import SpServices from "../services/SpServices";
import Navbar from "../layouts/navbar/navbar";
import Hero from "../layouts/hero/hero";
import Works from "../layouts/works/how-it-works";
import Teams from "../layouts/design/design-for-teams";
import Features from "../layouts/features/features";
import Footer from "../layouts/footer/footer";

// commented the import statement for the SpServices
// everything there has to go into its own component
>>>>>>> 3026cf0c3aadb456f16d27a1362088f487d0ea0e:src/components/app/App.js

function App() {
// let nw = new network('https://portal.office.com', 15)
//   useEffect(() => {
//       // nw.pollOffice((e) => e)
//       axios.get('https://status.slack.com/'
//       )
//   }, [])
  
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
