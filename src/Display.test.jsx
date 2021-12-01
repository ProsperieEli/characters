import { screen, render } from "@testing-library/react";
import Display from "./Components/Display";

it("Should render our Display component", () => {
  const { container } = render(<Display catchphrase={["tweet!"]} />);
  expect(container).toMatchSnapshot();
});
