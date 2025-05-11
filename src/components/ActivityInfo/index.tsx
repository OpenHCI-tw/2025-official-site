export default function ActivityInfo() {
  return (
    <div className="text-white py-16 mx-auto w-full md:max-w-[800px]">
      <div className="flex flex-col gap-3 mx-auto">
        <h3
          className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-white after:to-transparent"
          style={{ textShadow: "0px 4px 5px #00000040" }}
        >
          日程
        </h3>
        <div className="relative flex justify-between text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:opacity-30">
          <span>前置作坊</span>
          <span>2025/06/21 (六) - 06/22 (日) </span>
        </div>
        <div className="relative flex justify-between text-sm  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:opacity-30">
          <span>正式工作坊</span>
          <span>2025/06/21 (六) - 06/22 (日) </span>
        </div>
      </div>

      <div className="overflow-x-auto mx-auto my-12 px-4">
        <div className="flex gap-4">
          <div className="w-[395px] h-[498px] bg-[#D9D9D9] shrink-0"></div>
          <div className="w-[395px] h-[498px] bg-[#D9D9D9] shrink-0"></div>
          <div className="w-[395px] h-[498px] bg-[#D9D9D9] shrink-0"></div>
        </div>
      </div>

      <div className="flex flex-col gap-20 mx-auto leading-relaxed">
        <InfoBlock
          title="地點"
          content="台大卓越創新大樓 (100台北市中正區思源街18號)"
        />
        <InfoBlock
          title="費用"
          content="為推廣 HCI 學門，本活動免報名費，僅收取保證金、保險費用及其他費用。 獲得錄取資格之學員，請於指定時間內繳交各項費用，繳費後方能取得正式資格。為維持完整學習體驗，工作坊實行每日簽到，學員需全程參與以獲得保證金全額退還。"
        />
        <InfoBlock
          title="報名資格"
          content="全國各大專院校升大三以上在學生，含學碩博應屆畢業生及碩博新生。"
        />
        <InfoBlock
          title="報名方式"
          content="一律填寫線上表單報名。活動以報名資料填寫內容作為錄取參考依據，報名先後順序不列入計分標準。"
        />
      </div>

      <div className="mt-16">
        <h4
          className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-white"
          style={{ textShadow: "0px 4px 5px #00000040" }}
        >
          招生日程
        </h4>
        <div className="w-full max-w-[800px] mx-auto px-4 mt-16">
          <div className="relative w-full origin-top-left scale-100 sm:scale-95 xs:scale-[0.85]">
            <div className="absolute top-[13px] left-0 right-0 h-[12px] bg-gradient-to-r from-transparent via-white to-transparent z-0" />

            <div className="grid grid-cols-4 gap-2 z-10">
              <Step date="6/24" label="報名開始" />
              <Step date="6/24" label="報名結束" />
              <Step date="6/24" label="錄取名單公布" />
              <Step date="6/24" label="遞補備取通知" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4
        className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-white"
        style={{ textShadow: "0px 4px 5px #00000040" }}
      >
        {title}
      </h4>
      <p className="mt-4 leading-6 tracking-[10%]">{content}</p>
    </div>
  );
}

function Step({ date, label }: { date: string; label: string }) {
  return (
    <div className="relative flex flex-col items-center z-10">
      <div className="w-[38px] h-[38px] bg-white rounded-full mb-2"></div>
      <div className="font-medium text-2xl mt-3">{date}</div>
      <div className="font-medium text-base mt-2">{label}</div>
    </div>
  );
}
