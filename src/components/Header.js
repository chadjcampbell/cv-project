function Header({ resetForm }) {
  return (
    <header className="Header">
      <h1>Resume Builder</h1>
      <button className="resetBtn" onClick={resetForm}>
        Reset All
      </button>
    </header>
  );
}

export default Header;
