import { useState } from "react";
import API from "../services/api";

function AddTask({ setRefresh }) {
  const [form, setForm] = useState({
    name: "",
    priority: "medium",
    deadline: "",
    estimatedHours: 0,
    estimatedMinutes: 30,
    category: "Personal",
  });

  const submit = async () => {
    try {
      await API.post("/tasks/add", form);

      setForm({
        name: "",
        priority: "medium",
        deadline: "",
        estimatedHours: 0,
        estimatedMinutes: 30,
      });

      setRefresh((p) => !p);
    } catch (error) {
      console.error(error);
      alert("Failed to add task");
    }
  };

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "22px",
        }}
      >
        ➕ Add New Task
      </h2>

      <input
        placeholder="Task Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <select
        value={form.priority}
        onChange={(e) =>
          setForm({
            ...form,
            priority: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <option value="high">🔥 High</option>
        <option value="medium">⚡ Medium</option>
        <option value="low">🌱 Low</option>
      </select>
      
      <select
  value={form.category}
  onChange={(e) =>
    setForm({
      ...form,
      category: e.target.value,
    })
  }
>
  <option>Study</option>
  <option>Work</option>
  <option>Personal</option>
  <option>Health</option>
</select>

   <select
  value={form.category}
  onChange={(e) =>
    setForm({
      ...form,
      category: e.target.value,
    })
  }
>
  <option value="Study">📚 Study</option>
  <option value="Work">💼 Work</option>
  <option value="Personal">🏠 Personal</option>
  <option value="Health">💪 Health</option>
</select>

      <input
        type="date"
        value={form.deadline}
        onChange={(e) =>
          setForm({
            ...form,
            deadline: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <input
          type="number"
          placeholder="Hours"
          min="0"
          value={form.estimatedHours}
          onChange={(e) =>
            setForm({
              ...form,
              estimatedHours: e.target.value,
            })
          }
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        <input
          type="number"
          placeholder="Minutes"
          min="0"
          max="59"
          value={form.estimatedMinutes}
          onChange={(e) =>
            setForm({
              ...form,
              estimatedMinutes: e.target.value,
            })
          }
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <button
        onClick={submit}
        style={{
          width: "100%",
          padding: "12px",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;