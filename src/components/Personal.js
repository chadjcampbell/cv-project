function Personal({ personalInfo, changePersonalInfo }) {
  function handleChange(event) {
    changePersonalInfo(event.target.name, event.target.value);
  }
  return (
    <div className="Personal section">
      <h2>Personal Info</h2>
      <form autoComplete="on">
        <input
          value={personalInfo.fname}
          onChange={handleChange}
          placeholder="First Name"
          type="text"
          name="fname"
        ></input>
        <input
          value={personalInfo.lname}
          onChange={handleChange}
          placeholder="Last Name"
          type="text"
          name="lname"
        ></input>
        <input
          value={personalInfo.address}
          onChange={handleChange}
          placeholder="Address"
          type="text"
          name="address"
        ></input>
        <input
          value={personalInfo.number}
          onChange={handleChange}
          placeholder="Phone Number"
          type="tel"
          name="number"
        ></input>
        <input
          value={personalInfo.email}
          onChange={handleChange}
          placeholder="E-mail"
          type="email"
          name="email"
        ></input>
        <textarea
          value={personalInfo.bio}
          onChange={handleChange}
          placeholder="Bio"
          name="bio"
        ></textarea>
      </form>
    </div>
  );
}

export default Personal;
