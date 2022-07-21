import React, { useEffect } from "react";
import "./App.css";
import SpServices from "../services/SpServices";
import network from "../../logic/network";
import axios from "axios";

function App() {
// let nw = new network('https://portal.office.com', 15)
//   useEffect(() => {
//       // nw.pollOffice((e) => e)
//       axios.get('https://status.slack.com/'
//       )
//   }, [])
  
  return (
    <div className="App">
   <SpServices url='https://status.logmeinremotesupport.com'/> 
   {/* functional with {"https://status.zoom.us",https://status.notion.so, https://status.egnyte.com, https://status.logmeinremotesupport.com } */}
    </div>
  );
}

export default App;
