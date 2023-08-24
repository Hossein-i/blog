import React from "react";
import GitHubIcon from "@/icons/github";
import LinkedInIcon from "@/icons/linkedin";
import TelegramIcon from "@/icons/telegram";
import TwitterIcon from "@/icons/twitter";

const Icon = (name: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    Twitter: <TwitterIcon />,
    Telegram: <TelegramIcon />,
  };

  return icons[name];
};

export default Icon;
