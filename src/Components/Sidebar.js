import React from "react";
// 브라우저 라우터 불러와서 각 페이지로 링크해주기
import { Link } from "react-router-dom";
import styled from "styled-components";

const Side = styled.section`
  display: flex;
  flex-direction: column;
  width: 210px;
  padding-left: 13px;
  padding-top: 50px;
  height: 746px;
  background-color: #8fbaf3;

  li {
    list-style: none;
    margin: 1rem;
    font-size: 1.05rem;
    font-weight: bold;
    color: #ffffff;

    &:hover {
      color: #0245a3;
      transition: 0.2s;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

const Sidebar = () => {
  return (
    <Side>
      <ul>
        <StyledLink to="/">
          <li>오늘 할 일</li>
        </StyledLink>
        <StyledLink to="/calendar">
          <li>캘린더</li>
        </StyledLink>
        <StyledLink to="/developer">
          <li>제작자</li>
        </StyledLink>
      </ul>
    </Side>
  );
};

export default Sidebar;
