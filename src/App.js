import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/Preview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [experience, setExperience] = useState([]);

  function addPersonalInfo(key, info) {
    setPersonalInfo({ ...personalInfo, [`${key}`]: info });
  }

  function addExperience(index, key, info) {
    let newExperience = { ...experience[index], [`${key}`]: info };
    setExperience([...experience, newExperience]);
  }

  return (
    <div className="App">
      <Header />
      <Main addPersonalInfo={addPersonalInfo} addExperience={addExperience} />
      <Preview personalInfo={personalInfo} experience={experience} />
    </div>
  );
}

export default App;
