import { months } from "../months";
import { Stats, Info } from ".";

export default function Profile({ data }) {
  const splitString = data.created_at.split("T")[0].split("-");
  const date = `Joined ${splitString[2]} ${months[splitString[1]]} ${
    splitString[0]
  }`;

  return (
    <div className="flex items-start gap-12 w-full">
      <a href={data.html_url} target="_blank" className="hidden lg:block">
        <img
          src={data.avatar_url}
          alt={`${data.name}-avatar`}
          className="rounded-full aspect-square max-w-none w-[150px]"
        />
      </a>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full items-center gap-6">
            <a href={data.html_url} target="_blank" className="lg:hidden">
              <img
                src={data.avatar_url}
                alt={`${data.name}-avatar`}
                className="rounded-full aspect-square max-w-none w-[100px] md:w-[125px]"
              />
            </a>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
              <div>
                <h1 className="font-bold text-[24px]">
                  {data.name === null ? data.login : data.name}
                </h1>
                <h2 className="text-blue text-[14px] py-1">@{data.login}</h2>
              </div>
              <p className="text-[14px]">{date}</p>
            </div>
          </div>
        </div>
        <p className="py-6 lg:pb-12 text-[15px]">
          {data.bio === null ? "No bio found" : data.bio}
        </p>
        <Stats
          repos={data.public_repos}
          followers={data.followers}
          following={data.following}
        />
        <Info
          location={data.location}
          website={data.blog}
          twitter={data.twitter_username}
          company={data.company}
        />
      </div>
    </div>
  );
}
