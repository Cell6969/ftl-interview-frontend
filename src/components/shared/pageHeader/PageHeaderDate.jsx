import React, { useState } from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import Checkbox from "@/components/shared/Checkbox";
import { Link } from "react-router-dom";
import DateRange from "../DateRange";

const filterItems = ["Role", "Team", "Email", "Member", "Recommendation"];

const PageHeaderDate = () => {
  const [toggleDateRange, setToggleDateRange] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
        <div
          className="position-relative date-picker-field"
          onClick={() => setToggleDateRange(!toggleDateRange)}
        >
          <DateRange
            toggleDateRange={toggleDateRange}
            setToggleDateRange={setToggleDateRange}
          />
        </div>
      </div>
    </>
  );
};

export default PageHeaderDate;
