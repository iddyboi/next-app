/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("should render a message", () => {
  const { getByText } = render(<HelloWorld />);
  expect(getByText("Hello world")).toBeInTheDocument();
});
