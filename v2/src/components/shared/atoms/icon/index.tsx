import React from "react";

import {
  IoCloseOutline,
  IoMenuOutline,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoReddit,
  IoLogoGithub,
  IoLogoLinkedin,
  IoCopyOutline,
} from "react-icons/io5";

const icons = {
  close: IoCloseOutline,
  menu: IoMenuOutline,
  twitter: IoLogoTwitter,
  facebook: IoLogoFacebook,
  reddit: IoLogoReddit,
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  copy: IoCopyOutline,
};

type Props = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  onClick?: () => void;
};

export default function Icon({ color, name, size, onClick }: Props) {
  const Component = icons[name];

  return <Component color={color} size={`${size}px`} onClick={onClick} />;
}
