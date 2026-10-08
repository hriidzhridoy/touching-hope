"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const MIN_MS = 3600;
const FADE_MS = 600;
const SLOGANS = [
  "Your gift can be someone's turning point.",
  "Small acts of giving, lifelong change.",
  "Give hope. Change a family's future.",
];
const SLOGAN_MS = Math.round(MIN_MS / SLOGANS.length);

export function Preloader() {
  const [phase, setPhase] = React.useState<"show" | "hide" | "gone">("show");

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();
    let timer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const wait = Math.max(0, MIN_MS - (Date.now() - start));
      timer = setTimeout(() => {
        setPhase("hide");
        document.body.style.overflow = "";
        timer = setTimeout(() => setPhase("gone"), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "preloader fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-leaf-900 transition-all ease-in-out",
        phase === "hide"
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="relative flex h-40 w-40 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full bg-sun-500/40"
          style={{ animation: "preloader-ring 1.8s ease-out infinite" }}
        />
        <span
          className="absolute inset-0 rounded-full bg-sun-500/30"
          style={{ animation: "preloader-ring 1.8s ease-out 0.9s infinite" }}
        />
        <div
          className="relative flex h-28 w-28 items-center justify-center rounded-full bg-sand-50 shadow-2xl"
          style={{ animation: "preloader-float 2.4s ease-in-out infinite" }}
        >
          <Image
            src="/images/logo-transparent.png"
            alt=""
            width={80}
            height={80}
            priority
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center leading-tight">
        <span className="text-sm font-extrabold uppercase tracking-[0.35em] text-sun-400">
          Touching
        </span>
        <span className="-mt-1 font-script text-5xl text-sand-50">Hope Cares</span>
      </div>

      <div className="relative mt-6 h-14 w-full max-w-xs px-6 text-center">
        {SLOGANS.map((text, i) => (
          <p
            key={text}
            className="absolute inset-x-6 text-base font-semibold leading-snug text-sand-50/90 opacity-0"
            style={{
              animation: `preloader-slogan ${SLOGAN_MS}ms ease-in-out ${i * SLOGAN_MS}ms both`,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-leaf-700/60">
        <div
          className="h-full origin-left rounded-full bg-sun-500"
          style={{
            animation: `preloader-bar ${MIN_MS}ms cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        />
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 h-24 w-[200%] text-leaf-800"
        style={{ animation: "preloader-wave 6s linear infinite" }}
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 50 Q150 0 300 50 T600 50 T900 50 T1200 50 V100 H0Z"
        />
      </svg>
    </div>
  );
}
