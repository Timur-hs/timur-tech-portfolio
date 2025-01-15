import Link from "next/link";

import {
  RiGithubLine,
  RiInstagramLine,
  RiTelegramLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/Timur-hs",
    Icon: RiGithubLine,
  },
  {
    name: "Telegram",
    link: "https://t.me/timur_hs",
    Icon: RiTelegramLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/timur_tech/",
    Icon: RiInstagramLine,
  },
];

const Socials = () => {
  return (
      <div className="flex items-center gap-x-5 text-lg">
        {socialData.map((social, i) => (
            <Link
                key={i}
                title={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                className={`${
                    social.name === "GitHub"
                        ? "bg-accent rounded-full p-[5px] hover:text-white"
                        : "hover:text-accent"
                } transition-all duration-300`}
            >
              <social.Icon aria-hidden />
              <span className="sr-only">{social.name}</span>
            </Link>
        ))}
      </div>
  );
};

export default Socials;