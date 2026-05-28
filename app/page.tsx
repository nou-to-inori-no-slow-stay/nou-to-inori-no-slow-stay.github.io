"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Coffee,
  Droplets,
  Flame,
  Flower2,
  Gift,
  Heart,
  Leaf,
  MapPin,
  Moon,
  Mountain,
  Sprout,
  Stars,
  Users,
  Utensils,
  Wine,
} from "lucide-react";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    icon: <Sprout className="h-6 w-6" />,
    title: "田んぼの土と、祈りの器づくり",
    text: "marufarmの田んぼの土を一部練り込んだ粘土で、旅の記憶を宿す器をつくる陶芸体験。",
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "土の器で食べる自然栽培米のおむすび",
    text: "同じ田んぼで育った自然栽培米を、土の記憶を宿した器で味わう象徴的な食体験。",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "朝火のコーヒー時間",
    text: "朝の焚火を囲み、豆を挽き、湯を沸かし、静けさの中で一日を始める時間。",
  },
  {
    icon: <Flower2 className="h-6 w-6" />,
    title: "朝露のバラ摘みと香りの祈り",
    text: "朝露の残るバラを摘み、香りを深く吸い込みながら、心身をやさしく開いていく。",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "へちまの浄化クラフト",
    text: "へちまのたわしやリース、肌をほどくケア体験を通して、土に還る暮らしを感じる。",
  },
  {
    icon: <Flame className="h-6 w-6" />,
    title: "自然栽培野菜とジビエの星火BBQ",
    text: "畑の恵みと山の命を、火を囲みながらいただく。地元の人と語り合う夜のクライマックス。",
  },
];

const itinerary = [
  {
    day: "Day 1",
    theme: "水と土に迎えられる日",
    items: [
      "チェックイン・水のサジタリオの物語",
      "畑の入口の儀式・土に触れる時間",
      "整う夕食｜自然栽培野菜のスープと小さなおむすび",
      "焚火のローカルナイト｜地元の人と語る夜",
    ],
  },
  {
    day: "Day 2",
    theme: "香りを摘み、土を器にし、火で味わう日",
    items: [
      "朝露のバラ摘み",
      "朝火のコーヒー時間",
      "土の器で食べる自然栽培米のおむすび",
      "匠の里で田んぼの土とバラの陶芸体験",
      "自然栽培野菜の畑ピザ",
      "へちまの浄化クラフト",
      "自然栽培野菜とジビエの星火BBQ",
      "星火の語らい｜農家・猟師・地域の人と語る",
    ],
  },
  {
    day: "Day 3",
    theme: "整った自分を日常へ持ち帰る日",
    items: [
      "朝散歩・水の一杯",
      "引き算の朝ごはん",
      "へちまで肌をほどく時間",
      "種まき・苗植え・未来への一矢",
      "水のサジタリオ・ファームバーガー",
      "クロージング・お土産のお渡し",
    ],
  },
];

const foodMenu = [
  "自然栽培米のおむすび",
  "自然栽培野菜の畑ピザ",
  "自然栽培野菜とジビエの星火BBQ",
  "イノシシ・シカなどのジビエ料理",
  "水のサジタリオ・ファームバーガー",
  "バラソーダ・ローズティー",
  "へちま茶・季節のハーブドリンク",
];

const included = [
  "2泊3日のリトリート体験",
  "期間中の食事・ドリンク",
  "陶芸・バラ・へちま関連体験",
  "農業体験・焚火体験",
  "地元の人との交流時間",
  "水のサジタリオ野菜BOX",
  "参加者が制作した器の後日発送",
  "リトリートノート",
];

const heroStats = [
  {
    icon: <CalendarDays className="h-5 w-5" />,
    label: "期間",
    value: "2泊3日",
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "定員",
    value: "1日1組限定",
  },
  {
    icon: <Gift className="h-5 w-5" />,
    label: "料金",
    value: "1組10万円〜",
  },
];

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
};

function SectionTitle({ eyebrow, title, body, light = false }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className={`mb-3 text-sm font-semibold tracking-[0.28em] ${light ? "text-amber-300" : "text-amber-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-slate-200" : "text-slate-700"}`}>
          {body}
        </p>
      ) : null}
    </motion.div>
  );
}

type PillarProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function Pillar({ icon, title, text }: PillarProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="leading-7 text-slate-700">{text}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f1e7] text-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(180,119,62,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(21,38,62,0.22),transparent_38%)]" />
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/50 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-28">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-800/20 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
              <Stars className="h-4 w-4" />
              水のサジタリオ presents
            </div>
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 md:text-7xl">
              農と祈りの
              <br />
              リトリート
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
              水・土・火・香りに還る、2泊3日。射水市水戸田・青井谷を舞台に、自然栽培の食、田んぼの土の器、焚火、バラ、へちま、地元の人との語らいを味わう農泊ウェルネスツアー。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                モニター相談をする
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/15 bg-white/70 px-7 py-4 text-base font-semibold text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                旅程を見る
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 text-center sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    {stat.icon}
                  </div>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-1 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/70 bg-white/45 p-4 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                  alt="里山の夕暮れと農泊リトリートのイメージ"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="mb-2 text-sm tracking-[0.22em] text-amber-200">RETREAT IN IMIZU</p>
                  <p className="text-2xl font-semibold leading-snug">土の器、朝摘みのバラ、星火の語らい。</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white p-5 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Signature</p>
                  <p className="font-semibold">星火BBQ</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-14">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-amber-300">CONCEPT</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                土を器に。米を祈りに。火を語らいに。
              </h2>
            </div>
            <div className="text-lg leading-9 text-slate-200">
              <p>
                marufarmの田んぼの土を使って器をつくり、同じ田んぼで育った自然栽培米をおむすびにして味わう。朝は焚火でコーヒーを淹れ、夜は火を囲んで地元の人と語り合う。
              </p>
              <p className="mt-5">
                農作業を体験するだけではなく、食べること、つくること、祈ることをもう一度丁寧に取り戻す。水のサジタリオが届ける、射水の水と土に還るための2泊3日です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="SEVEN ELEMENTS"
          title="水・土・米・火・香り・命・浄化"
          body="この旅は、観光地を巡るツアーではありません。射水の土地にある素材を、五感で受け取り直すための体験です。"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <Pillar
            icon={<Droplets className="h-6 w-6" />}
            title="水"
            text="射水の水、朝の一杯、炊きたての米、ローズティー。身体の内側から整える入口。"
          />
          <Pillar
            icon={<Sprout className="h-6 w-6" />}
            title="土"
            text="田んぼの土に触れ、その土を器にする。食卓の根っこにあるものを思い出す時間。"
          />
          <Pillar
            icon={<Utensils className="h-6 w-6" />}
            title="米"
            text="自然栽培米のおむすびを、土の器で味わう。最もシンプルで、最も深い食体験。"
          />
          <Pillar
            icon={<Flame className="h-6 w-6" />}
            title="火"
            text="朝火のコーヒー、夜の星火BBQ。火を囲むことで、言葉と沈黙がほどけていく。"
          />
          <Pillar
            icon={<Flower2 className="h-6 w-6" />}
            title="香り"
            text="朝露のバラ摘み、ローズドリンク、香りのクラフト。感性をひらく華やぎ。"
          />
          <Pillar
            icon={<Mountain className="h-6 w-6" />}
            title="命"
            text="自然栽培野菜とジビエ。畑と里山の恵みを通して、いただきますの意味を味わう。"
          />
        </div>
      </section>

      <section className="bg-white/55 px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="EXPERIENCE"
          title="この旅でしか味わえない体験"
          body="体験の一つひとつが、食卓・暮らし・地域の人へとつながっていきます。"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="rounded-3xl border border-slate-950/10 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e4cf] text-amber-800">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="leading-7 text-slate-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
              alt="焚火と料理のイメージ"
              className="h-[540px] w-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-amber-700">FOOD EXPERIENCE</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              山の命と畑の恵みを、火でいただく。
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              旅の食事は、豪華さよりも「物語のある食卓」を大切に。自然栽培米、自然栽培野菜、バラ、へちま、ジビエを組み合わせ、射水の水と土から生まれる食体験として提供します。
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
              <Wine className="h-4 w-4" />
              季節の香りを閉じ込めたドリンクもご用意します
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {foodMenu.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="itinerary" className="bg-slate-950 px-6 py-20 text-white md:px-10">
        <SectionTitle
          eyebrow="2 NIGHTS 3 DAYS"
          title="旅の流れ"
          body="水と土に迎えられ、香りを摘み、火を囲み、整った自分を日常へ持ち帰る2泊3日。"
          light
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {itinerary.map((day, index) => (
            <motion.div
              key={day.day}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-sm backdrop-blur"
            >
              <div className="mb-5 inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-slate-950">
                {day.day}
              </div>
              <h3 className="mb-6 text-2xl font-semibold">{day.theme}</h3>
              <ul className="space-y-4 text-slate-200">
                {day.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-amber-700">PLAN</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              1日1組限定。深く味わうための農泊リトリート。
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              少人数だからこそ、農家、陶芸、地域の人、食卓との距離が近くなる。大量集客ではなく、ひと組に合わせて編集する高付加価値型の体験です。
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-slate-950/10 bg-white p-8 shadow-xl md:p-10"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-amber-700">RETREAT PLAN</p>
                <h3 className="mt-2 text-2xl font-semibold">農と祈りのリトリート</h3>
              </div>
              <div className="rounded-2xl bg-[#f2e4cf] px-4 py-3 text-left sm:text-right">
                <p className="text-sm text-slate-600">1組</p>
                <p className="text-2xl font-bold">¥100,000〜</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#faf6ee] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <p className="text-sm font-medium leading-6 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-500">
              ※ 宿泊場所、季節の作物、バラ・へちま体験の内容、ジビエの種類は時期や受入体制により調整します。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white/55 px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="LOCATION"
          title="舞台は、射水市水戸田・青井谷エリア"
          body="田んぼ、畑、陶芸、里山、人の営みが近い距離で重なる場所。水のサジタリオの世界観を、地域全体で体験するためのフィールドです。"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            { icon: <MapPin className="h-5 w-5" />, label: "射水市水戸田・青井谷" },
            { icon: <Sprout className="h-5 w-5" />, label: "自然栽培の田んぼと畑" },
            { icon: <Heart className="h-5 w-5" />, label: "匠の里での陶芸体験" },
            { icon: <Users className="h-5 w-5" />, label: "地元の人との語らい" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                {item.icon}
              </div>
              <p className="font-semibold leading-7">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reserve" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-center text-white shadow-2xl md:p-14">
          <Moon className="mx-auto mb-6 h-12 w-12 text-amber-300" />
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">まずは、モニター1組から。</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-slate-200">
            季節、参加者の属性、地域の受入体制に合わせて内容を調整しながら、最初の1組限定モニターとして実施する想定です。写真、感想、改善点を集め、正式販売へつなげます。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@example.com?subject=%E8%BE%B2%E3%81%A8%E7%A5%88%E3%82%8A%E3%81%AE%E3%83%AA%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 text-base font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              相談する
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#itinerary"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              旅程をもう一度見る
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-950/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-slate-950">水のサジタリオ presents 農と祈りのリトリート</p>
          <p>© Mizuno Sagittario Retreat. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
