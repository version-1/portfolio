import React from "react";

import { IoCloseOutline } from "react-icons/io5";

const icons = {
  close: IoCloseOutline,
};

type Props = {
  name: keyof typeof icons;
  size?: number;
  onClick?: () => void;
};

export default function Icon({ name, size, onClick }: Props) {
  const Component = icons[name];

  return <Component size={`${size}px`} onClick={onClick} />;
}
