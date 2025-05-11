import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative w-full text-white overflow-hidden"
      style={{ height: "calc(100vh - 115px)" }}
    >
      <div className="absolute inset-0 bg-[url('/hero/background.png')] bg-cover bg-[right_-20px_top] z-0" />

      <div className="relative z-10 flex flex-col px-6 py-8 h-full justify-center md:justify-between md:items-stretch md:ml-12 md:mt-12">
        <div className="flex flex-col flex-1 mt-12 md:mt-0 md:self-start">
          <div className="text-center md:text-left md:text-2xl font-medium mb-6">
            第十五屆人機互動工作坊
          </div>
          <Image
            src="/hero/logo.png"
            alt="logo"
            width={350}
            height={106}
            className="w-full md:w-[642.2px] mx-auto"
          />
        </div>

        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end md:self-end text-center md:text-right md:mr-12 md:mb-12">
          <button className="w-[88px] h-[88px] md:w-[124px] md:h-[124px] bg-[var(--ORANGE)] text-white text-sm px-6 py-3 rounded-full mb-4 hover:bg-[#F25926] shadow-[0px_8px_12px_0px_#00000040]">
            立即報名
          </button>
          <div className="text-white text-[28px] leading-relaxed mt-3 mb-12">
            <p>06/21–06/22</p>
            <p>07/03–07/06</p>
          </div>
        </div>
      </div>
    </div>
  );
}
