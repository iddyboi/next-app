import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Subtitle } from "../../styles/fonts";

interface IProps {
  heading: string;
  paragraph: string;
}

const TextCard: FunctionComponent<IProps> = ({ heading, paragraph }) => {
  return (
    <Wrapper>
      <Subtitle fontSize="2rem">{heading}</Subtitle>

      <p>{paragraph}</p>
    </Wrapper>
  );
};

export default TextCard;

const Wrapper = styled.article`
  margin-top: 2rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
    @media (min-width: 768px) {
      width: 80%;
      font-size: 2rem;
    }
  }
`;
