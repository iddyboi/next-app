import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface IProps {
  type?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: FunctionComponent<IProps> = ({ type, children, onClick }) => {
  return (
    <CustomButton type={type || "button"} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
  border: none;
  background-color: #2828a3;
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  display: inline-block;
`;
