import { nanoid } from "nanoid";
import { useStore } from "../store";

export default function Stats({ repos, followers, following }) {
  const darkMode = useStore((store) => store.darkMode);

  const stats = [
    {
      title: "Repos",
      value: repos,
    },
    {
      title: "Followers",
      value: followers,
    },
    {
      title: "Following",
      value: following,
    },
  ];

  return (
    <div className={`${darkMode ? "bg-dark-blue" : ""} flex justify-between w-full py-6 lg:mb-12 md:px-10 px-6 rounded-xl mb-6 shadow-3xl`}>
      {stats.map((stat) => (
        <div className="md:flex-1 flex flex-col gap-1" key={nanoid()}>
          <h4 className="text-[13px]">{stat.title}</h4>
          <h3 className="font-bold text-[20px] text-center md:text-left">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}
