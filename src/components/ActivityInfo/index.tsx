import AnimatedSection from "../AnimatedSection";
import infoData from "@/data/infoBlock.json";

type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  return (
    <h3
      className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-white after:to-transparent"
      style={{ textShadow: "0px 4px 5px #00000040" }}
    >
      {text}
    </h3>
  );
}

export default function ActivityInfo() {
  return (
    <div className="text-white py-16 mx-auto w-full z-20 pointer-events-none tracking-[1.6px]">
      <AnimatedSection
        baseClass="slide-in-left-start"
        animationClass="slide-in-left-end"
      >
        <div className="flex flex-col gap-3 mx-auto md:max-w-[864px] px-10 animate-fadeInLeft">
          <Title text="日程" />
          <div className="relative flex justify-between text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:opacity-30 h-[44px] items-end">
            <span className="text-[16px] self-start md:self-auto">
              前置工作坊
            </span>
            <span className="">2025/06/28 (六) - 06/29 (日) </span>
          </div>
          <div className="relative flex justify-between text-sm  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:opacity-30 h-[44px] items-end">
            <span className="text-[16px] self-start md:self-auto">
              正式工作坊
            </span>
            <span className="">2025/7/17 (四) - 07/20 (日) </span>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="my-22 py-2 flex gap-4 overflow-x-auto px-10 md:px-60 scrollbar-hidden  pointer-events-auto pb-6">
          <InfoCard
            name="前置工作坊"
            date="6/28 (六)"
            list={[
              "晶創人文介紹",
              "HCI介紹",
              "TA HiLight!",
              "演講 : 梁榮輝",
              "演講 : 孔博雯",
              "Workshop Orientation",
            ]}
          />
          <InfoCard
            name="前置工作坊"
            date="6/29 (日)"
            list={[
              "Arduino/推測設計與腦力風暴 (選修）",
              "XR 論壇 / AI 論壇 (選修）",
              "顧問交流",
              "TouchDesigner / 社會科學研究方法 (選修）",
            ]}
          />
          <InfoCard
            name="正式工作坊"
            date="7/17 (日)"
            list={["演講 : 曾元琦", "必選修課程", "期中提案", "學員討論"]}
          />
          <InfoCard
            name="正式工作坊"
            date="7/18 (日)"
            list={["演講 : 吳哲宇", "留學分享 : 洪鵬凱", "學員討論"]}
          />
          <InfoCard
            name="正式工作坊"
            date="7/19 (六)"
            list={["演講 : 曹筱玥", "學員討論"]}
          />
          <InfoCard
            name="正式工作坊"
            date="7/20 (日)"
            list={[
              "學員討論",
              "會場布置",
              "期末發表",
              "互動成果展示",
              "頒獎＆閉幕式",
            ]}
          />
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-20 mx-auto leading-relaxed md:max-w-[864px] px-10">
        {infoData.map((item, index) => (
          <AnimatedSection
            threshold={0.5}
            baseClass={`slide-in-${index % 4 < 2 ? "left" : "right"}-start`}
            animationClass={`slide-in-${index % 4 < 2 ? "left" : "right"}-end`}
            key={index}
          >
            <InfoBlock title={item.title} content={item.content} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection threshold={0.5}>
        <div className="mt-16 md:max-w-[864px] px-10 mx-auto">
          <h4
            className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-white"
            style={{ textShadow: "0px 4px 5px #00000040" }}
          >
            招生日程
          </h4>
          <div className="w-full max-w-[800px] mx-auto px-0 md:px-4 mt-16">
            <div className="relative w-full origin-top-left scale-100 sm:scale-95 xs:scale-[0.85]">
              <div className="absolute top-[13px] left-0 right-0 h-[12px] scale-y-50 md:scale-y-100 bg-gradient-to-r from-transparent via-white to-transparent z-0" />

              <div className="grid grid-cols-4 gap-2 z-10 text-center">
                <Step date="5/16" label="報名開始" />
                <Step date="5/28" label="報名結束" />
                <Step date="6/11" label="錄取名單公布" />
                <Step date="6/14" label="遞補備取通知" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

function InfoCard({
  name,
  date,
  list,
}: {
  name: string;
  date: string;
  list: string[];
}) {
  return (
    <div className="p-10 w-[298px] h-[348px] bg-[rgba(153,153,153,1)] flex flex-col items-center gap-3 shrink-0 drop-shadow-[12px_12px_0px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-1 font-bold self-start">
        <span className="text-2xl ">{name}</span>
        <span className="text-xl">{date}</span>
      </div>
      <div className="bg-gradient-to-r from-white via-transparent to-transparent w-[218px] h-0.5"></div>
      <ul className="list-disc self-start pl-4">
        {list.map((item) => (
          <li key={`date` + item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <Title text={title} />
      <p className="mt-4 leading-6 tracking-[1.6px]">{content}</p>
    </div>
  );
}

function Step({ date, label }: { date: string; label: string }) {
  return (
    <div className="relative flex flex-col items-center z-10">
      <div className="w-[18px] h-[18px] translate-y-2.5 md:translate-y-0 md:w-[38px] md:h-[38px] bg-white rounded-full mb-2"></div>
      <div className="md:font-medium text-2xl mt-3">{date}</div>
      <div className="md:font-medium text-base mt-2">{label}</div>
    </div>
  );
}
