import Head from "next/head";
import styled from "styled-components";
import { Container } from "../styles/utility-styles";
import { Subtitle, Title, Lead } from "../styles/fonts";

import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn React</title>
        <meta name="keywords" content="uni help"></meta>
      </Head>
      <Container>
        <h1>home</h1>
      </Container>
    </>
  );
}
