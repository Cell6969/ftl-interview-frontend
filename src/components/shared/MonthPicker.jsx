import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import {
  selectMonthPicker,
  setMonthPicker,
} from "../../store/slice/monthPickerSlice";

const MonthPicker = ({ toggleDateRange, setToggleDateRange }) => {
  const dispatch = useDispatch();
  const { month, year } = useSelector(selectMonthPicker);

  const [state, setState] = useState(new Date(`${year}-${month + 1}`));

  const handlePropagation = (event) => {
    event.stopPropagation();
  };

  const handleApplyMonth = () => {
    console.log(state.getMonth(), state.getFullYear());
    dispatch(
      setMonthPicker({
        month: state.getMonth(),
        year: state.getFullYear(),
      })
    );
    setToggleDateRange(false);
  };

  return (
    <>
      <span>{`${format(state, "MMMM, yyyy")}`}</span>
      {toggleDateRange && (
        <div onClick={handlePropagation} className="bg-white date-range-labels">
          <div className="date-dropdown" style={{ marginRight: "110px" }}>
            <DatePicker
              inline
              showMonthYearPicker
              selected={state}
              onChange={(date) => setState(date)}
              showPopperArrow={false}
              className="form-control"
            />
            <button
              className="applyBtn btn btn-primary btn-sm"
              onClick={handleApplyMonth}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MonthPicker;
