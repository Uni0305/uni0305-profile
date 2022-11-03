import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
  icon: string;
  href: string;
};

export default function LinkedIcon({ icon, href }: Props) {
  return (
    <Link href={href} target="_blank">
      <Icon
        className="h-4 sm:h-6 invert dark:invert-0"
        icon={icon}
        color="#fff"
        height="100%"
      />
    </Link>
  );
}
