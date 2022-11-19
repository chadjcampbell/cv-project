import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function Main({ addPersonalInfo }) {
  return (
    <div className="Main">
      <Personal addPersonalInfo={addPersonalInfo} />
      <hr />
      <Experience />
      <hr />
      <Education />
    </div>
  );
}

export default Main;
