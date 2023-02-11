import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 66px;
  line-height: 66px;
  border-bottom: 1px solid #aaaaaa;
  background-color: #ffffff;
`;

const Title = styled.h1`
  text-align: center;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <Title>{props.name}</Title>
    </HeaderContainer>
  );
};

export default Header;
