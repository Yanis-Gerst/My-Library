import Button from "@components/Button";
import useToogle from "@hooks/useToogle";
import { ChevronDown } from "lucide-react";
import React from "react";

// Two Options for implemantions
// Relatively place content. Cons can content overflow
// Flexbox . Cons layout shift on opening if align center

type IDropdownAlignement = "left" | "center" | "right";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  align: IDropdownAlignement;
  children: React.ReactNode;
}

const getAlignementStyle = (align: IDropdownAlignement) => {
  switch (align) {
    case "left":
      return "left-0";
    case "center":
      return "left-1/2 -translate-x-1/2";
    case "right":
      return "right-0";
  }
};
const DropdownMenu: React.FC<Props> = ({
  align,
  children,
  className,
  ...args
}) => {
  const [isOpen, toogleIsOpen] = useToogle(false);

  return (
    <div
      className={`cursor-pointer flex flex-col gap-2 items-center w-fit relative ${className}`}
      {...args}
    >
      <Button size="medium" theme="tertiary" onClick={toogleIsOpen}>
        Select <ChevronDown />
      </Button>

      {isOpen && (
        <div
          className={`flex flex-col p-2 absolute bottom-0 translate-y-[calc(100%+0.5rem)] ${getAlignementStyle(
            align
          )}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
