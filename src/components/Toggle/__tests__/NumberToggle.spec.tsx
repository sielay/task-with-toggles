import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";
import { NumberToggle } from "../NumberToggle";

describe("components.Toggle.NumberToggle", () => {
  it("Renders as expected", () => {
    const { baseElement } = render(
      <NumberToggle
        value={1}
        options={[1, 2, 3]}
        onChange={() => {
          // noop
        }}
        label="ABC"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it("Handle value changes", async () => {
    const onChange = jest.fn();
    render(
      <NumberToggle
        value={1}
        options={[1, 2, 3]}
        onChange={onChange}
        label="ABC"
      />
    );
    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => expect(onChange).toBeCalledTimes(1));
    expect(onChange).toBeCalledWith(0);
    /* eslint-disable testing-library/no-node-access */
    const select = screen.getByText('2').parentNode;
    select && fireEvent.change(select, { target: { value: 2 } })
    await waitFor(() => expect(onChange).toBeCalledTimes(2));
    expect(onChange).toBeCalledWith(2);
  });
});
