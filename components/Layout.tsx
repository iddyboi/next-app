import Link from "next/link";
import styled from "styled-components";
import { Container } from "../styles/utility-styles";
import { Subtitle, Title } from "../styles/fonts";
import React from "react";

const NavLinks = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fonts.md};
  li {
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  a {
    margin-right: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: #ee0606;
    }
  }
`;
const HeaderContainer = styled(Container)`
  margin-bottom: 50px;
  padding-top: 20px;
`;

function Layout() {
  return (
    <>
      <HeaderContainer>
        <Title fontSize="3rem">Uni-Go</Title>
        <Subtitle>Find your Passion</Subtitle>
        <NavLinks>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/study-buddy">Study-Buddy</Link>
          </li>
          <li>
            {" "}
            <Link href="/converter">Convertor</Link>
          </li>
          <li>
            {" "}
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </NavLinks>
      </HeaderContainer>
    </>
  );
}

export default Layout;
