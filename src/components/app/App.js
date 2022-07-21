import React from "react";
import "./App.css";
import SpServices from "../services/SpServices";

function App() {
  return (
    <div className="App">
   <SpServices url='https://status.logmeinremotesupport.com'/> 
   {/* functional with {"https://status.zoom.us",https://status.notion.so, https://status.egnyte.com, https://status.logmeinremotesupport.com } */}
    </div>
  );
}

export default App;
