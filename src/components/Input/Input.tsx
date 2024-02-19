import React from "react";

type IInputSize = "small" | "medium" | "large";

export type IInputTheme = "primary" | "warning" | "danger" | "success";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  paddingSize: IInputSize;
  theme: IInputTheme;
  label?: string;
}

const getInputSizeStyle = (size: IInputSize) => {
  switch (size) {
    case "small":
      return "px-3 py-[0.375rem]";
    case "medium":
      return "px-4 py-2";
    case "large":
      return "px-6 py-3";
  }
};

const defaultBackground = "bg-neutral-lowest";

const getBackgroundThemeStyle = (theme: IInputTheme) => {
  switch (theme) {
    case "primary":
      return "focus:bg-primary-lowest disabled:bg-neutral-lower";
    case "success":
      return "focus:bg-success-lowest disabled:bg-success-lower";
    case "danger":
      return "focus:bg-danger-lowest disabled:bg-danger-lower";
    case "warning":
      return "focus:bg-warning-lowest disabled:bg-warning-lower";
  }
};

const getInputThemeStyle = (theme: IInputTheme) => {
  switch (theme) {
    case "primary":
      return "text-neutral-highest border border-neutral-low focus:border-primary-low disabled:text-neutral-medium ";
    case "success":
      return "text-success-highest border border-success-low disabled:text-success-low";
    case "danger":
      return "text-danger-highest border border-danger-low disabled:text-danger-low";
    case "warning":
      return "text-warning-highest border border-warning-low disabled:text-warning-low";
  }
};

const getLabelThemeStyle = (theme: IInputTheme) => {
  switch (theme) {
    case "primary":
      return "text-neutral-medium";
    case "success":
      return "text-sucess-low";
    case "danger":
      return "text-danger-low";
    case "warning":
      return "text-warning-low";
  }
};

const Input: React.FC<Props> = ({ paddingSize, theme, label, id, ...args }) => {
  return (
    <div className="relative">
      {label && (
        <label
          className={`${defaultBackground} ${getBackgroundThemeStyle(
            theme
          )} ${getLabelThemeStyle(theme)} absolute left-0 top-0 px-[0.25rem]`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`${getInputSizeStyle(
          paddingSize
        )} ${defaultBackground} ${getBackgroundThemeStyle(
          theme
        )} ${getInputThemeStyle(theme)} min-w-[200px] rounded-lg outline-none`}
        {...args}
      />
    </div>
  );
};

export default Input;
