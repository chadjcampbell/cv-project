function Experience() {
  return (
    <div className="Experience section">
      <h2>Experience</h2>
      <form autoComplete="off">
        <input placeholder="Company Name" type="text" name="company"></input>
        <input placeholder="Last Title" type="text" name="ltitle"></input>
        <input placeholder="Address" type="text" name="address"></input>
        <input placeholder="Phone Number" type="tel"></input>
        <textarea placeholder="Job Description"></textarea>
      </form>
    </div>
  );
}

export default Experience;
