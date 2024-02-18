import React from "react";

export type IBtnTheme =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "danger"
  | "success";
export type IBtnSize = "small" | "medium" | "large" | "larger";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: IBtnTheme;
  size?: IBtnSize;
  bottomLabel?: boolean;
  children: React.ReactNode;
}

const getBtnSizeStyle = (size: IBtnSize) => {
  switch (size) {
    case "small":
      return "px-3 py-[0.375rem] gap-[0.375rem] text-xs";
    case "medium":
      return "px-4 py-2 gap-[0.375rem] text-sm";
    case "large":
      return "px-6 py-3 gap-2 text-base";
    case "larger":
      return "px-8 py-4 gap-2 text-lg";
  }
};

const getThemeColors = (theme: IBtnTheme) => {
  switch (theme) {
    case "primary":
      return "text-primary-lowest bg-primary-medium  hover:bg-primary-hight disabled:bg-primary-low";
    case "secondary":
      return "text-primary-medium bg-primary-lower hover:bg-primary-low hover:text-primary-highter disabled:text-primary-low disabled:bg-primary-lowest";
    case "tertiary":
      return "text-neutral-hightest bg-primary hover:bg-neutral-lower border border-primary disabled:text-neutral-low";
    case "danger":
      return "text-danger-hight bg-danger-lowest border border-danger-low hover:bg-danger-lower hover:border-danger-low disabled:text-danger-low";
    case "success":
      return "text-success-hight bg-success-lowest border border-success-low hover:bg-success-lower disabled:text-success-low";
    case "warning":
      return "text-warning-hight bg-warning-lowest border border-warning-low hover:bg-warning-lower disabled:text-warning-low";
  }
};

const Button: React.FC<Props> = ({
  children,
  size = "small",
  theme,
  bottomLabel,
  ...props
}) => {
  return (
    <button
      className={`${getBtnSizeStyle(size)} ${getThemeColors(
        theme
      )} flex justify-center items-center rounded-lg transition-colors font-medium ${
        bottomLabel ? "flex-col" : "flex-row"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
