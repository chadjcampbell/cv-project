function Header({ resetForm, loadExample }) {
  return (
    <header className="Header">
      <h1>Resume Builder</h1>
      <button className="resetBtn" onClick={resetForm}>
        Reset All
      </button>
      <button className="loadExample" onClick={loadExample}>
        Load Example
      </button>
    </header>
  );
}

export default Header;
