function Experience({ experience, addExperience, deleteExperience }) {
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <div className="expContainer">
        {experience.map((exp) => (
          <section key={exp.id} className="expSection">
            <button
              onClick={() => deleteExperience(exp.id)}
              className="deleteBtn"
            >
              Delete
            </button>
            <form autoComplete="off">
              <input
                placeholder="Company Name"
                type="text"
                name="company"
              ></input>
              <div className="dates">
                <label htmlFor="start">Start date:</label>
                <input type="date" id="start" name="start"></input>
              </div>
              <div className="dates">
                <label htmlFor="end">End date:</label>
                <input type="date" id="end" name="end"></input>
              </div>
              <input placeholder="Last Title" type="text" name="title"></input>
              <textarea placeholder="Job Description" name="jobDesc"></textarea>
            </form>
          </section>
        ))}
      </div>
      <button onClick={addExperience} className="addBtn">
        Add Another Company
      </button>
    </div>
  );
}

export default Experience;
