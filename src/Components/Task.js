import { React, useState } from "react";
import styled from "styled-components";

// 체크박스 체크 여부에 따른 조건부 렌더링 구현 필요

const Taskli = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  height: 22px;
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
  &.checked {
    color: gray;
  }
`;

// 수정 시 보이는 input 칸
const EditInput = styled.input`
  width: 290px;
  color: gray;
  font-weight: bold;
  font-size: 1rem;
  padding: 3px 0px 3px 3px;
  border: solid gray;
  border-width: 0px 0px 1px 0px;
  outline: none;
  &:focus {
    border-bottom: 2px solid #8fbaf3;
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

const Task = ({ task, setTask }) => {
  // 수정가능모드인지 판별하는 state
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInput, setEditInput] = useState(task.content);

  // 데이터 로딩
  const fetchData = () => {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTask(data);
      })
      .catch((err) => console.error("Error", err));
  };

  // 더블클릭 시 상태를 변경하는 함수
  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // 수정될 input 핸들러
  const handleEditChange = (event) => {
    setEditInput(event.target.value);
  };

  // 서버에도 patch 요청 보내기
  const handleSendEdit = () => {
    if (editInput.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }

    fetch(`http://localhost:3001/todos/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        updatedAt: new Date(),
        content: editInput,
      }),
    })
      .then(() => fetchData())
      .catch((error) => console.error("Error", error));

    setEditInput(editInput);
    setIsEditMode(!isEditMode);
  };

  // enter 키 핸들러
  const handleEnterKey = (event) => {
    if (event.nativeEvent.isComposing === true) {
      return;
    }

    if (event.key === "Enter") {
      handleSendEdit();
    }
  };

  // 삭제 버튼 핸들러
  const deleteButtonHandler = () => {
    // console.log("clicked!");
    // 서버에서 지우고 변경사항이 적용된 데이터로 다시 불러오기
    fetch(`http://localhost:3001/todos/${task.id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetch("http://localhost:3001/todos")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTask(data);
          });
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <Taskli>
      <Checkbox type="checkbox"></Checkbox>
      {/* isChecked의 상태에 따라 클래스 추가 */}
      {isEditMode ? (
        <EditInput
          value={editInput}
          onChange={handleEditChange}
          onKeyDown={handleEnterKey}
          onBlur={handleSendEdit}
        />
      ) : (
        <TaskContent onDoubleClick={handleEditMode}>{task.content}</TaskContent>
      )}
      <Delete onClick={deleteButtonHandler}>
        <i className="fa-solid fa-x"></i>
      </Delete>
    </Taskli>
  );
};

export default Task;
