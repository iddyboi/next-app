import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { RootState, actionCreators } from "../redux/index";
import { Container } from "../styles/utility-styles";
import { Subtitle, Title, Lead } from "../styles/fonts";

import React from "react";

export default function Home() {
  const dispatch = useDispatch();
  const { addCounters, removeCounters } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const count = useSelector((state: RootState) => state?.count);

  const addToCounter = () => {
    addCounters();
  };
  const removeToCounter = () => {
    if (count === 0) return;
    removeCounters();
  };
  return (
    <>
      <Head>
        <title>Learn React</title>
        <meta name="keywords" content="uni help"></meta>
      </Head>
      <Container>
        <h1>home</h1>
        {count}
        <button onClick={addToCounter}>add</button>
        <button onClick={removeToCounter}>remove</button>
      </Container>
    </>
  );
}
