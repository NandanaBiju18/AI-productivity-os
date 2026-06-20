import { useState } from "react";
import axios from "axios";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    try {
      const endpoint = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const res = await axios.post(endpoint, form);

      localStorage.setItem("token", res.data.token);

      window.location.reload();
    } catch (err) {
      alert(
        err.response?.data?.error ||
          "Authentication failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1>🚀 AI Productivity OS</h1>

        <h2>
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {!isLogin && (
          <input
            placeholder="Name"
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
              marginBottom: "10px",
            }}
          />
        )}

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: "12px",
            background: "#111827",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p
          style={{
            marginTop: "15px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() =>
            setIsLogin(!isLogin)
          }
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Login;