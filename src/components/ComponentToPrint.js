import { forwardRef } from "react";

const ComponentToPrint = forwardRef(function ComponentToPrint(
  { personalInfo, experience, education },
  ref
) {
  return (
    <div ref={ref} className="printContainer">
      <div className="personalPrintSection">
        <div className="namePrintContainer">
          <h2>{personalInfo.fname}</h2>
          <h2>{personalInfo.lname}</h2>
        </div>
        <h3>{personalInfo.number}</h3>
        <h3>{personalInfo.email}</h3>
        <h4>{personalInfo.address}</h4>
        <h5>{personalInfo.bio}</h5>
      </div>
      <hr />
      <h2 className="printH2">Experience</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="expPrintSection">
          <h3>{exp.company}</h3>
          <h4>{exp.title}</h4>
          <h5>
            {exp.start} - {exp.end}
          </h5>
          <p>{exp.jobDesc}</p>
        </div>
      ))}
      <h2 className="printH2">Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="expPrintSection">
          <h3>{edu.school}</h3>
          <h4>{edu.degree}</h4>
          <h5>
            {edu.start} - {edu.end}
          </h5>
          <p>{edu.study}</p>
        </div>
      ))}
    </div>
  );
});

export default ComponentToPrint;
