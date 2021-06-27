import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from './Button';

interface IProps {
  title: string;
  error: string;
}

const ErrorModel: FunctionComponent<IProps> = ({ title, error }) => {
  return (
    <>
      <BackDrop />
      <ErrorContainer>
        <h2>{title}</h2>
        <p>{error}</p>
        <Button>Okay</Button>
      </ErrorContainer>
    </>
  );
};

export default ErrorModel;

const ErrorContainer = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 1rem;
  z-index: 10;

  button {
    background-color: blue;
    color: #fff;
    padding: 0.5em 2em;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
  }
`;
const BackDrop = styled.div`
  position: absolute;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
