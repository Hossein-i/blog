import React from "react";
import GitHubIcon from "@/icons/github";
import LinkedInIcon from "@/icons/linkedin";

const Icon = (name: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
  };

  return icons[name];
};

export default Icon;
