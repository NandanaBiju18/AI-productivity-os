import { useState } from "react";
import API from "../services/api";

function Schedule() {
  const [schedule, setSchedule] = useState(null);

  const generate = async () => {
    const res = await API.get("/tasks/generate");

    const data = JSON.parse(
      res.data.plan.replace(/```json|```/g, "")
    );

    setSchedule(data);
  };

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        marginTop: "25px",
        overflowX: "auto",

      }}
    >
      <h2
        style={{
          marginBottom: "15px",
        }}
      >
        🤖 AI Schedule
      </h2>

      <button
        onClick={generate}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 18px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Generate My Day
      </button>

      {schedule?.schedule?.map((item, index) => (
        <div
          key={index}
          style={{
            borderLeft: "5px solid #2563eb",
            background: "#f9fafb",
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "8px",
          }}
        >
          <h4>{item.time}</h4>
          <p>{item.task}</p>
        </div>
      ))}

      {schedule?.tips?.length > 0 && (
        <>
          <h3>💡 Tips</h3>

          <ul>
            {schedule.tips.map((tip, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "8px",
                }}
              >
                {tip}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Schedule;