import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import countdownBg from "@/assets/countdown-bg-landscape.jpg";

import { Reveal } from "./Reveal";
import { CornerFrame, SectionHeading } from "./Ornament";

function getTimeLeft(targetDate: string) {
  const target = new Date(targetDate).getTime();

  if (Number.isNaN(target)) {
    console.error("Invalid wedding date:", targetDate);

    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const numberClass =
  "text-3xl font-normal tracking-wide text-[#fff8ef] drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:text-5xl";

const labelClass =
  "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#e8cf9a] drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)] sm:mt-2 sm:text-sm sm:tracking-[0.25em]";
export function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(wedding.dateISO)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(wedding.dateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-transparent px-0 py-6 sm:px-6 sm:py-20"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      {/* Background image wrapper: fixed shape so the whole design stays visible */}
      <div className="relative mx-auto flex aspect-[16/10] w-full items-center justify-center overflow-hidden sm:aspect-[16/9] sm:max-w-3xl">
        <img
          src={countdownBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-fill sm:object-cover"
        />

        <div className="relative z-10 mx-auto w-full max-w-md px-8 py-6 text-center sm:px-16 sm:py-12">
          <CornerFrame />

          {/* Heading is scaled down on mobile only */}
          <div className="[zoom:0.6] sm:[zoom:1]">
            <Reveal>
              <SectionHeading
                title="The Celebration Begins"
                script
              />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-3 sm:mt-10">
              <div className="grid grid-cols-4 gap-2 sm:mt-8 sm:gap-4">
                <div>
                  <p className={numberClass}>{timeLeft.days}</p>
                  <p className={labelClass}>Days</p>
                </div>

                <div>
                  <p className={numberClass}>{timeLeft.hours}</p>
                  <p className={labelClass}>Hours</p>
                </div>

                <div>
                  <p className={numberClass}>{timeLeft.minutes}</p>
                  <p className={labelClass}>Minutes</p>
                </div>

                <div>
                  <p className={numberClass}>{timeLeft.seconds}</p>
                  <p className={labelClass}>Seconds</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* Time line - light gold */}
            <p className="mt-3 text-center text-[0.65rem] font-medium italic text-[#e8cf9a] drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)] sm:mt-8 sm:text-sm">
              {wedding.time}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}