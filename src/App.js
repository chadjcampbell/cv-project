import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/Preview";
import uuid from "react-uuid";
import example from "./example";

function App() {
  function newPersonal() {
    return {
      fname: "",
      lname: "",
      address: "",
      number: "",
      email: "",
      bio: "",
    };
  }
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

  function newEducation() {
    return {
      id: uuid(),
      school: "",
      start: "",
      end: "",
      degree: "",
      study: "",
    };
  }

  const [personalInfo, setPersonalInfo] = useState(newPersonal());
  const [experience, setExperience] = useState([newExperience()]);
  const [education, setEducation] = useState([newEducation()]);

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

  function addEducation() {
    setEducation([...education, newEducation()]);
  }

  function deleteEducation(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }

  function changeEducation(id, key, info) {
    const newState = education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [`${key}`]: info };
      }
      return edu;
    });
    setEducation(newState);
  }

  function resetForm() {
    setPersonalInfo(newPersonal());
    setExperience([newExperience()]);
    setEducation([newEducation()]);
  }

  function loadExample() {
    setPersonalInfo(example().personal);
    setExperience(example().experience);
    setEducation(example().education);
  }

  return (
    <div className="App">
      <Header resetForm={resetForm} loadExample={loadExample} />
      <Main
        personalInfo={personalInfo}
        changePersonalInfo={changePersonalInfo}
        experience={experience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        changeExperience={changeExperience}
        education={education}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        changeEducation={changeEducation}
      />
      <Preview
        personalInfo={personalInfo}
        experience={experience}
        education={education}
      />
    </div>
  );
}

export default App;
