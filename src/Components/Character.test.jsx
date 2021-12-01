import { screen, render } from "@testing-library/react";
import Character from "./Character";

it("Should display the Character component", () => {
  const { container } = render(
    <Character head={"dog"} middle={"fancy"} bottom={"blue-bottom"} />
  );

  const head = screen.getByLabelText(/head/);

  expect(head).toHaveStyle(`background-image: url(./dog-head.png)`);
  expect(container).toMatchSnapshot();
});
