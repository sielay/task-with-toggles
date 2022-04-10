import React, { FC } from "react";
import { Select } from "../Select";
import { Switch } from "../Switch";
import { ToggleProps } from "./types";
import "./Toggle.scss";

export const NumberToggle: FC<ToggleProps<number>> = ({
  value,
  onChange,
  options,
  disabled,
  label,
}) => {
  const booleanValue = !!(value && value > 0);
  const positiveValue = (options && options.filter(Boolean)[0]) || 0;
  return (
    <div className="Toggle">
      <div className="Toggle__label">{label}</div>
      <Select
        options={options && options.map((value) => `${value}`)}
        value={value !== undefined ? `${value}` : undefined}
        onChange={(value) => {
          onChange && onChange(parseInt(value));
        }}
      ></Select>
      <Switch
        value={booleanValue}
        onChange={(value) => {
          onChange && onChange(value ? positiveValue : 0);
        }}
        disabled={disabled}
      />
    </div>
  );
};
