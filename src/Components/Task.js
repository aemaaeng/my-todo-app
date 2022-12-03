import { React, useState } from "react";
import styled from "styled-components";

// 체크박스 체크 여부에 따른 조건부 렌더링 구현 필요

const Taskli = styled.li`
  list-style: none;
  display: flex;
  /* justify-content: space-between */
  align-items: center;
  /* width: 345px; */
  height: 22px;
  /* background-color: gray; */
  margin: 15px 0px;
`;

// 체크박스
const Checkbox = styled.input`
  &[type="checkbox"] {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border: 1px solid gray;
    border-radius: 3px;
    cursor: pointer;
    // 체크박스 강조 색상 지정
    accent-color: #0245a3;
  }
`;

// 할 일 텍스트
const TaskContent = styled.div`
  font-weight: bold;
  width: 290px;
  &.completed {
    color: gray;
  }
`;

// 삭제 버튼
const Delete = styled.div`
  cursor: pointer;
  color: #4f4f4f;
  border-style: none;
  text-align: center;
  font-size: 1rem;
  width: 20px;
  height: 20px;
  font-weight: lighter;
  margin-left: 10px;
`;

const Task = ({ task, tasks, setTask }) => {
  const [isChecked, SetIsChecked] = useState(false);

  // check 상태 핸들러

  // 삭제 버튼 핸들러
  const deleteButtonHandler = () => {
    console.log("clicked!");
    let filtered = tasks.filter((el) => el.id !== task.id);
    setTask(filtered);
  };

  return (
    <Taskli>
      <Checkbox type="checkbox"></Checkbox>
      {/* isChecked의 상태에 따라 클래스 추가 */}
      <TaskContent>{task.content}</TaskContent>
      <Delete onClick={deleteButtonHandler}>
        <i class="fa-solid fa-x"></i>
      </Delete>
    </Taskli>
  );
};

export default Task;
