import React from 'react';
import styled from 'styled-components';

function Card({ children }) {
  return <CustomCard>{children}</CustomCard>;
}

export default Card;

const CustomCard = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid #eee;
    padding: 0.5em;
    margin-bottom: 0.5rem;
  }
  button {
    display: block;
    padding: 0.5em 2em;
    border: none;
    background-color: #003cff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
