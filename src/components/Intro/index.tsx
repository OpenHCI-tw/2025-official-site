import AnimatedSection from "../AnimatedSection";

export default function Intro() {
  return (
    <AnimatedSection threshold={0.2} rootMargin="-120px">
      <div className="flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)] gap-10 text-white">
        <p className="text-[16px] font-medium md:text-2xl leading-[35px] text-center tracking-[10%] min-h-[70%] relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-0.5 after:w-[110%] after:bg-[var(--ORANGE)] after:rounded-full ">
          「如果 2049 年，做決定的不再是人類，那我們還能選擇什麼？」
        </p>
        <div className="flex flex-col gap-[34px] text-sm text-center leading-[20px] tracking-[1.6px]">
          <p>
            OpenHCI 2025 以《Agency 2049》為題 <br />
            邀請來自資訊、設計、社會科學的學生，一起來挑戰這個問題
          </p>
          <p>六天，從一個困惑開始，動手設計出屬於未來的角色與分工</p>
          <p>
            現在就加入我們，
            <br />
            一起重新定義科技與人的關係
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
