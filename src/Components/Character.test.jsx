import { screen, render } from "@testing-library/react";
import Character from "./Character";

it("Should display the Character component", () => {
  const { container } = render(
    <Character head={"dog"} middle={"fancy"} bottom={"blue"} />
  );

  const head = screen.getByLabelText(/head/);
  const middle = screen.getByLabelText(/middle/);
  const bottom = screen.getByLabelText(/bottom/);

  expect(head).toHaveStyle(`background-image: url(./dog-head.png)`);
  expect(middle).toHaveStyle(`background-image: url(./fancy-middle.png)`);
  expect(bottom).toHaveStyle(`background-image: url(./blue-bottom.png)`);
  expect(container).toMatchSnapshot();
});
