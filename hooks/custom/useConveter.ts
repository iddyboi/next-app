import { useState, ChangeEvent } from "react";
export const useConveter = () => {
  const [selections, setSelections] = useState({
    amount: 0,
    firstCurrency: "",
    secondCurrency: "",
    currencySetter: "",
    tax: false,
  });
  const [conversion, setConversion] = useState<number | null>(null);

  const currencySelector = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setSelections((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkedHandler = () => {
    setSelections((preState) => ({ ...preState, tax: !preState.tax }));
  };

  return {
    selections,
    currencySelector,
    checkedHandler,
    conversion,
    setSelections,
    setConversion,
  };
};
