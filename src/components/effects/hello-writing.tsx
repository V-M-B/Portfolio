"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { profile, type Greeting } from "@/data/profile";

// Original cursive "hello", one continuous stroke (viewBox 0 0 420 180).
const HELLO_PATH =
  "M20 148 C45 140 85 105 98 62 C106 34 92 18 80 34 C68 52 66 105 64 150 " +
  "C70 125 88 106 104 108 C120 110 120 132 120 150 C124 156 136 156 150 148 " +
  "C168 138 188 122 184 110 C180 98 158 100 152 116 C146 132 156 152 178 152 " +
  "C198 152 214 138 224 120 C236 96 252 58 248 38 C244 20 226 24 226 52 " +
  "C226 90 228 128 238 146 C246 158 262 152 272 136 C284 112 300 58 296 38 " +
  "C292 20 274 24 274 52 C274 90 276 128 286 146 C294 158 310 154 322 140 " +
  "C330 126 340 112 356 110 C336 108 324 150 348 153 C372 156 382 114 356 110 " +
  "C368 106 384 110 400 104";

const EASE = [0.45, 0.1, 0.3, 1] as const;
const DRAW = 2.2; // seconds to draw the English stroke (matches .hello-draw in globals.css)
const WRITE = 1.1; // seconds to write in the other greetings
const HOLD = 1.6; // seconds each greeting stays fully written
const FADE = 0.35; // crossfade between greetings

const FONT_BY_SCRIPT: Record<Greeting["script"], string> = {
  latin: "var(--font-script), cursive",
  devanagari: "var(--font-devanagari), var(--font-script), cursive",
  kannada: "var(--font-kannada), sans-serif",
  japanese: '"Hiragino Maru Gothic ProN", "Yu Gothic UI", "Yu Gothic", "Meiryo", sans-serif',
};

/** Drawn by CSS (.hello-draw) so it starts on first paint, before React hydrates. */
function HelloStroke() {
  return (
    <svg viewBox="0 0 420 180" className="h-full w-auto" aria-hidden="true">
      <path
        className="hello-draw"
        d={HELLO_PATH}
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth={13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WrittenGreeting({ greeting }: { greeting: Greeting }) {
  return (
    <motion.span
      lang={greeting.lang}
      className={
        greeting.script === "latin"
          ? "block whitespace-nowrap px-3 py-6 text-[56px] leading-none font-bold sm:text-[76px]"
          : "block whitespace-nowrap px-3 py-6 text-[40px] leading-none font-bold sm:text-[54px]"
      }
      style={{ fontFamily: FONT_BY_SCRIPT[greeting.script] }}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: WRITE, ease: EASE }}
    >
      {greeting.text}
    </motion.span>
  );
}

/** Apple-style "hello" that writes itself, then cycles through greetings in other languages. */
export function HelloWriting() {
  const reduce = useReducedMotion();
  const greetings = profile.greetings;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const showFor = (index === 0 ? DRAW : WRITE) + HOLD;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % greetings.length), showFor * 1000);
    return () => window.clearTimeout(t);
  }, [index, reduce, greetings.length]);

  const current = reduce ? greetings[0] : greetings[index];

  return (
    <div
      role="img"
      aria-label={greetings[0].text}
      className="pointer-events-none relative h-[84px] text-foreground select-none min-[600px]:h-[100px]"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current.text}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: FADE } }}
        >
          {current.lang === "en" ? <HelloStroke /> : <WrittenGreeting greeting={current} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
