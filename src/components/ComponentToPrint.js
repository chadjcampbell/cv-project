import { forwardRef } from "react";

const ComponentToPrint = forwardRef(function ComponentToPrint(
  { personalInfo, experience },
  ref
) {
  return (
    <div ref={ref} className="printContainer">
      <h1>{personalInfo.fname}</h1>
      <h1>{personalInfo.lname}</h1>
      <h3>{personalInfo.number}</h3>
      <h3>{personalInfo.email}</h3>
      <h4>{personalInfo.address}</h4>
      <h5>{personalInfo.bio}</h5>
      <h4>{experience}</h4>
    </div>
  );
});

export default ComponentToPrint;
