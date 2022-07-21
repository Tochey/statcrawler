import React, { useEffect, useState } from "react";
import network from "../logic/network";
import { format } from "../logic/formatter";

function SpServices({ url }) {
  const networkDaemon = new network(url, 10);
  const [incident, setIncident] = useState([]);
  const [summary, setSummary] = useState();

  useEffect(() => {
    networkDaemon.pollData(
      (e) => {
        e.map((e) => {
          setIncident((incident) => [...incident, format(e)]);
        });
      },
      (e) => {
        setSummary(e.description);
      }
    );
    // return () => networkDaemon.clear()
  }, []);

  return (
    <div>
      <h1>{summary}</h1>
      {incident.map((e) => (
        <div>
          <h1>{e.name}</h1>
          <p>{e.status}</p>
          <p>{e.date}</p>
          <p>{e.link}</p>
          {e.incident_history_update.map((e) => {
            return (
              <div>
                <p>{e.body}</p>
                <p>{e.status}</p>
                <p>{e.last_updated}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default SpServices;
