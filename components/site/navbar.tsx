"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#vision", label: "Our Vision" },
  { href: "#programs", label: "Programs" },
  { href: "#donation-stories", label: "Stories" },
  { href: "#videos", label: "Videos" },
  { href: "#get-involved", label: "Get Involved" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-sand-50/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo-transparent.png"
            alt="Touching Hope logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold uppercase tracking-wide text-sun-600">
              Touching
            </span>
            <span className="-mt-1 font-script text-2xl text-leaf-800">
              Hope
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-ink-700 transition-colors hover:text-leaf-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="default">
            <a href="#get-involved">Donate</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-leaf-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-sand-50 lg:hidden">
          <ul className="container flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink-700 hover:bg-leaf-100 hover:text-leaf-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <a href="#get-involved" onClick={() => setOpen(false)}>
                  Donate
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
