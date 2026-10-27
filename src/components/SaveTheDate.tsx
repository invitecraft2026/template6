import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import countdownBg from "@/assets/countdown-bg-vertical.png";

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

/** Vertical position of the text block on the image (50 = exact center).
 *  Lower it to move the text up, raise it to move the text down. */
const CONTENT_Y = 50;

const numberClass =
  "tabular font-light leading-none text-[#4d1f29]";

const labelClass =
  "font-medium uppercase text-[#a7833d]";

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
    <section className="relative overflow-hidden bg-[#f2ebe1] px-6 py-10 sm:py-16">
      {/* The image decides the height, so the whole design is always visible.
          Change max-w to make it bigger or smaller. Text sizes use cqw
          (1cqw = 1% of this box's width), so they scale with the image. */}
      <div
        className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem]"
        style={{ containerType: "inline-size" }}
      >
        {/* Background image */}
        <img
          src={countdownBg}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none block h-auto w-full select-none"
        />

        {/* Content, centered inside the ribbon frame */}
        <div
          className="absolute left-1/2 text-center"
          style={{
            top: `${CONTENT_Y}%`,
            width: "72cqw",
            translate: "-50% -50%",
          }}
        >
          <Reveal>
            <h3
              className="font-script text-balance leading-[1.1] text-[#4d1f29]"
              style={{ fontSize: "8.5cqw" }}
            >
              The Celebration Begins
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="grid grid-cols-4"
              style={{ marginTop: "4cqw" }}
            >
              {units.map((u, i) => (
                <div
                  key={u.label}
                  className={i > 0 ? "border-l border-[#b8934a]/40" : ""}
                >
                  <p className={numberClass} style={{ fontSize: "7.5cqw" }}>
                    {u.value}
                  </p>
                  <p
                    className={labelClass}
                    style={{
                      fontSize: "max(6px, 1.9cqw)",
                      letterSpacing: "0.12em",
                      marginTop: "1.6cqw",
                    }}
                  >
                    {u.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* Time line */}
            <p
              className="font-medium italic text-[#702b3b]"
              style={{ fontSize: "max(9px, 3cqw)", marginTop: "4cqw" }}
            >
              {wedding.time}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}