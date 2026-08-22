import { GraduationCap, Hammer, Briefcase, Apple, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Education",
    copy: "Classroom support, tutoring, and school resources that keep children and adults building the knowledge they need to grow.",
  },
  {
    icon: Hammer,
    title: "Vocational Training",
    copy: "Hands-on skills training in trades and crafts that open real, lasting career paths for young people and adults alike.",
  },
  {
    icon: Briefcase,
    title: "Work Opportunities",
    copy: "Connections to fair employment and small-business support so families can earn a stable, dignified income.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    copy: "Meals and nutrition education that meet a basic, urgent need — because a healthy body is the foundation for everything else.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    copy: "Mentorship and community that build confidence, so every person we serve leads their own path forward.",
  },
];

export function Pillars() {
  return (
    <section id="programs" className="bg-sand-50 pb-24 pt-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-sun-600">How We Help</span>
          <h2 className="mt-4 text-balance font-sans text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Five pillars, one goal:{" "}
            <span className="font-script text-4xl text-leaf-800 sm:text-5xl">
              self-reliance
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Card
              key={pillar.title}
              className={
                "group border-none bg-white/80 shadow-sm ring-1 ring-leaf-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-sun-300" +
                (i === 4 ? " sm:col-span-2 lg:col-span-1" : "")
              }
            >
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-800 text-sand-50 transition-colors duration-300 group-hover:bg-sun-600">
                  <pillar.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <CardTitle className="text-ink-900">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-ink-700/90">
                  {pillar.copy}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
