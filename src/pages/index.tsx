import { NextSeo } from "next-seo";
import { Player } from "@/components/Player";
import { useEffect, useRef, useState } from "react";
import { getRandomInt } from "@/utils";
import { banners } from "@/app/data";
import Image from "next/image";

export default function IndexPage() {
  return (
    <article className="h-full w-full">
      <NextSeo title="Geneva Radio" />
      <div className="h-full w-full relative">
        <section className="h-full w-full absolute inset-0 m-auto z-[1]">
          <Banners />
        </section>
        <section className="h-full w-full absolute inset-0 m-auto z-[2] flex justify-center items-center">
          <Player />
        </section>
      </div>
    </article>
  );
}

const Banners = () => {
  const getRandomBanner = () => getRandomInt(0, 17);
  const ref = useRef<HTMLVideoElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="h-full w-full overflow-hidden relative">
      <div className="absolute inset-0 m-auto h-full w-full z-[1] backdrop-blur-[24px]" />
      <div className="absolute inset-0 m-auto h-full w-full z-[-1]">
        <div className="h-full w-full relative">
          <Image
            alt={`banner-${currentIndex + 1}`}
            className="object-cover"
            fill
            src={banners[currentIndex].poster}
          />
        </div>
      </div>
      <video
        autoPlay
        className="h-full w-full object-cover"
        muted
        playsInline
        ref={ref}
        poster={banners[currentIndex].poster}
        src={banners[currentIndex].url}
        onEnded={() => {
          setCurrentIndex(getRandomBanner());
          ref.current?.play();
        }}
      />
    </div>
  );
};
