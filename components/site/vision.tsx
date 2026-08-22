import { WaveDivider } from "@/components/site/wave-divider";

export function Vision() {
  return (
    <section id="vision" className="relative bg-leaf-950 py-24 text-sand-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow text-sun-400">Our Vision</span>
          <p className="mt-6 text-balance font-sans text-2xl font-semibold leading-[1.5] sm:text-3xl">
            To invest in the lives of persons through{" "}
            <span className="text-sun-400">education</span>,{" "}
            <span className="text-sun-400">vocational training</span>,{" "}
            <span className="text-sun-400">work opportunities</span>,{" "}
            <span className="text-sun-400">nutrition</span>, and{" "}
            <span className="text-sun-400">empowerment</span> — helping them
            become self-reliant, productive citizens for the good of their
            community and society.
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-sun-400/60" />
          <p className="mx-auto mt-8 max-w-xl text-sm text-leaf-100/80">
            Every program we run traces back to this single idea: lasting
            change starts with people who have the tools to build it
            themselves.
          </p>
        </div>
      </div>
      <WaveDivider className="absolute -bottom-px" fill="fill-sand-50" />
    </section>
  );
}
