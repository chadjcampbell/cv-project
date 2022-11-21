import { useState } from "react";

function ExpSection({ index, handleDelete, addExperience }) {
  function handleChange(index, event) {
    addExperience(index, event.target.name, event.target.value);
  }
  return (
    <section className="expSection">
      <button onClick={() => handleDelete(index)} className="deleteBtn">
        Delete
      </button>
      <form autoComplete="off">
        <input
          onChange={handleChange}
          placeholder="Company Name"
          type="text"
          name="company"
        ></input>
        <div className="dates">
          <label htmlFor="start">Start date:</label>
          <input
            onChange={handleChange}
            type="date"
            id="start"
            name="start"
          ></input>
        </div>
        <div className="dates">
          <label htmlFor="end">End date:</label>
          <input
            onChange={handleChange}
            type="date"
            id="end"
            name="end"
          ></input>
        </div>
        <input
          onChange={handleChange}
          placeholder="Last Title"
          type="text"
          name="title"
        ></input>
        <textarea
          onChange={handleChange}
          placeholder="Job Description"
          name="jobDesc"
        ></textarea>
      </form>
    </section>
  );
}

function Experience({ addExperience }) {
  const [inputs, setInputs] = useState([]);
  function handleDelete(index) {
    let newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  }
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <div className="expContainer">
        {inputs.map((ExpSection, index) => (
          <ExpSection
            addExperience={addExperience}
            key={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setInputs([...inputs, ExpSection]);
        }}
        className="addBtn"
      >
        Add Another Company
      </button>
    </div>
  );
}

export default Experience;
