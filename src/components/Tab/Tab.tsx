import React from "react";

type ITabSize = "small" | "medium" | "large" | "larger";

interface Props {
  children: React.ReactNode;
  size: ITabSize;
}

const getSizeStyle = (size: ITabSize) => {
  switch (size) {
    case "small":
      return "p-[0.375rem]";
    case "medium":
      return "p-2";
    case "large":
      return "p-3";
    case "larger":
      return "p-4";
  }
};

const Tab: React.FC<Props> = ({ size, children }) => {
  return (
    <div
      className={`${getSizeStyle(
        size
      )} text-neutral-hight border-b-2 border-b-transparent  hover:border-b-neutral-medium active:text-primary-hight active:border-b-primary-medium w-fit cursor-pointer flex gap-[0.375rem]`}
    >
      {children}
    </div>
  );
};

export default Tab;
