function Education() {
  return (
    <div className="Education section">
      <h2>Education</h2>
      <section className="eduSection">
        <button className="deleteBtn">Delete</button>
        <form autoComplete="off">
          <input placeholder="School Name" type="text" name="company"></input>
          <input placeholder="Address" type="text" name="address"></input>
          <input placeholder="Degree Type" type="text" name="degree"></input>
          <input placeholder="Phone Number" type="tel"></input>
          <textarea placeholder="Areas of Study"></textarea>
        </form>
      </section>
      <button className="addBtn">Add Another School</button>
    </div>
  );
}

export default Education;
