import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Schedule from "./components/Schedule";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ScheduleHistory from "./components/ScheduleHistory";
import Pomodoro from "./components/Pomodoro";

function App() {
  const [refresh, setRefresh] = useState(false);

  const token = localStorage.getItem("token");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );
  };

  if (!token) {
    return <Login />;
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#111827" : "#f3f4f6",
        color: darkMode ? "white" : "black",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1
  style={{
    fontSize: "40px",
    marginBottom: "5px",
    color: darkMode ? "white" : "black",
  }}
>
          
            🚀 AI Productivity OS
          </h1>

         <p
  style={{
    color: darkMode ? "#d1d5db" : "#6b7280",
  }}
>
  Smart AI Task Planner
</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={logout}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard */}
      <Dashboard
  refresh={refresh}
  darkMode={darkMode}
/>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <AddTask setRefresh={setRefresh} />
        <TaskList refresh={refresh} />
      </div>

      {/* AI Schedule */}
      <Schedule />

<ScheduleHistory />

<Pomodoro />
    </div>
  );
}

export default App;