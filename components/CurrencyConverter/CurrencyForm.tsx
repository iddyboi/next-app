import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  currencySymbol,
  currencyConversion,
} from "../../helpers/currencyFunctions";
import styled from "styled-components";
import Conversion from "./Conversion";
import { useConveter } from "../../hooks/custom/useConveter";

function CurrencyForm() {
  const {
    selections,
    currencySelector,
    checkedHandler,
    conversion,
    setSelections,
    setConversion,
  } = useConveter();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const { amount, firstCurrency, secondCurrency } = selections;
    setSelections((preState) => ({
      ...preState,
      currencySetter: secondCurrency,
    }));

    setConversion(
      Number(
        currencyConversion(amount, firstCurrency, secondCurrency).toFixed(2)
      )
    );
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormControl>
          <label htmlFor="amount">Enter value you want to convert</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={selections.amount}
            onChange={currencySelector}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="firstCurrency">Select currency to convert</label>
          <select
            id="firstCurrency"
            name="firstCurrency"
            onChange={currencySelector}
            defaultValue="GBP"
          >
            <option value="none">select 1st currency</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor="convert1">Select currency to get conversion</label>
          <select
            id="convert1"
            name="secondCurrency"
            onChange={currencySelector}
            defaultValue="USD"
          >
            <option value="none">select 2nd currency</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor="tax">tax?</label>
          <input type="checkbox" name="tax" id="tax" onClick={checkedHandler} />
        </FormControl>
        {/* <input type="range" min="1" max="100" id="myRange" /> */}
        <button type="submit">Submit </button>
      </Form>
      {conversion && (
        <Conversion currency={selections.currencySetter} amount={conversion} />
      )}
    </>
  );
}

export default CurrencyForm;

const Form = styled.form`
  button {
    background-color: blue;
    color: #fff;
    border: none;
    padding: 0.5em;
    display: inline-block;
    width: 100px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    max-width: 60%;
    display: grid;
    gap: 10px;
  }
`;
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: ${({ theme }) => theme.fonts.md};
  }
  input {
    padding: 0.75rem 1rem;
  }
  select {
    padding: 0.75rem 0rem;
  }
`;
