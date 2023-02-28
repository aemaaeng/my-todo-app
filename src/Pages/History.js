import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

const DivBackground = styled.div`
  background-color: #ffffff;
  height: 680px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  .react-calendar {
    border: 1px solid #cccccc;
    border-radius: 7px;
  }

  .react-calendar__navigation button {
    font-size: 1rem;
    font-weight: 700;
  }

  .react-calendar__tile--now {
    background-color: #bdf1f6;
    color: black;
  }

  .react-calendar__tile--now:hover {
    background-color: #bdf1f6;
    color: black;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #aaaaaa;
  }

  abbr[title] {
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;

const History = () => {
  return (
    <>
      <Header name={"캘린더"}></Header>
      <DivBackground>
        <Container>
          <Calendar
            formatDay={(locale, date) => moment(date).format("DD")}
            calendarType="US"
          />
        </Container>
      </DivBackground>
    </>
  );
};

export default History;
