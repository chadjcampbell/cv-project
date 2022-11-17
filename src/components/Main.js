import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function Main() {
  return (
    <div className="Main">
      <Personal />
      <hr />
      <Experience />
      <hr />
      <Education />
    </div>
  );
}

export default Main;
