import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function Main({
  changePersonalInfo,
  experience,
  addExperience,
  deleteExperience,
  changeExperience,
}) {
  return (
    <div className="Main">
      <Personal changePersonalInfo={changePersonalInfo} />
      <hr />
      <Experience
        experience={experience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        changeExperience={changeExperience}
      />
      <hr />
      <Education />
    </div>
  );
}

export default Main;
