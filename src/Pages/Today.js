import { React, useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import Task from "../Components/Task";

const DivContainer = styled.div`
  background-color: #ffffff;
  height: 680px;
  overflow: hidden;
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
  height: 490px;
  overflow: auto;
`;

const Today = () => {
  const [tasks, setTask] = useState([]);
  const [taskContent, setTaskContent] = useState("");

  // * 문제점! 라우터로 왔다갔다하면 써뒀던 내용이 날아가버린다. 방법 찾아보기
  // * 엔터 키 이벤트를 추가했는데 값이 두 번씩 추가된다.. 왜 이러지??

  // 구현해보고 싶은 기능
  // * 추가하고 나서는 input 지우기
  // * input이 비었을 때에는 추가되지 않도록
  // * 일정 전체 삭제 기능

  // 인풋 핸들러
  const inputHandler = (event) => {
    setTaskContent(event.target.value);
  };

  // 추가 버튼 핸들러
  const addButtonHandler = () => {
    const task = {
      id: tasks.length,
      date: new Date(),
      content: taskContent,
    };
    setTask([task, ...tasks]);
  };

  // 엔터 키 핸들러
  const enterKeyHandler = (event) => {
    if (event.key === "Enter") {
      addButtonHandler();
    }
  };

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
          <input
            type="text"
            placeholder="할 일 입력"
            onChange={inputHandler}
            onKeyUp={enterKeyHandler}
          />
          <SubmitButton onClick={addButtonHandler}>추가</SubmitButton>
        </InputContainer>
        <TaskContainer>
          {tasks.map((el) => (
            <Task key={el.id} task={el} setTask={setTask} />
          ))}
        </TaskContainer>
      </DivContainer>
    </>
  );
};

export default Today;
