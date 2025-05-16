"use client";

type CardProps = {
  name: string;
  date: string;
  list: string[];
};
export default function ScrollArea() {
  // InfoCard組件定義
  const InfoCard = ({ name, date, list }: CardProps) => (
    <div className="flex-shrink-0 w-64 h-80 bg-white rounded-xl shadow-md p-4">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <h4 className="text-lg text-gray-600 mb-4">{date}</h4>
      <ul className="space-y-2">
        {list.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // 活動資訊數據
  const cardsData = [
    {
      name: "前置工作坊",
      date: "6/28 (六)",
      list: [
        "晶創人文介紹",
        "HCI介紹",
        "TA HiLight!",
        "演講 : 梁容輝",
        "演講 : 孔博雯",
        "Workshop Orientation",
      ],
    },
    {
      name: "前置工作坊",
      date: "6/29 (日)",
      list: [
        "Arduino / 推測設計與腦力風暴 (選修）",
        "XR 論壇 / AI 論壇 (選修）",
        "顧問交流",
        "TouchDesigner / 社會科學研究方法 (選修）",
      ],
    },
    {
      name: "正式工作坊",
      date: "7/17 (日)",
      list: ["演講 : 曾元琦", "必選修課程", "期中提案", "學員討論"],
    },
    {
      name: "正式工作坊",
      date: "7/18 (日)",
      list: ["演講 : 吳哲宇", "留學分享 : 洪鵬凱", "學員討論"],
    },
    {
      name: "正式工作坊",
      date: "7/19 (六)",
      list: ["演講 : 曹筱玥", "學員討論"],
    },
    {
      name: "正式工作坊",
      date: "7/20 (日)",
      list: [
        "學員討論",
        "會場布置",
        "期末發表",
        "互動成果展示",
        "頒獎＆閉幕式",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-10 pointer-events-auto">
      {/* 自定義滾動條樣式 */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* 這個類用來隱藏滾動條但保留滾動功能 */
        .scrollable-content {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .scrollable-content::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      {/* 主容器 */}
      <div className="relative w-full">
        {/* 實際內容容器 - 滾動但不顯示滾動條 */}
        <div className="overflow-x-auto scrollable-content">
          <div className="flex gap-4 py-2 pb-6">
            {cardsData.map((card, index) => (
              <InfoCard
                key={index}
                name={card.name}
                date={card.date}
                list={card.list}
              />
            ))}
          </div>
        </div>

        {/* 滾動條容器 - 只顯示滾動條 */}
        <div
          className="custom-scrollbar absolute bottom-0 left-1/2 transform -translate-x-1/2"
          style={{
            width: "80%",
            height: "8px",
            overflow: "auto",
            pointerEvents: "none",
          }}
        >
          {/* 虛擬內容，用於匹配主內容寬度以產生正確的滾動條長度 */}
          <div
            id="scrollbar-content"
            style={{ width: "1000px", height: "1px" }}
          ></div>
        </div>
      </div>

      {/* 連接兩個滾動區域的腳本 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const contentScroller = document.querySelector('.scrollable-content');
            const scrollbarScroller = document.querySelector('.custom-scrollbar');
            
            // 獲取實際內容寬度並設置給滾動條容器的虛擬內容
            const actualContentWidth = contentScroller.scrollWidth;
            document.getElementById('scrollbar-content').style.width = actualContentWidth + 'px';
            
            // 內容滾動時同步滾動條位置
            contentScroller.addEventListener('scroll', function() {
              scrollbarScroller.scrollLeft = contentScroller.scrollLeft;
            });
            
            // 啟用滾動條的鼠標事件
            scrollbarScroller.style.pointerEvents = 'auto';
            
            // 滾動條滾動時同步內容位置
            scrollbarScroller.addEventListener('scroll', function() {
              contentScroller.scrollLeft = scrollbarScroller.scrollLeft;
            });
          });
        `,
        }}
      />
    </div>
  );
}
