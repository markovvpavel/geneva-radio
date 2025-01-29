import { Theme } from "@/types";
import Image from "next/image";

export const Logo = ({ theme }: { theme: Theme }) => (
  <Image
    alt="asterisk"
    className="h-[134px] w-auto"
    height={0}
    priority
    src={`/images/asterisk-${theme}.svg`}
    width={0}
  />
);
