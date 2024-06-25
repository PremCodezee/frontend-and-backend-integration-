import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [series, setSeries] = useState([]);

  const handleSeries = async () => {
    try {
      const response = await axios.get("/api/amazon-series");
      setSeries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSeries();
  });

  return (
    <>
      <h1>Backend And Frontend</h1>

      {series.map((v, i) => (
        <div key={i}>
          <h2>{v.name}</h2>
        </div>
      ))} 
    </>
  );
}

export default App;
