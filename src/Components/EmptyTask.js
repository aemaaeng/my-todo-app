import React from "react";
import styled from "styled-components";
import { Empty } from "antd";

const StyledEmpty = styled(Empty)`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: gray;
`;

// 할 일이 없을 때 보여질 컴포넌트
const EmptyTask = () => {
  return <StyledEmpty description="할 일이 없습니다." />;
};

export default EmptyTask;
