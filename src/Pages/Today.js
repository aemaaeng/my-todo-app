import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import Task from "../Components/Task";

const DivContainer = styled.div`
  background-color: #ffffff;
  height: 680px;
`;

const DateIndicator = styled.h2`
  color: #0245a3;
  padding: 2rem;
  font-size: 1.3rem;
`;

const InputContainer = styled.section`
  margin-left: 2rem;

  input {
    width: 290px;
    height: 40px;
    padding-left: 10px;
    border: 1.2px solid gray;
    border-radius: 10px;
    margin-right: 5px;
    font-weight: bold;
    font-size: 0.9rem;

    &:focus {
      /* 기존 경계선 제거 */
      outline: none;
      border: 1.7px solid black;
    }
  }
`;

const SubmitButton = styled.button`
  color: #ffffff;
  font-weight: bold;
  background-color: #0245a3;
  padding: 5px 17px;
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: #00347c;
  }
`;

const TaskContainer = styled.ul`
  margin: 2rem;
`;

const Today = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  let parsedDate = ` ${year}년 ${month}월 ${day}일`;

  return (
    <>
      <Header name={"오늘"} />
      <DivContainer>
        <DateIndicator>
          <i class="fa-solid fa-location-pin"></i>
          {parsedDate}
        </DateIndicator>
        {/* 여기 안에 인풋 컨테이너와 태스크 컨테이너 들어가야 함 */}
        <InputContainer>
          <input type="text" placeholder="할 일 입력"></input>
          <SubmitButton>추가</SubmitButton>
        </InputContainer>
        <TaskContainer>
          <Task />
        </TaskContainer>
      </DivContainer>
    </>
  );
};

export default Today;
