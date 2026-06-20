import { useState, useEffect } from "react";

function Pomodoro() {
  const [seconds, setSeconds] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, seconds]);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>⏱️ Pomodoro Timer</h2>

      <h1>
        {Math.floor(seconds / 60)}:
        {(seconds % 60)
          .toString()
          .padStart(2, "0")}
      </h1>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button
        onClick={() => setRunning(false)}
        style={{ marginLeft: "10px" }}
      >
        Pause
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setSeconds(1500);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Pomodoro;