export const currencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    default:
      return "£";
  }
};

export const currencyConversion = (
  currency: number,
  firstCurrency: string,
  secondCurrency: string
) => {
  if (!firstCurrency || !secondCurrency) alert("Please select a currency");

  if (firstCurrency === secondCurrency)
    alert("Please select a different selection");

  if (firstCurrency === "GBP") {
    if (secondCurrency === "USD") return currency * 1.38;
    if (secondCurrency === "EUR") return currency * 1.16;
  }
  if (firstCurrency === "USD") {
    if (secondCurrency === "GBP") return currency * 0.72;
    if (secondCurrency === "EUR") return currency * 0.84;
  }
  if (firstCurrency === "EUR") {
    if (secondCurrency === "GBP") return currency * 0.86;
    if (secondCurrency === "USD") return currency * 1.19;
  }
};
