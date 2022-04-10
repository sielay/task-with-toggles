import React, { FC } from "react";

export interface SwitchProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const Switch: FC<SwitchProps> = ({ value, disabled, onChange }) => (
  <input
    type="checkbox"
    checked={value}
    disabled={disabled}
    onChange={({ target: { checked } }) => onChange && onChange(checked)}
  />
);
