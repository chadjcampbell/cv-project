function Personal() {
  return (
    <div className="Personal section">
      <h2>Personal Info</h2>
      <form autoComplete="on">
        <input placeholder="First Name" type="text" name="fname"></input>
        <input placeholder="Last Name" type="text" name="lname"></input>
        <input placeholder="Address" type="text" name="address"></input>
        <input placeholder="Phone Number" type="tel"></input>
        <input placeholder="E-mail" type="email"></input>
        <textarea placeholder="Bio"></textarea>
      </form>
    </div>
  );
}

export default Personal;
