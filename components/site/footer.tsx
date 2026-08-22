import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink-900 pb-8 pt-16 text-sand-50/80">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-transparent.png"
              alt="Touching Hope logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sun-400">
                Touching
              </span>
              <span className="-mt-1 font-script text-xl text-leaf-100">
                Hope
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Bringing hope &amp; healing to women and children in Los Cabos,
            Mexico through education, training, work, nutrition, and
            empowerment.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sun-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#vision" className="hover:text-white">Our Vision</a></li>
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#donation-stories" className="hover:text-white">Donation Stories</a></li>
            <li><a href="#videos" className="hover:text-white">Videos</a></li>
            <li><a href="#get-involved" className="hover:text-white">Get Involved</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sun-400">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-100" />
              Los Cabos, Baja California Sur, Mexico
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf-100" />
              hello@touchinghope.org
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Touching Hope on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sun-500 hover:text-leaf-950"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Touching Hope on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sun-500 hover:text-leaf-950"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-12 border-t border-white/10 pt-6 text-xs text-sand-50/50">
        © {new Date().getFullYear()} Touching Hope. All rights reserved.
      </div>
    </footer>
  );
}
