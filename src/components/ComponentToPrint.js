import { forwardRef } from "react";

const ComponentToPrint = forwardRef(function ComponentToPrint(
  { personalInfo },
  ref
) {
  return (
    <div ref={ref} className="printContainer">
      <h1>{personalInfo.fname}</h1>
      <h1>{personalInfo.lname}</h1>
      <h3>{personalInfo.number}</h3>
      <h3>{personalInfo.email}</h3>
      <h4>{personalInfo.address}</h4>
      <h4>{personalInfo.bio}</h4>
    </div>
  );
});

export default ComponentToPrint;
