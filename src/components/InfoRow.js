import React from "react";
import "./../style/InfoRow.scss";

function InfoRow(props) {
  const { title, value } = props;
  return (
    <li className='InfoRow'>
      <span>{title}: </span> {value}
    </li>
  );
}

export default InfoRow;
