import React, { FC } from "react";
import { Switch } from "../Switch";
import { ToggleProps } from "./types";
import "./Toggle.scss";

export const BooleanToggle: FC<ToggleProps<boolean>> = ({
  value,
  onChange,
  disabled,
  label,
}) => (
  <div className="Toggle">
    <div className="Toggle__label">{label}</div>
    <Switch value={value} onChange={onChange} disabled={disabled} />
  </div>
);
