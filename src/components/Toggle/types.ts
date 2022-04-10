import { ReactNode } from "react";

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

export type GroupToggleType = { [key: string]: unknown };
