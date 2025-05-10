import MemberSection from "@/components/Members/MemberSection";
import NumberTitle from "@/components/NumberTitle";
import SponsorSection from "@/components/Sponsors/SponsorSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 w-full text-white pt-10 pb-5 px-10 flex items-center justify-center bg-black ">
        NAV
      </nav>

      <header className=" border-2 flex flex-col items-center justify-center p-10 h-[100dvh] bg-orange">
        第十五屆人機互動工作坊 - Landing
      </header>

      <main
        className="flex flex-col gap-8 mb-8
    bg-linear-(--gradient-mobile)
    md:bg-linear-(--gradient-desktop)"
      >
        <section className="border-2 flex flex-col items-center justify-center py-20 px-8">
          <h2>section 0</h2>
          「如果 2049 年，做決定的不再是人類，那我們還能選擇什麼？」 OpenHCI
          2025 以《Agency 2049》為題
          邀請來自資訊、設計、社會科學的學生，一起來挑戰這個問題
          六天，從一個困惑開始，動手設計出屬於未來的角色與分工 現在就加入我們，
          一起重新定義科技與人的關係
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={1}>工作坊介紹</NumberTitle>
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={2}>活動資訊</NumberTitle>
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={3}>講座陣容</NumberTitle>
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={4}>往年作品成果</NumberTitle>
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={5}>FAQ</NumberTitle>
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={6}>籌辦團隊</NumberTitle>

          <MemberSection />
        </section>

        <section className=" border-2 flex flex-col items-center justify-center py-20 px-8">
          <NumberTitle number={7}>贊助單位</NumberTitle>

          <SponsorSection />
        </section>
      </main>
      <footer className="bg-black text-center text-xl flex  flex-col items-center justify-center py-10 px-8">
        footer
      </footer>
    </div>
  );
}
