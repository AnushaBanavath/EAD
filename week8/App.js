import React, { useState } from "react";
import Student from "./props_ex.js";

function App() {
  const [showStudent, setShowStudent] = useState(false);

  return (
    <div>
      {!showStudent ? (
        <div>
          <h1>Welcome to React</h1>
          {/* Add a button or link to show student */}
          <button onClick={() => setShowStudent(true)}>
            Show Student Details
          </button>
        </div>
      ) : (
        <div>
          <Student name="Anusha" age={20} college="CBIT" />
          <button onClick={() => setShowStudent(false)}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
