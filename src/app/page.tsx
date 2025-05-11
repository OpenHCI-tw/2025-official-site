import Footer from "@/components/Footer/Footer";
import MemberSection from "@/components/Members/MemberSection";
import Navbar from "@/components/Navbar/Navbar";
import NumberTitle from "@/components/NumberTitle";
import SponsorSection from "@/components/Sponsors/SponsorSection";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro/index";
import WorkshopIntro from "@/components/WorkshopIntro";
import ActivityInfo from "@/components/ActivityInfo";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex flex-col gap-8 mb-8 bg-linear-(--gradient-mobile) md:bg-linear-(--gradient-desktop)">
        <section>
          <Hero />
        </section>

        <section
          className="border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
        >
          <Intro />
        </section>

        <section
          className=" border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="workshop-intro"
        >
          <NumberTitle number={1}>工作坊介紹</NumberTitle>
          <WorkshopIntro />
        </section>

        <section
          className=" border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="activity-info"
        >
          <NumberTitle number={2}>活動資訊</NumberTitle>
          <ActivityInfo />
        </section>

        <section
          className=" border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="speaker-info"
        >
          <NumberTitle number={3}>講座陣容</NumberTitle>
          <Speakers />

        </section>

        <section
          className=" border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="past-work"
        >
          <NumberTitle number={4}>往年作品成果</NumberTitle>
        </section>

        <section
          className=" border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="faq"
        >
          <NumberTitle number={5}>FAQ</NumberTitle>
        </section>

        <section
          className="border-2 flex flex-col items-center justify-center py-20 scroll-mt-[var(--nav-height)]"
          id="team-info"
        >
          <NumberTitle number={6}>籌辦團隊</NumberTitle>
          <MemberSection />
        </section>

        <section
          className=" border-2 flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="sponsor-info"
        >
          <NumberTitle number={7}>贊助單位</NumberTitle>
          <SponsorSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
