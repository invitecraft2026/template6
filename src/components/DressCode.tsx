import partyImg from "@/assets/dresscode-party.webp";
import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function DressCode() {
  return (
    <section
      className="relative bg-transparent px-4 py-16 sm:px-6 sm:py-20"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md text-center">
        <Reveal>
          <SectionHeading eyebrow="What to wear" title="Dress Code" />
        </Reveal>

        <Reveal delay={0.1}>
          <img
            src={partyImg}
            alt="Wedding party in burgundy, blush and champagne under a floral arch"
            loading="lazy"
            width={1100}
            height={1459}
            className="mx-auto mt-8 h-auto w-full drop-shadow-[0_10px_18px_rgba(77,31,41,0.15)]"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xs font-serif text-base italic leading-relaxed text-[#513640] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-lg">
            {wedding.dressCode.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}