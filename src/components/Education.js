function Education({ education, addEducation, deleteEducation }) {
  return (
    <div className="Education section">
      <h2>Education</h2>
      {education.map((edu) => (
        <section key={edu.id} className="eduSection">
          <button onClick={() => deleteEducation(edu.id)} className="deleteBtn">
            Delete
          </button>
          <form autoComplete="off">
            <input placeholder="School Name" type="text" name="school"></input>
            <div className="dates">
              <label htmlFor="start">Start date:</label>
              <input type="date" id="start" name="start"></input>
            </div>
            <div className="dates">
              <label htmlFor="end">End date:</label>
              <input type="date" id="end" name="end"></input>
            </div>
            <input placeholder="Degree Type" type="text" name="degree"></input>
            <textarea name="study" placeholder="Areas of Study"></textarea>
          </form>
        </section>
      ))}
      <button onClick={addEducation} className="addBtn">
        Add Another School
      </button>
    </div>
  );
}

export default Education;
