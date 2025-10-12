import React, { useState } from "react";
import Student from "./props_ex";
import Timer from "./timer";
import Counter from "./counter";

function App() {
  const [view, setView] = useState("home");

  return (
    <div>
      {view === "home" && (
        <div>
          <h1>Welcome to React</h1>
          <Timer />
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setView("student")}>
              Show Student Details
            </button>
            <button onClick={() => setView("counter")}>
              Show Counter
            </button>
          </div>
        </div>
      )}
      {view === "student" && (
        <div>
          <Student name="Anusha" age={20} college="CBIT" />
          <button onClick={() => setView("home")}>
            Back to Home
          </button>
        </div>
      )}
      {view === "counter" && (
        <div>
          <h1>Counter</h1>
          <Counter />
          <button onClick={() => setView("home")}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
