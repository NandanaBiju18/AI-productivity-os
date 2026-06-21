import { useEffect, useState } from "react";
import API from "../services/api";

function ScheduleHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await (API.get("/tasks/schedule-history")
      );

      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <h2>📅 Schedule History</h2>

      {history.map((item) => (
        <div
          key={item._id}
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            Generated:
            {" "}
            {new Date(
              item.createdAt
            ).toLocaleString()}
          </p>

          <p>
            Tasks:
            {" "}
            {
              item.content?.schedule
                ?.length
            }
          </p>
        </div>
      ))}
    </div>
  );
}

export default ScheduleHistory;