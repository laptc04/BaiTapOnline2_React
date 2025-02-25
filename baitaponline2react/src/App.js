import { useState } from "react";
import ExpandingCircleCanvas from "./components/bai1";
import GradientBarCanvas from "./components/bai2";
import "./App.css";

function App() {
  const [selectedCanvas, setSelectedCanvas] = useState("bai1");

  return (
    <div>
      <nav style={styles.navbar}>
        <button
          style={
            selectedCanvas === "bai1" ? styles.activeButton : styles.button
          }
          onClick={() => setSelectedCanvas("bai1")}
        >
          Bài 1
        </button>
        <button
          style={
            selectedCanvas === "bai2" ? styles.activeButton : styles.button
          }
          onClick={() => setSelectedCanvas("bai2")}
        >
          Bài 2
        </button>
      </nav>

      <div style={{ marginTop: "60px" }}>
        {selectedCanvas === "bai1" ? (
          <ExpandingCircleCanvas />
        ) : (
          <GradientBarCanvas />
        )}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#333",
    padding: "11px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    zIndex: 1000,
    margin: 0,
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  activeButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ff4500",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default App;
