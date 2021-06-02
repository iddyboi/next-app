import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '3rem')};
  color: ${({ theme }) => theme.colors.white};
`;

export const Lead = styled.p`
  font-size: ${({ theme }) => theme.fonts.sm};
`;
