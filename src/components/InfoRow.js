import React from "react";

function InfoRow(props) {
  const { title, value } = props;
  return (
    <li>
      <span>{title}: </span> {value}
    </li>
  );
}

export default InfoRow;
