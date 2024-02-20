import React from "react";

export type IBadgeTheme =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "danger"
  | "success";
export type IBadgeSize = "small" | "medium" | "large";

interface Props {
  children: React.ReactNode;
  theme: IBadgeTheme;
  size: IBadgeSize;
}

const getPaddingStyle = (size: IBadgeSize) => {
  switch (size) {
    case "small":
      return "px-[0.375rem] py-[1.5px] text-[10px]";
    case "medium":
      return "px-[0.375rem] py-[0.125rem] text-xs";
    case "large":
      return "px-2 py-[0.125rem] text-sm";
  }
};

const getThemeStyle = (theme: IBadgeTheme) => {
  switch (theme) {
    case "primary":
      return "text-primary-lowest bg-primary-medium";
    case "secondary":
      return "text-primary-medium bg-primary-lower";
    case "tertiary":
      return "text-neutral-hight bg-neutral-low";
    case "danger":
      return "text-danger-medium bg-danger-lowest";
    case "success":
      return "text-success-medium bg-success-lowest";
    case "warning":
      return "text-warning-medium bg-warning-lowest";
  }
};

const Badge: React.FC<Props> = ({ theme, size, children }) => {
  return (
    <span
      className={`${getThemeStyle(theme)} ${getPaddingStyle(
        size
      )} rounded-full font-medium grid place-items-center w-fit`}
    >
      {children}
    </span>
  );
};

export default Badge;
