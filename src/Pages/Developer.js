import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { GithubOutlined, LinkOutlined, MailOutlined } from "@ant-design/icons";

const DivBackground = styled.div`
  background-color: #ffffff;
  height: 680px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  border-radius: 70%;
  width: 180px;
  margin: 10px;
`;

const Contents = styled.div`
  /* border: 1px solid blue; */
  font-size: 1.2rem;
  font-weight: bold;
  color: #454545;
`;

const Description = styled.div`
  margin-top: 30px;
  /* border: 1px solid red; */
`;

const Icons = styled.div`
  font-size: 2rem;
  a {
    margin: 0px 3px;
    text-decoration: none;
    color: black;
  }
`;

const Developer = () => {
  return (
    <>
      <Header name="제작자" />
      <DivBackground>
        <Contents>
          <StyledImg src="https://avatars.githubusercontent.com/u/78579776?v=4"></StyledImg>
          <div>김혜민</div>
          <Description>
            <Icons>
              <a
                href="https://haruisshort.tistory.com/"
                target="_blank"
                title="blog"
              >
                <LinkOutlined alt="블로그 아이콘" />
              </a>
              <a
                href="https://github.com/aemaaeng"
                target="_blank"
                title="github"
              >
                <GithubOutlined alt="github 아이콘" />
              </a>
            </Icons>
          </Description>
        </Contents>
      </DivBackground>
    </>
  );
};

export default Developer;
