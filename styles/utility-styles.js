import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1100px;
  }
`;
