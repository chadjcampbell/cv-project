import { useState } from "react";

function ExpSection({ index, handleDelete }) {
  return (
    <section key={index} className="expSection">
      <button onClick={() => handleDelete(index)} className="deleteBtn">
        Delete
      </button>
      <form autoComplete="off">
        <input placeholder="Company Name" type="text" name="company"></input>
        <div className="dates">
          <label htmlFor="start">Start date:</label>
          <input type="date" id="start" name="start"></input>
        </div>
        <div className="dates">
          <label htmlFor="end">End date:</label>
          <input type="date" id="end" name="end"></input>
        </div>
        <input placeholder="Last Title" type="text" name="title"></input>
        <textarea placeholder="Job Description"></textarea>
      </form>
    </section>
  );
}

function Experience() {
  const [inputs, setInputs] = useState([]);
  function handleDelete(key) {
    setInputs(inputs.filter((inputs) => inputs.key !== key));
  }
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <div className="expContainer">
        {inputs.map((ExpSection, index) => (
          <ExpSection key={index} handleDelete={handleDelete} />
        ))}
      </div>
      <button
        onClick={() => setInputs([...inputs, ExpSection])}
        className="addBtn"
      >
        Add Another Company
      </button>
    </div>
  );
}

export default Experience;
