import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import countdownBg from "@/assets/countdown-bg.jpg";

import { Reveal } from "./Reveal";

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
  "tabular text-2xl font-light leading-none text-[#4d1f29] sm:text-4xl";

const labelClass =
  "mt-1.5 text-[0.45rem] font-medium uppercase tracking-[0.18em] text-[#a7833d] sm:mt-2 sm:text-[0.62rem]";

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

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f2ebe1] px-0 py-6 sm:px-6 sm:py-16">
      {/* 4:3 on mobile (sides crop evenly, ribbon frame stays visible),
          16:9 on larger screens (the full image) */}
      <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] sm:max-w-3xl">
        {/* Background image */}
        <img
          src={countdownBg}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover object-center"
        />

        {/* Content, centered inside the ribbon frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] text-center sm:w-[52%]">
            <Reveal>
              <h3 className="font-script text-2xl leading-tight text-[#4d1f29] sm:text-5xl">
                The Celebration Begins
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-3 grid grid-cols-4 sm:mt-7">
                {units.map((u, i) => (
                  <div
                    key={u.label}
                    className={`px-1 ${
                      i > 0 ? "border-l border-[#b8934a]/40" : ""
                    }`}
                  >
                    <p className={numberClass}>{u.value}</p>
                    <p className={labelClass}>{u.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Time line */}
              <p className="mt-3 text-[0.6rem] font-medium italic text-[#702b3b] sm:mt-7 sm:text-sm">
                {wedding.time}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}