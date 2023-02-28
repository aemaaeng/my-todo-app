import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

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

  .isFocused {
    color: #0245a3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { index: 0, name: "오늘 할 일", path: "/" },
    { index: 1, name: "캘린더", path: "/history" },
    { index: 2, name: "제작자", path: "/developer" },
  ];

  return (
    <Side>
      <ul>
        {menuArr.map((menu) => {
          const isFocused = currentTab === menu.index ? "isFocused" : "";
          return (
            <StyledLink to={menu.path} key={menu.index}>
              <li
                className={isFocused}
                onClick={() => setCurrentTab(menu.index)}
              >
                {menu.name}
              </li>
            </StyledLink>
          );
        })}
      </ul>
    </Side>
  );
};

export default Sidebar;
