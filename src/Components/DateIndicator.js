import React from "react";
import styled from "styled-components";

const Styledh2 = styled.h2`
  color: #0245a3;
  padding: 2rem;
  font-size: 1.3rem;
`;

const DateIndicator = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  let parsedDate = ` ${year}년 ${month}월 ${day}일`;

  return (
    <Styledh2>
      <i className="fa-solid fa-location-pin"></i>
      {parsedDate}
    </Styledh2>
  );
};

export default DateIndicator;
