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
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  display: inline-block;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
