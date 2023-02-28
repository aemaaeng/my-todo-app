import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Calendar from "react-calendar";

const DivBackground = styled.div`
  background-color: #ffffff;
  height: 680px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const History = () => {
  return (
    <>
      <Header name={"캘린더"}></Header>
      <DivBackground>
        <Container>
          <Calendar />
        </Container>
      </DivBackground>
    </>
  );
};

export default History;
