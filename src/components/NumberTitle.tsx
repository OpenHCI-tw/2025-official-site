import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  number: number;
};

function NumberTitle({ children, number }: Props) {
  return (
    <div className="grid place-items-center justify-center mb-8 select-none">
      <div className="col-start-1 row-start-1 font-baunk text-[124px] leading-[124px] opacity-30">
        0{number}
      </div>
      <div className="col-start-1 row-start-1 text-[28px] leading-[28px] font-bold grid place-items-center pb-3">
        {children}
      </div>
    </div>
  );
}

export default NumberTitle;
