import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative w-full text-white overflow-hidden"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-[50%] -translate-y-[68%] z-10 pointer-events-none w-[250%]">
        <Image
          src="/hero/ellipse.png"
          alt="ellipse"
          width={2212}
          height={349}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-[50%] translate-y-[68%] z-5 pointer-events-none w-[250%]">
        <Image
          src="/hero/ellipse.png"
          alt="ellipse"
          width={2212}
          height={349}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute inset-0 bg-cover bg-[right_-20px_top] z-0">
        <Image
          // src={"/hero/底圖.jpg"}
          src={"/hero/底圖壓縮.jpg"}
          fill
          sizes="100vw"
          objectFit="cover"
          alt="底圖"
        />
      </div>

      <div className="relative z-10 flex flex-col px-6 py-8 h-full justify-center md:justify-between md:items-stretch md:ml-12 md:mt-12">
        <div className="flex flex-col flex-1 mt-12 md:self-start">
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
          <button className="w-[88px] h-[88px] md:w-[124px] md:h-[124px] bg-[var(--ORANGE)] text-white text-[16px] md:text-2xl font-bold text-nowrap  rounded-full mb-4 hover:bg-[#F25926] shadow-[0px_8px_12px_0px_#00000040] tracking-[0.1em]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfubYcNe1OtjyfXFsqUf8HM5RTwOiUzNjrryfmCTlJgkyzvBg/viewform?usp=dialog"
              target="blank"
            >
              立即報名
            </a>
          </button>
          <div className="text-white text-[28px] leading-relaxed mt-3 mb-18 tracking-[0.1em]">
            <p>06/28–06/29</p>
            <p>07/17–07/20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
