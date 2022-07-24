import React from "react";

const FilterInput = ({ name, inputType, value, changeFilter }) => {
  return (
    <input
      type={inputType}
      name={name}
      placeholder={inputType === "text" ? `filter by ${name}` : ""}
      value={value}
      onChange={(e) => {
        const value =
          inputType === "checkBox" ? e.target.checked : e.target.value;
        changeFilter(e.target.name, value);
      }}
    />
  );
};

export default FilterInput;
