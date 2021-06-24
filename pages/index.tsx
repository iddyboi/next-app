import Head from "next/head";
import styled from "styled-components";
import { Container } from "../styles/utility-styles";
import { Subtitle, Title, Lead } from "../styles/fonts";

import React from "react";
import StudentTile from "../components/StudentTile/StudentTile";
import Hero from "../components/Hero/Hero";

const URL =
  "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?cs=srgb&dl=pexels-energepiccom-313690.jpg&fm=jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn React</title>
        <meta name="keywords" content="uni help"></meta>
      </Head>
      <Container>
        <Title fontSize="7rem">Hello Student!</Title>
        <Subtitle fontSize="1.6rem">
          Welcome to Uni-go where you can find a study partner or room to excel
          in your course
        </Subtitle>
        <Hero />
        <Title fontSize="3rem">Find students today with unigo!</Title>
        <Lead>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
          cupiditate facere velit animi ducimus obcaecati ut deserunt dolorem
          fugiat!
        </Lead>
      </Container>
    </>
  );
}
