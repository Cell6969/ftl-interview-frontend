import React from "react";
import getIcon from "@/utils/getIcon";

const Input = ({
  label,
  icon,
  type = "text",
  placeholder,
  labelId,
  name,
  value,
  setValue,
  centerLink,
}) => {
  const formatNumber = (value) => {
    // Convert to number and format with thousands separator and comma for decimals
    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      .replace(".", ",");
  };
  const handleChange = (event) => {
    if (type === "number" && event.target.value < 0) {
      event.target.value = 0;
    }
  };
  return (
    <div className="row mb-4 align-items-center">
      <div className="col-lg-4">
        <label htmlFor={labelId} className="fw-semibold fs-16">
          {label}:{" "}
        </label>
      </div>
      <div className="col-lg-8">
        <div className="input-group">
          <div className="input-group-text">{getIcon(icon)}</div>
          {centerLink ? (
            <div className="input-group-text">
              https://themeforest.net/user/theme_ocean
            </div>
          ) : (
            ""
          )}
          <input
            type={type}
            name={name}
            className="form-control"
            id={labelId}
            placeholder={placeholder}
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
