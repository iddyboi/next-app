import Link from "next/link";
import styled from "styled-components";
import { Container } from "../styles/utility-styles";
import { Title } from "../styles/fonts";

const NavLinks = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fonts.md};
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
        <Title fontSize="2rem">Idris Web Blogs</Title>
        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/state">State</Link>
          <Link href="/invoice">Invoices</Link>
        </NavLinks>
      </HeaderContainer>
    </>
  );
}

export default Layout;
