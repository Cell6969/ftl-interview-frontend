import React, { useState } from "react";
import MonthPicker from "../MonthPicker";
import "react-datepicker/dist/react-datepicker.css";
const PageHeaderMonth = () => {
  const [toggleDateMonth1, setToggleDateMonth1] = useState(false);
  const [toggleDateMonth2, setToggleDateMonth2] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
        <div
          className="position-relative date-picker-field"
          onClick={() => setToggleDateMonth1(!toggleDateMonth1)}
        >
          <MonthPicker
            toggleDateRange={toggleDateMonth1}
            setToggleDateRange={setToggleDateMonth1}
          />
        </div>
      </div>
    </>
  );
};

export default PageHeaderMonth;
