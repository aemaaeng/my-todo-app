import React from "react";
import styled from "styled-components";
import { Empty } from "antd";

const StyledEmpty = styled(Empty)`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: gray;
`;

const EmptyTask = (props) => {
  return <StyledEmpty image={props.image} description={props.desc} />;
};

export default EmptyTask;
