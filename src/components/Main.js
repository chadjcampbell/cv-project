import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function Main({ addPersonalInfo, addExperience }) {
  return (
    <div className="Main">
      <Personal addPersonalInfo={addPersonalInfo} />
      <hr />
      <Experience addExperience={addExperience} />
      <hr />
      <Education />
    </div>
  );
}

export default Main;
