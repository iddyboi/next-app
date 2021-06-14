import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import { Title, Subtitle } from "../../styles/fonts";
import { Container } from "../../styles/utility-styles";

function index() {
  return (
    <>
      <Container>
        <Title>Sign In</Title>
        <Subtitle fontSize="1.5rem">To see Projects</Subtitle>
        <SignIn />
      </Container>
    </>
  );
}

export default index;
