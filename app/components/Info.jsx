import { nanoid } from "nanoid";
import { useStore } from "../store";

export default function Info({ location, website, twitter, company }) {
  const darkMode = useStore((store) => store.darkMode);

  const splitUrl = website.split("www.");

  const info = [
    {
      title: location,
      link: "none",
      image: darkMode ? "/location_light.svg" : "/location_dark.svg",
    },
    {
      title: website.includes("www.") ? splitUrl[1] : website,
      link: website.includes("http") ? website : `https://${website}`,
      image: darkMode ? "/weblink_light.svg" : "/weblink_dark.svg",
    },
    {
      title: twitter,
      link: `https://www.twitter.com/${twitter}`,
      image: darkMode ? "/twitter_logo_light.svg" : "/twitter_logo_dark.svg",
    },
    {
      title: company,
      link: "none",
      image: darkMode ? "/organization_light.svg" : "/organization_dark.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {info.map((info) => (
        <div key={nanoid()}>
          {info.title === null || info.link === "https://" ? (
            <div className="grid grid-cols-info gap-4">
              <div>
                <img
                  className="h-[20px] object-contain"
                  src={info.image}
                  alt={info.image}
                />
              </div>
              <h2 className="w-full">Not Available</h2>
            </div>
          ) : (
            <>
              {info.link === "none" ? (
                <div className="grid grid-cols-info gap-4">
                  <div>
                    <img
                      className="h-[20px] object-contain"
                      src={info.image}
                      alt={info.image}
                    />
                  </div>
                  <h2 className="w-full">{info.title}</h2>
                </div>
              ) : (
                <a
                  href={info.link}
                  target="_blank"
                  className="grid grid-cols-info gap-4"
                >
                  <div>
                    <img
                      className="h-[20px] object-contain"
                      src={info.image}
                      alt={info.image}
                    />
                  </div>
                  <h2 className="w-full">{info.title}</h2>
                </a>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
