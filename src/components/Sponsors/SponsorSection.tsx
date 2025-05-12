import Image from "next/image";

function SponsorSection() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-x-10 pointer-event-none select-none">
      <div className="relative w-[150px] h-[60px] md:w-[218px] md:h-[60px]">
        <Image
          src="/贊助LOGO/晶創.svg"
          alt="晶創人文"
          fill
          // className="mix-blend-screen"
        />
      </div>

      <div className="relative w-[150px] h-[60px] md:w-[218px] md:h-[60px]">
        <Image
          src="/贊助LOGO/TAICHI.svg"
          alt="TAICHI"
          fill
          // className="mix-blend-screen"
        />
      </div>

      <div className="relative w-[150px] h-[60px] md:w-[218] md:h-[60]">
        <Image
          src="/贊助LOGO/政大數位.svg"
          alt="政大數位"
          fill
          // className="mix-blend-screen "
        />
      </div>
    </div>
  );
}

export default SponsorSection;
