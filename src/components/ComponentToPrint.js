import { forwardRef } from "react";

const ComponentToPrint = forwardRef(function ComponentToPrint(
  { personalInfo, experience },
  ref
) {
  return (
    <div ref={ref} className="printContainer">
      <div className="personalPrintSection">
        <div className="namePrintContainer">
          <h1>{personalInfo.fname}</h1>
          <h1>{personalInfo.lname}</h1>
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
    </div>
  );
});

export default ComponentToPrint;
