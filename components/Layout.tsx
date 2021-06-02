import styled from 'styled-components';
import { Container } from '../styles/utility-styles';
import { Title } from '../styles/fonts';

const NavLinks = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fonts.md};
  li {
    margin-right: 10px;
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
        <Title fontSize='2rem'>Idris Web Blogs</Title>
        <NavLinks>
          <li>Home</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>News</li>
        </NavLinks>
      </HeaderContainer>
    </>
  );
}

export default Layout;
