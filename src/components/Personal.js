function Personal({ changePersonalInfo }) {
  function handleChange(event) {
    changePersonalInfo(event.target.name, event.target.value);
  }
  return (
    <div className="Personal section">
      <h2>Personal Info</h2>
      <form autoComplete="on">
        <input
          onChange={handleChange}
          placeholder="First Name"
          type="text"
          name="fname"
        ></input>
        <input
          onChange={handleChange}
          placeholder="Last Name"
          type="text"
          name="lname"
        ></input>
        <input
          onChange={handleChange}
          placeholder="Address"
          type="text"
          name="address"
        ></input>
        <input
          onChange={handleChange}
          placeholder="Phone Number"
          type="tel"
          name="number"
        ></input>
        <input
          onChange={handleChange}
          placeholder="E-mail"
          type="email"
          name="email"
        ></input>
        <textarea
          onChange={handleChange}
          placeholder="Bio"
          name="bio"
        ></textarea>
      </form>
    </div>
  );
}

export default Personal;
