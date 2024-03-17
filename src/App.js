import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  // Example GET API
  async function getData() {
    try {
      const response = await axios.get(
        "https://fa1wfozoii.execute-api.ap-south-1.amazonaws.com/dev/test"
      );
      setData(response.data); // Return data fetched from the API
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(error);
      throw error; // Throw error to handle it appropriately
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>{data.success}</div>
      </header>
    </div>
  );
}

export default App;
