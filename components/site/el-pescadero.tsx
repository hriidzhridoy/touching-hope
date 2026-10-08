import { Badge } from "@/components/ui/badge";

export function ElPescadero() {
  return (
    <section id="el-pescadero" className="bg-sand-50 py-24">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="lg:order-2">
            <Badge variant="sun">Coming in 2025</Badge>
            <h2 className="mt-4 text-balance font-sans text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Tocando la{" "}
              <span className="font-script text-4xl text-leaf-800 sm:text-5xl">
                Esperanza
              </span>
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-tide-600">
              El Pescadero, BCS
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              Our next Touching Hope Cares office is on its way to El Pescadero —
              a farming and fishing community just up the coast from Los
              Cabos. The new office will sit inside Flora de Pescadero, a
              growing residential community, putting our programs even
              closer to the families who need them.
            </p>
            <p className="mt-4 rounded-xl border-l-4 border-sun-500 bg-sun-50 px-4 py-3 text-sm italic text-ink-700">
              &ldquo;La oficina Touching Hope Cares estará ubicada dentro de la
              lujosa comunidad de hogares Flora de Pescadero que llegará a
              El Pescadero en 2025.&rdquo;
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:order-1">
            <div className="absolute -inset-4 -z-10 -rotate-2 rounded-[1.75rem] bg-leaf-200/70" />
            <img
              src="/images/el-pescadero.png"
              alt="Aerial view of farmland and coastline in El Pescadero, Baja California Sur"
              className="w-full rotate-1 rounded-[1.5rem] border-4 border-white shadow-xl transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
