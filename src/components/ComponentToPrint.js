import { forwardRef } from "react";

const ComponentToPrint = forwardRef(function ComponentToPrint(props, ref) {
  return (
    <div ref={ref} className="printContainer">
      <h2>This is a test </h2>
    </div>
  );
});

export default ComponentToPrint;
