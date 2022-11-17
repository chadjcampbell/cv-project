import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function Preview() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="Preview" ref={componentRef}>
        <h2>This is a test </h2>
      </div>
      <button className="printBtn" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}

export default Preview;
