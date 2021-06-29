import Link from "next/link";
import styled from "styled-components";
import { Container } from "../../styles/utility-styles";
import { Subtitle, Title } from "../../styles/fonts";
import Button from "../components/UI/Button";

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.md};
  padding: 0.3rem 0;
  @media (min-width: 768px) {
    padding: 0 0;
  }
  li {
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  a {
    margin-right: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      color: #ee0606;
    }
  }
`;
const HeaderContainer = styled(Container)`
  margin-bottom: 50px;
  padding-top: 20px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }
`;
const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
`;

function Layout() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div>
          <Title fontSize="3rem">Uni-Go</Title>
          <Subtitle>Find your Passion</Subtitle>
        </div>
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
            <Link href="/login">Login</Link>
          </li>
          <Button>Learn More</Button>
        </NavLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Layout;
