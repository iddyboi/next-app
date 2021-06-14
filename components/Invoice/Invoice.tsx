import React from "react";
import styled from "styled-components";

function Invoice() {
  return (
    <Canvas>
      <Form>
        <FormControl>
          <label htmlFor="">Name</label>
          <input type="text" />
        </FormControl>
        <FormControl>
          <label htmlFor="">Email </label>
          <input type="text" />
        </FormControl>
        <FormControl>
          <label htmlFor="">Address</label>
          <input type="text" />
        </FormControl>
        <FormControl>
          <label htmlFor="">Phone</label>
          <input type="text" />
        </FormControl>
      </Form>
    </Canvas>
  );
}

export default Invoice;

const Canvas = styled.div`
  background-color: #fff;
  color: #000;
  padding: 15px;
  min-height: 100vh;

  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const Form = styled.form``;
const FormControl = styled.div`
  display: flex;
  align-items: baseline;
  label {
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fonts.sm};
    font-weight: bold;
  }
  input {
    flex: 1;
    padding: 0.5rem;
  }
`;
