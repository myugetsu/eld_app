import React, { useEffect, useState } from "react";
import axios from "../../api/logs";
import { useParams } from "react-router-dom";
import { Log } from "../../types";

const LogSheet: React.FC = () => {
  const { id } = useParams();
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    axios.get(`/${id}`).then((res) => setLogs(res.data)).catch(console.error);
  }, [id]);

  return (
    <div>
      <h2>Driver Log Sheet</h2>
      {logs.length > 0 ? (
        logs.map((log) => (
          <div key={log.id}>
            <p>Status: {log.status}</p>
            <p>Timestamp: {log.timestamp}</p>
          </div>
        ))
      ) : (
        <p>No logs found.</p>
      )}
    </div>
  );
};

export default LogSheet;
