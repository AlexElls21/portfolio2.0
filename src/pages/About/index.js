import React from "react";

import styled from "styled-components";

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  left: 0px;
`;

const Header = styled.div`
  font-size: 25px;
  margin-bottom: 60px;
  margin-left: 75px;
  border-bottom: 3px solid #ea0f36;
  padding-bottom: 20px;
  width: 200px;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const InfoBox = styled.div`
  background: #ea0f36;
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  box-shadow: 0px 20px 20px #adadad;

  .Title {
    margin-bottom: 15px;
    font-weight: 900;
  }

  .Role {
    font-size: 23px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  .Text {
    line-height: 1.4;
  }
`;

export default () => {
  return (
    <About>
      <Header>About me</Header>
      <InfoSection>
        <InfoBox id="1">
          <div className="Title">Democracy</div>
          <div className="Role">Web Developer</div>
          <p className="Text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </InfoBox>
        <InfoBox id="2">
          <div className="Title">Democracy</div>
          <div className="Role">Web Developer</div>
          <p className="Text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </InfoBox>
        <InfoBox id="3">
          <div className="Title">Democracy</div>
          <div className="Role">Web Developer</div>
          <p className="Text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </InfoBox>
      </InfoSection>
    </About>
  );
};
