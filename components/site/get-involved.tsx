import { HandCoins, HandHeart, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WAYS = [
  {
    icon: HandCoins,
    title: "Donate",
    copy: "Your gift funds classroom supplies, vocational tools, meals, and mentorship — directly supporting the five pillars of our work.",
    cta: "Give Now",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    copy: "Share your time and skills — tutoring, trade expertise, or hands-on help — with families in Los Cabos and El Pescadero.",
    cta: "Join Us",
  },
  {
    icon: Handshake,
    title: "Partner",
    copy: "Churches, businesses, and organizations can partner with us to expand programs and open new community offices.",
    cta: "Start a Partnership",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-leaf-900 py-24 text-sand-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-sun-400">Get Involved</span>
          <h2 className="mt-4 text-balance font-sans text-3xl font-extrabold sm:text-4xl">
            Be part of someone&rsquo;s{" "}
            <span className="font-script text-4xl text-sun-400 sm:text-5xl">
              turning point
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WAYS.map((way) => (
            <Card
              key={way.title}
              className="flex flex-col border-none bg-leaf-800/60 text-sand-50 ring-1 ring-leaf-700/60"
            >
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-sun-500 text-leaf-950">
                  <way.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <CardTitle className="text-sand-50">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm leading-relaxed text-leaf-100/85">
                  {way.copy}
                </p>
                <Button asChild variant="onDark" className="mt-6 w-fit">
                  <a href="#newsletter">{way.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
