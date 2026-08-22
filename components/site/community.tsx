import { Heart } from "lucide-react";

import { WaveDivider } from "@/components/site/wave-divider";

export function Community() {
  return (
    <section id="community" className="relative bg-leaf-50 py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 -z-10 rotate-2 rounded-[1.75rem] bg-sun-200/60" />
          <img
            src="/images/hero-postcard.png"
            alt="Touching Hope team members and children in Los Cabos, Mexico"
            className="w-full -rotate-2 rounded-[1.5rem] border-4 border-white shadow-xl transition-transform duration-500 hover:rotate-0"
          />
        </div>

        <div>
          <span className="section-eyebrow text-sun-600">
            <Heart className="h-3.5 w-3.5 fill-current" />
            Who We Serve
          </span>
          <h2 className="mt-4 text-balance font-sans text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Women and children at the heart of{" "}
            <span className="font-script text-leaf-800">every story</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            In Los Cabos, we walk alongside mothers, children, and families
            who are ready to build a different future. Through hands-on
            programs and real relationships, we meet immediate needs while
            equipping each person with the tools to stand on their own —
            for good.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Mentorship", "School support", "Family meals", "Skills classes", "Job placement", "Community care"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-leaf-100 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-leaf-800"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
