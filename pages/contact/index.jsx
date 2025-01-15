import { motion } from "framer-motion";
import Link from "next/link";
import { RiGithubLine, RiInstagramLine, RiTelegramLine } from "react-icons/ri";
import { fadeIn } from "../../variants";

const Contact = () => {
  const socialData = [
    {
      name: "Telegram",
      link: "https://t.me/timur_hs",
      Icon: RiTelegramLine,
    },
    {
      name: "GitHub",
      link: "https://github.com/Timur-hs",
      Icon: RiGithubLine,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/timur_tech/",
      Icon: RiInstagramLine,
    },
  ];

  return (
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & buttons */}
          <div className="flex flex-col w-full max-w-[700px] items-center">
            {/* text */}
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center mb-12"
            >
              Давайте <span className="text-accent">начнем проект!</span>
            </motion.h2>

            {/* description */}
            <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-12 xl:mb-16 text-center"
            >
              Если у вас есть идея для проекта или вы хотите обсудить сотрудничество, не стесняйтесь связаться со мной. Я всегда открыт для новых вызовов и готов помочь вам воплотить ваши идеи в жизнь.
            </motion.p>

            {/* social buttons */}
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col gap-6 w-full max-w-[400px]"
            >
              {socialData.map((social, i) => (
                  <Link
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  >
                    <social.Icon className="mr-2" />
                    <span>
                  {social.name === "GitHub"
                      ? "Мой GitHub"
                      : social.name === "Telegram"
                          ? "Написать в Telegram"
                          : "Мой Instagram"}
                </span>
                  </Link>
              ))}
            </motion.div>

            {/* additional info */}
            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mt-12 text-center"
            >
              <p className="text-sm text-white/70">
                Вы также можете отправить мне письмо на:{" "}
                <a
                    href="mailto:timur-Khasanov@yandex.ru"
                    className="text-accent hover:underline"
                >
                  timur-Khasanov@yandex.ru
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Contact;