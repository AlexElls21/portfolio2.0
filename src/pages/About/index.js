import React from "react";

import styled from "styled-components";
import "./index.css";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  DotGroup,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
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
  padding-left: 10px;
`;

const InfoBox = styled.div`
  background: #ea0f36;
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

const Carousel = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  width: 200px;
  justify-content: space-around;
`;
const Dots = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default () => {
  return (
    <About>
      <Header>About me</Header>
      <InfoSection>
        <CarouselProvider
          visibleSlides={2}
          totalSlides={4}
          naturalSlideWidth={200}
          naturalSlideHeight={225}
          infinite={true}
        >
          <Carousel>
            <Slider>
              <Slide tag="a" index={0}>
                <InfoBox id="1">
                  <div className="Title">Democracy</div>
                  <div className="Role">Web Developer</div>
                  <p className="Text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </InfoBox>
              </Slide>
              <Slide tag="a" index={1}>
                <InfoBox id="1">
                  <div className="Title">Democracy</div>
                  <div className="Role">Web Developer</div>
                  <p className="Text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </InfoBox>
              </Slide>
              <Slide tag="a" index={2}>
                <InfoBox id="1">
                  <div className="Title">Democracy</div>
                  <div className="Role">Web Developer</div>
                  <p className="Text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </InfoBox>
              </Slide>
              <Slide tag="a" index={3}>
                <InfoBox id="1">
                  <div className="Title">Democracy</div>
                  <div className="Role">Web Developer</div>
                  <p className="Text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </InfoBox>
              </Slide>
            </Slider>
            <Dots>
              <DotGroup className="dots" />
            </Dots>
            <Buttons>
              <ButtonBack className="button">{"<"}</ButtonBack>
              <ButtonNext className="button">{">"}</ButtonNext>
            </Buttons>
          </Carousel>
        </CarouselProvider>
      </InfoSection>
    </About>
  );
};
