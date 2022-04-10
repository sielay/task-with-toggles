import { useState } from "@storybook/addons";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { NumberToggle as Control } from "./NumberToggle";
import { ToggleProps } from "./types";
import "../../index.scss"

export default {
  title: "Toggle/NumberToggle",
  argTypes: {
    label: { control: "text" },
    options: { control: "text" },
  },
  args: {
    label: "ABC",
    options: "1,2,3,4,5,6,6,7,8,1000",
  },
} as Meta;

export const Default: Story<
  Omit<ToggleProps<number>, "value" | "onChange" | "options"> & {
    options: string;
  }
> = ({ options, label }): JSX.Element => {
  const [state, setState] = useState<number>(0);
  return (
    <Control
      value={state}
      onChange={setState}
      options={options.split(",").map((n) => parseInt(n))}
      label={label}
    />
  );
};
