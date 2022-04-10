import React, { FC } from "react";

export interface SelectProps {
  value?: string;
  options?: string[]; // could be more complex in other cases
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = ({
  value,
  options,
  onChange,
  disabled,
}) => (
  <select
    value={value}
    disabled={disabled}
    onChange={({ target: { value } }) => onChange && onChange(value)}
  >
    {Array.isArray(options) &&
      options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
  </select>
);
