import { memo } from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { currencySymbol } from "../../helpers/currencyFunctions";

interface IProps {
  amount: number;
  currency: string;
}

const Conversion: FunctionComponent<IProps> = ({ amount, currency }) => {
  return (
    <>
      <ConversionText>
        {currencySymbol(currency)}
        {amount}
      </ConversionText>
    </>
  );
};

export default memo(Conversion);

const ConversionText = styled.p`
  font-size: 24px;
`;
