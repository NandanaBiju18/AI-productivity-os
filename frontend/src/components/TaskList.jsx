import { useEffect, useState } from "react";
import API from "../services/api";

function TaskList({ refresh, darkMode }) {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, [refresh]);

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const completeTask = async (id) => {
    await API.put(`/tasks/${id}`);
    loadTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <div>
      <h2>Tasks</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        
  <div
    style={{
      background: darkMode ? "#111827" : "#f3f4f6",
      color: darkMode ? "white" : "black",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
          <h4>Total</h4>
          <h2>{tasks.length}</h2>
        </div>

        <div
          style={{
           background: darkMode ? "#1f2937" : "white",
color: darkMode ? "white" : "black",
            padding: "15px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h4>Completed</h4>
          <h2>
            {tasks.filter((t) => t.completed).length}
          </h2>
        </div>

        <div
          style={{
            background: darkMode ? "#1f2937" : "white",
color: darkMode ? "white" : "black",
            padding: "15px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h4>Pending</h4>
          <h2>
            {tasks.filter((t) => !t.completed).length}
          </h2>
        </div>
      </div>
      
      <select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  style={{
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
  }}
>
  <option>All</option>
  <option>Study</option>
  <option>Work</option>
  <option>Personal</option>
  <option>Health</option>
</select>

  
{tasks
  .filter(
    (task) =>
      filter === "All" ||
      task.category === filter
  )
  .map((task) => (
        <div
          key={task._id}
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textDecoration: task.completed
              ? "line-through"
              : "none",
            opacity: task.completed ? 0.7 : 1,
          }}
        >
          <h3>{task.name}</h3>

          <p>
  Priority:
  <span
    style={{
      background:
        task.priority === "high"
          ? "#ef4444"
          : task.priority === "medium"
          ? "#f59e0b"
          : "#22c55e",
      color: "white",
      padding: "4px 8px",
      borderRadius: "20px",
      fontSize: "12px",
      marginLeft: "8px",
    }}
  >
    {task.priority}
  </span>
</p>

          <p>
            Duration: {task.estimatedHours || 0}h{" "}
            {task.estimatedMinutes || 0}m
          </p>

          <p>
            Deadline:{" "}
            {task.deadline
              ? new Date(task.deadline).toLocaleDateString()
              : "No deadline"}
          </p>

          <p>
  Category: {task.category}
</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {!task.completed && (
              <button
                onClick={() => completeTask(task._id)}
                style={{
                  background: "#22c55e",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                ✅ Complete
              </button>
            )}

            <button
              onClick={() => deleteTask(task._id)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;