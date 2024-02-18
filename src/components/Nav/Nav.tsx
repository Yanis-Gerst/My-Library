import React from "react";

type INavSize = "small" | "medium" | "large" | "larger";

interface Props {
  children: React.ReactNode;
  size: INavSize;
}

const getSizeStyle = (size: INavSize) => {
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
const Nav: React.FC<Props> = ({ children, size }) => {
  return (
    <nav
      className={`rounded ${getSizeStyle(
        size
      )} text-neutral-hight hover:bg-neutral-lower hover:outline hover:outline-neutral-medium active:text-primary-hight active:bg-primary-lowest  active:outline active:outline-primary-medium w-fit cursor-pointer flex gap-[0.375rem]`}
    >
      {children}
    </nav>
  );
};

export default Nav;
