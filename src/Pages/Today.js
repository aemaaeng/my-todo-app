import { React, useEffect, useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import Task from "../Components/Task";
import EmptyTask from "../Components/EmptyTask";

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
      border: 1.7px solid #0245a3;
      box-shadow: 0 0 5px #bdf1f6;
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
  // const [isLoading, setIsLoading] = useState(false);

  // * 문제점! 라우터로 왔다갔다하면 써뒀던 내용이 날아가버린다. 방법 찾아보기
  // * 엔터 키 이벤트를 추가했는데 값이 두 번씩 추가된다.. 왜 이러지??
  // ** -> 이거는 한글이 조합문자라서 생긴 문제였다. 근데 나는 약간 다르게 작동함..

  // 구현해보고 싶은 기능
  // * 추가하고 나서는 input칸에 작성되어있던 텍스트 지우기 ✓
  // * input이 비었을 때에는 추가되지 않도록
  // * 일정 전체 삭제 기능
  // * 서버? ✔️ json-server 이용

  // 초기 데이터 불러오기?
  const fetchData = () => {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setIsLoading(false);
        setTask(data);
        console.log(tasks);
      })
      .catch((err) => console.error("Error", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 인풋 핸들러
  const inputHandler = (event) => {
    setTaskContent(event.target.value);
    // console.log(event.nativeEvent.isComposing);
  };

  // 추가 버튼 핸들러
  const addButtonHandler = () => {
    // id는 json-server에서 자동으로 넣어준다.
    const task = {
      date: new Date(),
      content: taskContent,
    };

    // 서버에 반영하기 -> custom hook 사용 고려해보자
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then(() => fetchData())
      .catch((error) => console.error("Error", error));

    // 이렇게 상태로 업데이트하는거 말고 진짜 서버에서 불러오는 건 어떻게 하지...?
    // custom hook으로 해야 하나?
    // setTask([task, ...tasks]);
    setTaskContent("");
  };

  // 엔터 키 핸들러
  const enterKeyHandler = (event) => {
    if (event.nativeEvent.isComposing === true) {
      return;
    }
    if (event.key === "Enter") {
      // console.log(event.key, event.nativeEvent.isComposing);
      addButtonHandler();
    }
    // 한글 입력 후 엔터를 누르면 false만 두 번 출력된다....
    // onKeyPress와 keyCode는 권장되지 않음
    // if (event.keyCode === 13) {
    //   addButtonHandler();
    // }
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
          <i className="fa-solid fa-location-pin"></i>
          {parsedDate}
        </DateIndicator>
        <InputContainer>
          <input
            type="text"
            value={taskContent}
            placeholder="할 일 입력"
            onChange={inputHandler}
            onKeyDown={enterKeyHandler}
          />
          <SubmitButton onClick={addButtonHandler}>추가</SubmitButton>
        </InputContainer>
        <TaskContainer>
          {tasks.length === 0 ? (
            <EmptyTask />
          ) : (
            tasks.map((el) => (
              <Task key={el.id} task={el} tasks={tasks} setTask={setTask} />
            ))
          )}
        </TaskContainer>
      </DivContainer>
    </>
  );
};

export default Today;
