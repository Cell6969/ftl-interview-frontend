import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDateRange,
  setDataRange,
} from "../../store/slice/dateRangeSlice";

const DateRange = ({ toggleDateRange, setToggleDateRange }) => {
  const dispatch = useDispatch();
  const dateRange = useSelector(selectDateRange);

  const [state, setState] = useState([
    {
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      key: "selection",
    },
  ]);

  useEffect(() => {
    document
      .querySelectorAll(".rdrMonthName")[0]
      ?.classList?.add("rdrMonthNameFirst");
    document
      .querySelectorAll(".rdrMonthName")[1]
      ?.classList?.add("rdrMonthNameSecond");
  }, [toggleDateRange]);

  const handlePropagation = (event) => {
    event.stopPropagation();
  };

  const handleApplyDate = () => {
    dispatch(
      setDataRange({
        startDate: state[0].startDate,
        endDate: state[0].endDate,
      })
    );
    setToggleDateRange(false);
  };

  if (dateRange.error) {
    console.error(dateRange.error);
  }
  return (
    <>
      <span>
        {`${format(state[0].startDate, "MMM dd, yyyy")} - ${format(
          state[0].endDate,
          "MMM dd, yyyy"
        )}`}
      </span>
      {toggleDateRange && (
        <div onClick={handlePropagation} className="bg-white date-range-labels">
          <div className="date-dropdown" style={{ marginRight: "110px" }}>
            <DateRangePicker
              onChange={(item) => {
                setState([item.selection]);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              weekdayDisplayFormat="EEEEEE"
              showMonthAndYearPickers={true}
              staticRanges={[]} // Remove predefined static ranges
              inputRanges={[]} // Remove input ranges
            />
            <div className="action-btns">
              <span>{`${format(state[0].startDate, "MM/dd/yyyy")} - ${format(
                state[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              <button
                onClick={() => setToggleDateRange(false)}
                className="applyBtn btn btn-sm btn-danger"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyDate}
                className="applyBtn btn btn-sm btn-primary"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DateRange;
