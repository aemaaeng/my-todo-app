import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import EmptyTask from "../Components/EmptyTask";
import settings from "../settings-5-512.png";

const DivBackground = styled.div`
  background-color: #ffffff;
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Calendar = () => {
  return (
    <>
      <Header name={"캘린더"}></Header>
      <DivBackground>
        <EmptyTask image={settings} desc="업데이트 예정" />
      </DivBackground>
    </>
  );
};

export default Calendar;
