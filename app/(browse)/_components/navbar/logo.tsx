import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75">
        <div className="bg-white rounded-full p-1">
          <Image
            src="/spooky.svg"
            alt="Twitchie"
            height="32"
            width="32"
          />
        </div>
        <div className={cn(
          "flex flex-col items-center",
          font.className,
        )}>
          <p className="text-xl font-semibold">
            Twitchie
          </p>
          <p className="text-sm text-muted-foreground">
            Let&apos;s play
          </p>
        </div>
      </div>
    </Link>
  );
};