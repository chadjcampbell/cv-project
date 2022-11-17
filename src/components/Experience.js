function Experience() {
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <section className="expSection">
        <button className="deleteBtn">Delete</button>
        <form autoComplete="off">
          <input placeholder="Company Name" type="text" name="company"></input>
          <input placeholder="Last Title" type="text" name="ltitle"></input>
          <input placeholder="Address" type="text" name="address"></input>
          <input placeholder="Phone Number" type="tel"></input>
          <div className="dates">
            <label htmlFor="start">Start date:</label>
            <input type="date" id="start"></input>
          </div>
          <div className="dates">
            <label htmlFor="end">End date:</label>
            <input type="date" id="end"></input>
          </div>
          <textarea placeholder="Job Description"></textarea>
        </form>
      </section>
      <button className="addBtn">Add Another Company</button>
    </div>
  );
}

export default Experience;
