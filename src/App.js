import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/Preview";
import uuid from "react-uuid";

function App() {
  function newExperience() {
    return {
      id: uuid(),
      company: "",
      start: "",
      end: "",
      title: "",
      jobDesc: "",
    };
  }
  const [personalInfo, setPersonalInfo] = useState({});
  const [experience, setExperience] = useState([newExperience()]);

  function changePersonalInfo(key, info) {
    setPersonalInfo({ ...personalInfo, [`${key}`]: info });
  }

  function addExperience() {
    setExperience([...experience, newExperience()]);
  }

  function deleteExperience(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  function changeExperience(id, key, info) {
    const newState = experience.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [`${key}`]: info };
      }
      return exp;
    });
    setExperience(newState);
  }

  return (
    <div className="App">
      <Header />
      <Main
        changePersonalInfo={changePersonalInfo}
        experience={experience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        changeExperience={changeExperience}
      />
      <Preview personalInfo={personalInfo} experience={experience} />
    </div>
  );
}

export default App;
