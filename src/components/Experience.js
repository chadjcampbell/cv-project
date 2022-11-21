import { useState } from "react";

function ExpSection({ id, handleDelete }) {
  id += 1;
  return (
    <section id={id} className="expSection">
      <button
        onClick={(event) => handleDelete(event, id)}
        className="deleteBtn"
      >
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
  const [inputs, setInputs] = useState([ExpSection]);
  function handleDelete(event, id) {
    let num = event.target.parentNode.id;
    setInputs(inputs.filter((input) => input.id !== num));
  }
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <div className="expContainer">
        {inputs.map((ExpSection, id) => (
          <ExpSection key={id} id={id} handleDelete={handleDelete} />
        ))}
      </div>
      <button
        onClick={() => {
          console.log(inputs);
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
