import React, { FC, PropsWithChildren } from "react";

export interface GroupProps extends PropsWithChildren<unknown> {
  label?: string;
}

export const Group: FC<GroupProps> = ({ children, label }) => (
  <div className="Group">
    <h4>{label}</h4>
    {children}
  </div>
);
