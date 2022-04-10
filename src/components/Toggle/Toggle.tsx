import React, { FC, ReactNode } from "react";
import { Select } from "../Select";
import { Switch } from "../Switch";

export type ChangeHandler<ValueType> = (value: ValueType) => void;

export interface ToggleProps<ValueType> {
  value?: ValueType;
  onChange?: ChangeHandler<ValueType>;
  disabled?: boolean;
  label?: string;
  options?: number[];
  render?: (
    value: ValueType | undefined,
    onChange?: ChangeHandler<ValueType>
  ) => ReactNode;
}

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

export type GroupToggleType = { [key: string]: unknown };
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
