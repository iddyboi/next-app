import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface TitleProps {
  label: string;
  color: string;
}

export const Title: FunctionComponent<TitleProps> = ({ label, ...props }) => {
  return (
    <>
      <TitleHeader {...props}>{label}</TitleHeader>
    </>
  );
};

const TitleHeader = styled.h1`
  color: ${(props) => props.color};
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
