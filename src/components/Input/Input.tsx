import React, { useEffect, useRef, useState } from "react";

type IInputSize = "small" | "medium" | "large";

export type IInputTheme = "primary" | "warning" | "danger" | "success";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  paddingSize: IInputSize;
  theme: IInputTheme;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  label?: string;
  placeholder?: string;
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

const getLabelSizeStyle = (size: IInputSize) => {
  switch (size) {
    case "small":
      return "left-3";
    case "medium":
      return "left-4";
    case "large":
      return "left-6";
  }
};
const defaultBackground = "bg-neutral-lowest";

const getBackgroundThemeStyle = (theme: IInputTheme) => {
  switch (theme) {
    case "primary":
      return "group-focus-within:bg-primary-lowest focus-within:bg-primary-lowest disabled:bg-neutral-lower";
    case "success":
      return "group-focus-within:bg-success-lowest focus-within:bg-success-lowest disabled:bg-success-lower";
    case "danger":
      return "group-focus-within:bg-danger-lowest focus-within:bg-danger-lowest disabled:bg-danger-lower";
    case "warning":
      return "group-focus-within:bg-warning-lowest focus-within:bg-warning-lowest disabled:bg-warning-lower";
  }
};

const getBorderThemeStyle = (theme: IInputTheme) => {
  switch (theme) {
    case "primary":
      return "border border-neutral-low focus-within:border-primary-low";
    case "success":
      return "border border-success-low";
    case "danger":
      return "border border-danger-low";
    case "warning":
      return "border border-warning-low";
  }
};

const getInputThemeStyle = (theme: IInputTheme) => {
  switch (theme) {
    case "primary":
      return "text-neutral-highest disabled:text-neutral-medium ";
    case "success":
      return "text-success-highest disabled:text-success-low";
    case "danger":
      return "text-danger-highest disabled:text-danger-low";
    case "warning":
      return "text-warning-highest disabled:text-warning-low";
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

const getPlaceholderThemeStyle = (theme: IInputTheme) =>
  `placeholder:${getLabelThemeStyle(theme)}`;

const Input: React.FC<Props> = ({
  paddingSize,
  theme,
  label,
  id,
  placeholder,
  leftIcon,
  children,
  className,
  ...args
}) => {
  const labelElt = useRef<HTMLLabelElement>(null);
  const [labelBackgroundWidth, setLabelBackgroundWidth] = useState(0);
  useEffect(() => {
    if (!labelElt.current) return;
    setLabelBackgroundWidth((labelElt.current?.clientWidth || 0) * 1.1);
  }, [labelElt]);

  return (
    <div
      className={`relative group w-fit rounded-lg flex gap-[0.375rem] items-center ${defaultBackground} ${getBackgroundThemeStyle(
        theme
      )} ${getBorderThemeStyle(theme)} ${getInputSizeStyle(paddingSize)}`}
    >
      {label && (
        <>
          <div
            style={{
              width: `${labelBackgroundWidth}px`,
            }}
            className={`absolute top-0 ${defaultBackground} ${getBackgroundThemeStyle(
              theme
            )} ${getLabelSizeStyle(
              paddingSize
            )} -translate-x-[5%] h-1 -translate-y-[1.1px]`}
          ></div>
          <label
            className={`${getLabelThemeStyle(theme)} ${getLabelSizeStyle(
              paddingSize
            )} absolute top-0 px-1 -translate-y-1/2 text-[10px]`}
            htmlFor={id}
            ref={labelElt}
          >
            {label}
          </label>
        </>
      )}
      {leftIcon}
      <input
        id={id}
        className={` ${getInputThemeStyle(theme)} ${getPlaceholderThemeStyle(
          theme
        )} ${className} outline-none bg-transparent`}
        placeholder={placeholder}
        {...args}
      />
      {children}
    </div>
  );
};

export default Input;
