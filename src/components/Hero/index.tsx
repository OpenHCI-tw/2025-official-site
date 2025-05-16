import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative w-full text-white overflow-hidden bg-black"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-[50%] -translate-y-[72%] z-10 pointer-events-none w-[250%]">
        <Image
          src="/hero/ellipse.png"
          alt="ellipse"
          width={2212}
          height={349}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-[50%] translate-y-[68%] z-5 pointer-events-none w-[250%]">
        <Image
          src="/hero/ellipse.png"
          alt="ellipse"
          width={2212}
          height={349}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-cover bg-[right_-20px_top] z-0">
        <Image
          src={"/hero/background-345.jpg"}
          fill
          className="object-cover md:object-right"
          alt="底圖"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col px-6 py-8 h-full item-center gap-10">
        <div className="flex flex-col  mt-20 md:self-start">
          <div className="text-center md:text-left md:text-2xl font-medium mb-6">
            第十五屆人機互動工作坊
          </div>
          <Image
            src="/hero/logo.png"
            alt="logo"
            width={350}
            height={106}
            className="w-full md:w-[642.2px] mx-auto"
            priority
          />
        </div>

        <div className="md:absolute flex flex-col items-center md:items-end text-center md:text-right  z-30 mb-0 md:right-22 md:translate-x-0 md:bottom-22 md:mb-0">
          <button className="w-[88px] h-[88px] md:w-[124px] md:h-[124px] bg-[var(--ORANGE)] text-white text-[16px] md:text-2xl font-bold text-nowrap  rounded-full mb-4 hover:bg-[#F25926] shadow-[0px_8px_12px_0px_#00000040] tracking-[0.1em]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfubYcNe1OtjyfXFsqUf8HM5RTwOiUzNjrryfmCTlJgkyzvBg/viewform?usp=dialog"
              target="blank"
            >
              立即報名
            </a>
          </button>
          <div className="text-white text-[28px] leading-relaxed mt-3 tracking-[0.1em]">
            <p>06/28–06/29</p>
            <p>07/17–07/20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
