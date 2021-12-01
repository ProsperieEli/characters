import { screen, render } from "@testing-library/react";
import Picker from "./Components/Picker";

it("should render our Picker component", () => {
  const { container } = render(<Picker />);

  const selectHead = screen.getAllByLabelText(/Head/);
  const SelectMiddle = screen.getAllByLabelText(/Middle/);
  const selectBottom = screen.getAllByLabelText(/Bottom/);
  const input = screen.getAllByLabelText(/New catchphase:/);

  expect(selectHead).toBeInTheDocument();
});
