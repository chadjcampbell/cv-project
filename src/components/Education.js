function Education() {
  return (
    <div className="Education section">
      <h2>Education</h2>
      <section className="eduSection">
        <button className="deleteBtn">Delete</button>
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
          <textarea placeholder="Areas of Study"></textarea>
        </form>
      </section>
      <button className="addBtn">Add Another School</button>
    </div>
  );
}

export default Education;
