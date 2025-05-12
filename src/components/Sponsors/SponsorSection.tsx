import Image from "next/image";

function SponsorSection() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-x-10 pointer-event-none select-none">
      <div className="relative w-[150px] h-[60px] md:w-[293px] md:h-[117px]">
        <Image src="/贊助LOGO/國科會.svg" alt="國科會" fill />
      </div>

      <div className="relative w-[150px] h-[60px] md:w-[293px] md:h-[117px]">
        <Image src="/贊助LOGO/Dschool.svg" alt="D-School" fill />
      </div>

      <div className="relative w-[150px] h-[60px] md:w-[293px] md:h-[117px]">
        <Image
          src="/贊助LOGO/TAICHI.svg"
          alt="TAICHI"
          fill
          className="mix-blend-screen"
        />
      </div>

      <div className="relative w-[150px] h-[60px] md:w-[293px] md:h-[117px]">
        <Image
          src="/贊助LOGO/政大數位.svg"
          alt="政大數位"
          fill
          className="mix-blend-screen "
        />
      </div>
    </div>
  );
}

export default SponsorSection;
