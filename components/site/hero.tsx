export function Hero() {
  return (
    <section
      id="top"
      className="flex items-center justify-center overflow-hidden bg-[#FCF3E1] px-4 pb-6 pt-24 md:min-h-screen md:px-0 md:pb-0 md:pt-20"
    >
      <div className="w-full overflow-hidden border border-leaf-900/10 bg-[#FCF3E1] shadow-sm md:border-0 md:bg-transparent md:shadow-none">
        <img
          src="/images/hero-postcard.png"
          alt="Touching Hope Cares"
          className="block aspect-[4/3] w-full object-contain md:aspect-auto md:max-h-[calc(100svh-5rem)]"
        />
      </div>
    </section>
  );
}
