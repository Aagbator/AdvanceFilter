import React from "react";

const Event = ({ name, city, minPrice }) => {
  return (
    <div style={{ borderBottom: "1px solid #111", padding: "10px" }}>
      <div>{name}</div>
      <div>{city}</div>
      <div>{minPrice}</div>
    </div>
  );
};

export default Event;
