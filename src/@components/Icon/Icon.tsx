import React, { FC } from "react";
import { dataTestIdStringMod } from "../../utils";

type Variants = "outlined" | "filled" | "round" | "sharp" | "two-tone";

interface IconProps {
  name: string;
  variant?: Variants;
  className?: string;
  id?: string;
  role?: string;
  style?: React.CSSProperties;
  dataTestId?: string;
}

const Icon: FC<IconProps> = ({ name, variant = "filled", className, id, role, style, dataTestId }) => {
  return (
    <span
      id={id}
      className={`${variant === "filled" ? "material-icons" : `material-icons-${variant}`} ${
        className ? className : ""
      } select-none`}
      role={role}
      style={style}
      data-test-id={dataTestIdStringMod(dataTestId)}
    >
      {name}
    </span>
  );
};

export default Icon;
