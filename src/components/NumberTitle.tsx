import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  number: number;
};

function NumberTitle({ children, number }: Props) {
  return (
    <div className="grid place-items-center justify-center">
      <div className="col-start-1 row-start-1 font-baunk text-[124px] opacity-30">
        0{number}
      </div>
      <div className="col-start-1 row-start-1 text-[28px] font-bold leading-[42px]">
        {children}
      </div>
    </div>
  );
}

export default NumberTitle;
