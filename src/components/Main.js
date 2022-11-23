import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function Main({
  personalInfo,
  changePersonalInfo,
  experience,
  addExperience,
  deleteExperience,
  changeExperience,
  education,
  addEducation,
  deleteEducation,
  changeEducation,
}) {
  return (
    <div className="Main">
      <Personal
        personalInfo={personalInfo}
        changePersonalInfo={changePersonalInfo}
      />
      <hr />
      <Experience
        experience={experience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        changeExperience={changeExperience}
      />
      <hr />
      <Education
        education={education}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        changeEducation={changeEducation}
      />
    </div>
  );
}

export default Main;
