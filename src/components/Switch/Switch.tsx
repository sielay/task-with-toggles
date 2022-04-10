import React, { FC } from "react";
import cx from "classnames";
import "./Switch.scss";

export interface SwitchProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const Switch: FC<SwitchProps> = ({ value, disabled, onChange }) => (
  <label className={cx("Switch", value && "Switch--checked")} tabIndex={0}>
    <input
      type="checkbox"
      checked={value}
      disabled={disabled}
      onChange={({ target: { checked } }) => onChange && onChange(checked)}
    />
    <span />
  </label>
);
