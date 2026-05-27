import Image from "next/image";

const producers = [
  {
    name: "marufarm",
    logo: "/logo-marufarm.png",
    logoAlt: "marufarm ロゴ",
    bagTint: "from-white/90 via-white/70 to-sky-100/30",
    vegetables: [
      "left-10 top-28 h-24 w-24 rounded-full bg-emerald-300/90",
      "left-24 top-20 h-16 w-16 rounded-full bg-emerald-400/90",
      "right-16 top-32 h-14 w-14 rounded-full bg-red-400/90",
      "right-10 top-44 h-24 w-10 rotate-[18deg] rounded-full bg-orange-300/90",
      "left-28 bottom-20 h-10 w-20 rounded-full bg-lime-300/80",
    ],
  },
  {
    name: "射水自然農園",
    logo: "/logo-imizu-natural-farm.png",
    logoAlt: "射水自然農園 ロゴ",
    bagTint: "from-white/90 via-white/75 to-amber-100/35",
    vegetables: [
      "left-8 top-34 h-14 w-14 rounded-full bg-rose-300/85",
      "left-28 top-18 h-18 w-18 rounded-full bg-red-300/85",
      "right-12 top-24 h-28 w-14 rotate-[-16deg] rounded-full bg-orange-300/85",
      "right-24 bottom-28 h-20 w-20 rounded-full bg-lime-300/80",
      "left-24 bottom-22 h-12 w-24 rounded-full bg-emerald-300/75",
    ],
  },
  {
    name: "はなわっか畑",
    logo: "/logo-hanawacca.jpg",
    logoAlt: "はなわっか畑 ロゴ",
    bagTint: "from-white/90 via-white/76 to-lime-100/35",
    vegetables: [
      "left-14 top-26 h-22 w-22 rounded-full bg-lime-300/85",
      "left-28 top-16 h-16 w-16 rounded-full bg-lime-400/82",
      "right-14 top-32 h-12 w-12 rounded-full bg-fuchsia-300/75",
      "right-24 top-18 h-20 w-20 rounded-full bg-emerald-300/82",
      "left-18 bottom-20 h-12 w-24 rounded-full bg-green-300/78",
    ],
  },
];

function StickerBadge({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-full border border-white/80 bg-white/96 shadow-[0_12px_24px_rgba(8,42,74,0.12)] ${className ?? ""}`}
    >
      <div className="relative h-full w-full">
        <Image alt={alt} className="object-contain p-2" fill sizes="120px" src={src} />
      </div>
    </div>
  );
}

function BrandSeal({ className }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-full border-[3px] border-sagittarius-navy bg-white shadow-[0_12px_24px_rgba(8,42,74,0.16)] ${className ?? ""}`}
    >
      <div className="relative h-full w-full">
        <Image
          alt="水のサジタリオ ブランドシール"
          className="object-contain p-2"
          fill
          sizes="140px"
          src="/brand-logo.png"
        />
      </div>
    </div>
  );
}

export function ProducerStickerShowcase() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/85 p-6 shadow-soft md:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {producers.map((producer) => (
          <article
            className="rounded-[1.4rem] border border-sagittarius-water/40 bg-[linear-gradient(180deg,rgba(248,252,251,0.96),rgba(234,245,248,0.84))] p-5 shadow-line"
            key={producer.name}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="serif-heading text-xl font-semibold text-sagittarius-navy">{producer.name}</p>
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-sagittarius-gold">
                PRODUCER
              </span>
            </div>

            <div className="relative mx-auto min-h-[24rem] max-w-[20rem]">
              <div className="absolute bottom-0 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-sagittarius-navy/10 blur-xl" />
              <div
                className={`absolute inset-x-2 bottom-4 top-6 rounded-[2rem] border border-white/85 bg-gradient-to-b ${producer.bagTint} backdrop-blur-[2px]`}
              />
              <div className="absolute inset-x-10 top-2 h-10 rounded-b-[1.2rem] border-x border-b border-white/85 bg-white/38" />
              <div className="absolute inset-x-5 bottom-8 top-16 rounded-[1.8rem] border border-white/60 bg-white/10">
                {producer.vegetables.map((shape) => (
                  <span className={`absolute ${shape}`} key={shape} />
                ))}
                <div className="absolute inset-x-7 bottom-10 top-20 rounded-[1.4rem] bg-white/12" />
              </div>

              <StickerBadge
                alt={producer.logoAlt}
                className="absolute left-5 top-10 h-24 w-24 md:h-28 md:w-28"
                src={producer.logo}
              />
              <BrandSeal className="absolute bottom-10 right-4 h-28 w-28 md:h-32 md:w-32" />
            </div>

            <p className="mt-4 text-sm leading-7 text-sagittarius-ink/72">
              透明袋の中に、野菜本来の色と表情をそのまま。生産者のロゴと水のサジタリオのシールが並ぶことで、
              それぞれの畑の個性が共通の世界観の中でやわらかく結ばれます。
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
