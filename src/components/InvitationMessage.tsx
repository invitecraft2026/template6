import { wedding } from "@/config/wedding";
import backgroundimage from "@/assets/Burgundy and Gold Floral Invitation Frame.png";

import { Reveal } from "./Reveal";

export function InvitationMessage() {
  return (
    <section className="px-0 py-6 sm:px-6 sm:py-16">
      <div
        className="relative mx-auto aspect-[2/3] w-full max-w-none bg-no-repeat sm:max-w-lg"
        style={{
          backgroundImage: `url("${backgroundimage}")`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* Text area: padded to sit inside the cream panel, between the ornaments */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[17%] py-[19%] text-center">
          <Reveal>
            <p className="text-[0.55rem] font-semibold uppercase leading-loose tracking-[0.22em] text-[#6b2937] sm:text-xs">
              You are invited to the
              <br />
              <span className="text-[#9b7737]">{wedding.welcomeTitle}</span> of
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-script mt-3 text-4xl leading-tight text-[#4d1f29] sm:mt-5 sm:text-5xl">
              {wedding.bride.firstName}
            </h3>
            <p className="mx-auto mt-1 max-w-xs text-[0.5rem] font-medium uppercase leading-[1.8] tracking-[0.1em] text-[#66574a] sm:mt-2 sm:text-[0.65rem]">
              {wedding.bride.parents}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="font-script my-2 text-2xl italic text-[#a7833d] sm:my-3 sm:text-3xl">&</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-script text-4xl leading-tight text-[#4d1f29] sm:text-5xl">
              {wedding.groom.firstName}
            </h3>
            <p className="mx-auto mt-1 max-w-xs text-[0.5rem] font-medium uppercase leading-[1.8] tracking-[0.1em] text-[#66574a] sm:mt-2 sm:text-[0.65rem]">
              {wedding.groom.parents}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mx-auto mt-4 max-w-sm text-[0.7rem] leading-[1.7] text-[#513640] sm:mt-6 sm:text-sm">
              {wedding.invitationMessage}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="font-script mx-auto mt-3 max-w-sm text-lg italic leading-relaxed text-[#702b3b] sm:mt-5 sm:text-2xl">
              {wedding.quote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
