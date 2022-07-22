import React, { useEffect, useState } from "react";
import network from "../logic/network";
// import { format } from "../logic/formatter";

function SpServices({ url }) {
  const [incident, setIncident] = useState([]);
  const [summary, setSummary] = useState();

  useEffect(() => {
    const networkDaemon = new network(url, 10);
    networkDaemon.pollData(
      (e) => {
        setIncident(e);
      },
      (e) => {
        setSummary(e.description);
      }
    );
    // return () => networkDaemon.clear()
  }, [url]);

  return (
    <div>
      <h1>{summary}</h1>
      {incident.map((e, idx) => (
        <div key={idx}>
          <h1>{e.name}</h1>
          <p>{e.status}</p>
          <p>{e.date}</p>
          <p>{e.link}</p>
          {e.incident_updates.map((e, index) => (
            <div key={`${idx}-${index}`}>
              <p>{e.body}</p>
              <p>{e.status}</p>
              <p>{e.last_updated}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SpServices;
