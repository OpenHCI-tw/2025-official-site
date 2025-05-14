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
import AnimatedSection from "@/components/AnimatedSection";
import Faq from "@/components/Faq";
// import PreviousWorks from "@/components/PreviousWorks";
import Carousel from "@/components/PreviousWorks/Carosoul";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <section className="">
        <Hero />
      </section>
      <main className="flex flex-col gap-8  bg-linear-(--gradient-mobile) md:bg-linear-(--gradient-desktop)">
        <section className=" flex flex-col items-center justify-center py-20  scroll-mt-[var(--nav-height)]  bg-linear-(--gradient-intro)">
          <Intro />
        </section>

        <section
          className="  flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="workshop-intro"
        >
          <NumberTitle number={1}>工作坊介紹</NumberTitle>
          <WorkshopIntro />
        </section>

        {/* <AnimatedSection rootMargin="-120px"> */}
        <section
          className="  flex flex-col items-center justify-center py-20 px-0 scroll-mt-[var(--nav-height)]"
          id="activity-info"
        >
          <NumberTitle number={2}>活動資訊</NumberTitle>
          <ActivityInfo />
        </section>
        {/* </AnimatedSection> */}

        <section>
          <NumberTitle number={3}>講座陣容</NumberTitle>
          <AnimatedSection
            className=" flex flex-col items-center justify-center py-20 scroll-mt-[var(--nav-height)]"
            id="speaker-info"
            baseClass="fade-in-start"
            animationClass="fade-in-end"
            threshold={0}
            once={true}
          >
            <Speakers />
          </AnimatedSection>
        </section>
        {/* <section
          className=" flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="past-work"
        >
          <NumberTitle number={4}>往年作品成果</NumberTitle>
          <PreviousWorks />
        </section> */}

        <section
          className="flex flex-col items-center justify-center py-20 px-0 scroll-mt-[var(--nav-height)]"
          id="past-work"
        >
          <NumberTitle number={4}>往年作品成果</NumberTitle>

          <Carousel />
        </section>

        <section
          className="  flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
          id="faq"
        >
          <NumberTitle number={5}>FAQ</NumberTitle>
          <Faq />
        </section>

        <NumberTitle number={6}>籌辦團隊</NumberTitle>

        <AnimatedSection
          className=" flex flex-col items-center justify-center py-20 scroll-mt-[var(--nav-height)]"
          id="team-info"
          baseClass="fade-in-start"
          animationClass="fade-in-end"
          once={true}
        >
          <MemberSection />
        </AnimatedSection>

        <section
          className="  flex flex-col items-center justify-center py-20 px-8 scroll-mt-[var(--nav-height)]"
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
