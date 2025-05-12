import Image from "next/image";

export default function WorkshopIntro() {
  return (
    <div className="text-base text-white py-16 text-justify md:max-w-[800px] tracking-[1.6px]">
      <div className="flex flex-col gap-20 space-y-16 mx-auto md:text-base leading-relaxed">
        <div className="flex flex-col gap-3">
          <h3
            className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-white after:to-transparent"
            style={{ textShadow: "0px 4px 5px #00000040" }}
          >
            主題介紹
          </h3>
          <Image
            src="/workshopIntro/topics.png"
            alt="topics"
            width={796}
            height={200}
            className="w-full h-auto mb-4 mix-blend-multiply"
          />
          <p className="">
            Agency
            是我們在環境中行動與決策的能力。在疫苗、蒸汽機、網際網路的時代，這個詞就已被重新定義一次。
            而如今，當 AI
            與晶片快速滲透進每個人生活，我們又站在另一個轉折點。本屆特別與「晶創人文計畫」合作，從臺灣晶片製造地位出發，邀請學員一同探索
            2049 的未來敘事。
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3
            className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-white after:to-transparent"
            style={{ textShadow: "0px 4px 5px #00000040" }}
          >
            什麼是人機互動？
          </h3>
          <p>
            人機互動（Human Computer
            Interaction，HCI）是一個跨資訊、工程、社會科學、行為科學、藝術設計等領域的交叉研究領域。
            這個詞描述的是人類與各種互動型科技之間的關係與設計問題，涵蓋從使用者體驗、介面設計，到科技對社會影響的探討。
          </p>
          <p>
            在全球，人機互動領域的發展由電腦協會 ACM SIGCHI（Special Interest
            Group on Computer-Human
            Interaction）領導推進，並且持續影響著學術界、產業界以及日常生活中科技設計的思考方式。
          </p>
        </div>

        {/* 關於 OpenHCI */}
        <div className="flex flex-col gap-3">
          <h3
            className="relative text-2xl font-medium mb-2 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-white after:to-transparent"
            style={{ textShadow: "0px 4px 5px #00000040" }}
          >
            關於 OpenHCI
          </h3>

          <p>
            OpenHCI
            是台灣最早以「人機互動」為核心的學生自主工作坊，聚集來自資訊、設計、社會科學等背景的學生，跨域合作、共同實作。
          </p>
          <p>
            自 2010
            年起舉辦至今，每年由新一屆的學生團隊重新籌劃，邀請來自不同學界與業界的講者參與指導。活動強調的是實際動手做、集體討論，以及在過程中質疑、打破、重新想像科技與人的關係。
          </p>
          <p>
            在
            OpenHCI，我們相信，最好的學習不是接受標準答案，而是自己提出問題，自己、一起找答案。
          </p>
        </div>
      </div>
    </div>
  );
}
