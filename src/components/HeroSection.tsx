import { motion } from "framer-motion";
import { wedding } from "@/config/wedding";

import floralBackground from "@/assets/last_frame_from_Burgundy_velvet.png";

export function HeroSection({ start }: { start: boolean }) {
  // Fades the last 56px of the background into the page, so the hero has no hard bottom edge
  const fadeBottom =
    "linear-gradient(to bottom, #000 calc(100% - 56px), transparent 100%)";

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-transparent">
      {/* Floral background: white base + image, bottom edge faded out */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-white"
        style={{
          WebkitMaskImage: fadeBottom,
          maskImage: fadeBottom,
        }}
      >
        <img
          src={floralBackground}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Optional subtle ivory overlay for text readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 16,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-sm"
        >
          <p className="tracking-luxe text-[0.62rem] font-medium uppercase text-[#7a5a14] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-xs">
            {wedding.welcomeLine}
          </p>

          <h1 className="font-script mt-3 text-[2.75rem] leading-[1.05] text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-[3.5rem]">
            {wedding.welcomeTitle}
          </h1>

          <p className="mt-2 text-xs font-medium italic tracking-wide text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
            {wedding.welcomeJoin}
          </p>

          <div className="mt-3 flex flex-col items-center">
            <h2 className="font-script text-5xl leading-none text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-6xl">
              {wedding.bride.firstName}
            </h2>

            <span className="font-script -my-1 text-xl text-[#8a6a1c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-2xl">
              &amp;
            </span>

            <h2 className="font-script text-5xl leading-none text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-6xl">
              {wedding.groom.firstName}
            </h2>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute inset-x-0 bottom-10 mx-auto max-w-sm"
        >
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
            Scroll to discover
          </p>

          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-auto mt-2 text-[#7a5a14]"
            animate={start ? { y: [0, 6, 0] } : { y: 0 }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}