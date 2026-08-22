import Image from "next/image";

const PHOTO_CARDS = [
  {
    title: "Hope for Families",
    copy: "Donations help provide practical care, meals, supplies, and steady support for families facing urgent needs.",
    image: "/images/hero-postcard.png",
  },
  {
    title: "Community Support",
    copy: "Every gift strengthens programs built around education, nutrition, training, and encouragement.",
    image: "/images/el-pescadero.png",
  },
  {
    title: "A Shared Mission",
    copy: "Touching Hope connects donors, volunteers, and partners with work that helps people move toward stability.",
    image: "/images/logo-transparent.png",
  },
];

export function DonationPhotoCards() {
  return (
    <section id="donation-stories" className="bg-[#FCF3E1] py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-sun-600">Donation Stories</span>
          <h2 className="mt-4 text-balance font-sans text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Charity in action, shown through{" "}
            <span className="font-script text-4xl text-leaf-800 sm:text-5xl">
              photo cards
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PHOTO_CARDS.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden border border-leaf-900/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-sand-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={
                    card.image.includes("logo")
                      ? "object-contain p-10"
                      : "object-cover"
                  }
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-ink-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/90">
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
