import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/Preview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});

  function addPersonalInfo(key, info) {
    setPersonalInfo({ ...personalInfo, [`${key}`]: info });
  }

  return (
    <div className="App">
      <Header />
      <Main addPersonalInfo={addPersonalInfo} />
      <Preview personalInfo={personalInfo} />
    </div>
  );
}

export default App;
