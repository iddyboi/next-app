import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;
export const Subtitle = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Lead = styled.p`
  font-size: ${({ theme }) => theme.fonts.sm};
  line-height: 1.6;
  margin-bottom: 1rem;
`;
export const List = styled.ul`
  margin-top: 1.8rem;
  li {
    list-style: none;
    color: ${({ theme }) => theme.colors.orange};

    &:not(:last-child) {
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
