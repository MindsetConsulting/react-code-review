import React, { useState } from "react";
import "./App.css";
import foods from "./list";

function App() {
  const [c, setC] = useState(0);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "orange",
            fontSize: "5rem",
            fontFamily: "Impact, sans-serif",
            transform: "rotate(-5deg)",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          My Terrible App
        </h1>
        <h2>{c}</h2>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "50%",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => setC(c - 1)}
        >
          -
        </button>

        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "50%",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => setC(c + 1)}
        >
          +
        </button>

        <button
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "50%",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => {
            setC(c - 1);
            setC(c - 1);
          }}
        >
          -2
        </button>

        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "50%",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => {
            setC(c + 1);
            setC(c + 1);
          }}
        >
          +2
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "grey",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5%",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          onClick={() => setC(0)}
        >
          Reset
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Food List</h2>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Flavor Rating</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.id}>
                <td>{food.foNa}</td>
                <td>{food.foCo}</td>
                <td>{food.foRa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
