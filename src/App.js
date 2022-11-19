import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Preview from "./components/Preview";

const initialPersonalInfo = {
  fname: "",
  lname: "",
  address: "",
  number: "",
  email: "",
  bio: "",
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

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
