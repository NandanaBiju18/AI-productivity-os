import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard({ refresh, darkMode })  {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  loadTasks();
}, [refresh]);

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const total = tasks.length;

  const completed = tasks.filter(
    (t) => t.completed
  ).length;

  const pending = total - completed;

  const completionRate =
    total > 0
      ? Math.round(
          (completed / total) * 100
        )
      : 0;

    const productivityScore =
  total > 0
    ? Math.round(
        (completed / total) * 100
      )
    : 0;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
  window.innerWidth < 768
    ? "1fr 1fr"
    : "repeat(4,1fr)",
        gap: "15px",
        marginBottom: "25px",
      }}
    >
      <Card
        title="📋 Total Tasks"
        value={total}
        darkMode={darkMode}
      />

      <Card
        title="✅ Completed"
        value={completed}
        darkMode={darkMode}
      />

      <Card
        title="⏳ Pending"
        value={pending}
        darkMode={darkMode}
      />

      <Card
        title="📈 Success Rate"
        value={`${completionRate}%`}
        darkMode={darkMode}
      />

      <Card
  title="🚀 Productivity Score"
  value={`${productivityScore}/100`}
/>
    </div>
  );
}

function Card({ title, value, darkMode }) {
  return (
    <div
      style={{
        background: darkMode ? "#1f2937" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{title}</h4>
      <h1>{value}</h1>
    </div>
  );
}

export default Dashboard;