import Image from "next/image";

export default function Footer() {
  const years1 = [2009, 2011, 2012, 2013, 2014, 2015, 2016].reverse();
  const years2 = [2017, 2018, 2019, 2021, 2022, 2023, 2024].reverse();
  const social_media = [
    { name: "facebook", link: "https://www.facebook.com/openhci/" },
    { name: "ig", link: "https://www.instagram.com/open.hci/" },
    { name: "gmail", link: "mailto:publicity@openhci.com" },
  ];

  return (
    <footer className="bg-black text-xl flex  flex-col items-center justify-center py-10 px-8">
      <div className="grid md:grid-cols-2 gap-7 pt-10 pb-20">
        <div className="border rounded hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5733421489876!2d121.52578452530939!3d25.014609727828976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96d81548897%3A0xea8b69a832961f94!2z6Ie65aSn5Ym15paw6Kit6KiI5a246Zmi!5e0!3m2!1szh-TW!2stw!4v1746896497027!5m2!1szh-TW!2stw"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="info flex flex-col gap-3 items-center">
          <div className="social-media flex justify-center gap-3">
            {social_media.map(({ name, link }) => (
              <a href={link} key={name}>
                <Image
                  width={36}
                  height={36}
                  src={`/footer圖片/${name}.svg`}
                  alt={link}
                />
              </a>
            ))}
          </div>
          <div className="copyright font-bold">
            © 2025 OPENHCI. All rights reserved
          </div>
          <div className="history-links text-[14px] flex flex-col justify-center">
            <div className="flex">
              {years2.map((y, i) => (
                <div key={y} className="flex">
                  <a
                    href={`https://www.${y}.openhci.com`}
                    className="underline"
                  >
                    {y}
                  </a>
                  {i < years1.length - 1 && <span className="px-2"> / </span>}
                </div>
              ))}
            </div>

            <div className="flex">
              {years1.map((y, i) => (
                <div key={y} className="flex">
                  <a
                    href={`https://www.${y}.openhci.com`}
                    className="underline"
                  >
                    {y}
                  </a>
                  {i < years1.length - 1 && <span className="px-2"> / </span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
