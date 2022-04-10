import React from "react";
import { Switch } from "../Switch";
import { GroupToggleType, ToggleProps } from "./types";
import "./Toggle.scss";

export function GroupToggle<ValueType extends GroupToggleType>({
  value,
  onChange,
  disabled,
  label,
  render,
}: ToggleProps<ValueType | undefined>): JSX.Element {
  const booleanValue = value !== undefined;
  return (
    <div className="Toggle__group_wrapper">
      <div className="Toggle">
        <div className="Toggle__label">{label}</div>
        <Switch
          value={booleanValue}
          onChange={(value) => {
            onChange && onChange(value ? ({} as ValueType) : undefined);
          }}
          disabled={disabled}
        />
      </div>
      {booleanValue && render && render(value, onChange)}
    </div>
  );
}
