import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

function Preview({ personalInfo, experience }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="previewContainer">
      <div className="Preview">
        <h3 className="previewHeader">Print Preview</h3>
        <ComponentToPrint
          personalInfo={personalInfo}
          experience={experience}
          ref={componentRef}
        />
      </div>
      <button className="printBtn" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}

export default Preview;
