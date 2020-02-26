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
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;

  .Title {
    margin-bottom: 5px;
    font-weight: 900;
  }

  .Role {
    font-size: 23px;
    font-weight: 900;
  }
`;

export default () => {
  return (
    <About>
      <Header>About me</Header>
      <InfoSection>
        <InfoBox>
          <div className="Title">Democracy</div>
          <div className="Role">Web Developer</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with
          </p>
        </InfoBox>
        <InfoBox>
          <div className="Title">Democracy</div>
          <div className="Role">Web Developer</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with
          </p>
        </InfoBox>
        <InfoBox>
          <div className="Title">Democracy</div>
          <div className="Role">Web Developer</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with
          </p>
        </InfoBox>
      </InfoSection>
    </About>
  );
};
