import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Side = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 210px;
  padding-left: 13px;
  padding-top: 50px;
  background-color: #8fbaf3;
  flex: 1;

  li {
    list-style: none;
    margin: 2rem;
    font-size: 1.2rem;
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
    { index: 1, name: "캘린더", path: "/calendar" },
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
