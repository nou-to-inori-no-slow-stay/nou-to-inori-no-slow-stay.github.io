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
  "土の器で味わう炊きたての野菜料理",
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
  { icon: <CalendarDays className="h-5 w-5" />, label: "期間", value: "2泊3日" },
  { icon: <Users className="h-5 w-5" />, label: "定員", value: "1日1組限定" },
  { icon: <Gift className="h-5 w-5" />, label: "料金", value: "1組10万円〜" },
];

const locationItems = [
  { icon: <MapPin className="h-5 w-5" />, label: "射水市水戸田・青井谷" },
  { icon: <Sprout className="h-5 w-5" />, label: "自然栽培の田んぼと畑" },
  { icon: <Heart className="h-5 w-5" />, label: "匠の里での陶芸体験" },
  { icon: <Users className="h-5 w-5" />, label: "地元の人との語らい" },
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
      <p className={`mb-3 text-sm font-semibold ${light ? "text-emerald-200" : "text-teal-700"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-slate-200" : "text-slate-700"}`}>{body}</p>
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
      className="border border-teal-900/10 bg-white/85 p-6 shadow-[0_20px_70px_rgba(5,34,45,0.08)] backdrop-blur"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-950 to-teal-900 text-emerald-100 shadow-lg shadow-teal-950/20">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="leading-7 text-slate-700">{text}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8f5] text-slate-950">
      <section className="relative min-h-[88svh] overflow-hidden bg-slate-950 text-white">
        <img
          src="/meditation-field.png"
          alt="畑の上で瞑想しているリトリート参加者のイメージ"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,18,27,0.92)_0%,rgba(3,42,52,0.72)_46%,rgba(10,69,58,0.38)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/25 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
            <a href="#top" className="font-semibold text-emerald-50">
              水のサジタリオ
            </a>
            <nav aria-label="ページ内ナビゲーション" className="hidden items-center gap-7 text-sm text-white/80 md:flex">
              <a href="#experience" className="transition hover:text-emerald-200">
                体験
              </a>
              <a href="#itinerary" className="transition hover:text-emerald-200">
                旅程
              </a>
              <a href="#reserve" className="transition hover:text-emerald-200">
                相談
              </a>
            </nav>
          </div>
        </div>

        <div id="top" className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl items-end px-6 pb-14 pt-28 md:px-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.75 }} className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-emerald-200/30 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur">
              <Stars className="h-4 w-4" />
              水のサジタリオ presents
            </div>
            <h1 className="text-5xl font-semibold leading-[1.08] text-white md:text-7xl">
              農と祈りの
              <br />
              リトリート
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-emerald-50/90 md:text-xl">
              水・土・火・香りに還る、2泊3日。射水市水戸田・青井谷を舞台に、自然栽培の食、田んぼの土の器、焚火、バラ、へちま、地元の人との語らいを味わう農泊ウェルネスツアー。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-emerald-950/25 transition hover:-translate-y-0.5 hover:bg-white"
              >
                モニター相談をする
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                旅程を見る
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-teal-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-teal-900/10 md:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-7 md:px-10">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-800">
                {stat.icon}
              </div>
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-1 text-xl font-semibold text-slate-950">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold text-teal-700">CONCEPT</p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">深い青に沈み、緑の気配でほどけていく。</h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="border-l border-teal-900/20 pl-6 text-lg leading-9 text-slate-700 md:pl-10"
          >
            <p>
              marufarmの田んぼの土を使って器をつくり、同じ田んぼで育った自然栽培米をおむすびにして味わう。朝は焚火でコーヒーを淹れ、夜は火を囲んで地元の人と語り合う。
            </p>
            <p className="mt-5">
              農作業を体験するだけではなく、食べること、つくること、祈ることをもう一度丁寧に取り戻す。水のサジタリオが届ける、射水の水と土に還るための2泊3日です。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-[0_28px_90px_rgba(5,34,45,0.14)]"
          >
            <img src="/meditation-field.png" alt="畑の上で瞑想しているリトリート参加者のイメージ" className="h-[520px] w-full object-cover" />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.08 }}>
            <p className="mb-3 text-sm font-semibold text-teal-700">PRAYER LANDSCAPE</p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">畑の上で、呼吸をそろえる。</h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              朝の光と土の匂いに包まれながら、ただ座って呼吸を整える時間。観光でも修行でもない、土地の気配に自分をひらいていく静かな入口です。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              食べることやつくることの前に、まず身体と心をほどく。この風景が、旅全体のトーンをやわらかく定めてくれます。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold text-teal-700">ROSE GATHERING</p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">朝露をまとったバラを、自分の手で摘む。</h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              光がやわらかいうちに畑へ入り、香りのいちばん豊かな瞬間をすくい上げるように花を摘んでいく体験です。籠に少しずつ集まる色と香りが、旅の記憶そのものになっていきます。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              摘んだバラはドリンクや香りの時間へとつながり、見るだけでは終わらない「持ち帰れる余韻」をつくります。
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="overflow-hidden shadow-[0_28px_90px_rgba(5,34,45,0.14)]"
          >
            <img src="/rose-harvest.png" alt="バラ畑で花を摘む参加者のイメージ" className="h-[520px] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eaf3ee] px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="SEVEN ELEMENTS"
          title="水・土・米・火・香り・命・浄化"
          body="この旅は、観光地を巡るツアーではありません。射水の土地にある素材を、五感で受け取り直すための体験です。"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <Pillar icon={<Droplets className="h-6 w-6" />} title="水" text="射水の水、朝の一杯、炊きたての米、ローズティー。身体の内側から整える入口。" />
          <Pillar icon={<Sprout className="h-6 w-6" />} title="土" text="田んぼの土に触れ、その土を器にする。食卓の根っこにあるものを思い出す時間。" />
          <Pillar icon={<Utensils className="h-6 w-6" />} title="米" text="自然栽培米のおむすびを、土の器で味わう。最もシンプルで、最も深い食体験。" />
          <Pillar icon={<Flame className="h-6 w-6" />} title="火" text="朝火のコーヒー、夜の星火BBQ。火を囲むことで、言葉と沈黙がほどけていく。" />
          <Pillar icon={<Flower2 className="h-6 w-6" />} title="香り" text="朝露のバラ摘み、ローズドリンク、香りのクラフト。感性をひらく華やぎ。" />
          <Pillar icon={<Mountain className="h-6 w-6" />} title="命" text="自然栽培野菜とジビエ。畑と里山の恵みを通して、いただきますの意味を味わう。" />
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-20 md:px-10">
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
              className="border border-teal-900/10 bg-[#fbfdfb] p-7 shadow-[0_18px_55px_rgba(5,34,45,0.06)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-900 text-emerald-100">{item.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="leading-7 text-slate-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f4f8f4_0%,#edf5ef_100%)] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-[0_28px_90px_rgba(5,34,45,0.14)]"
          >
            <img
              src="/morning-fire-coffee.png"
              alt="朝の焚火を囲みながらコーヒーを味わう時間のイメージ"
              className="h-[560px] w-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="mb-3 text-sm font-semibold text-teal-700">MORNING FIRE COFFEE</p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              朝の火を囲み、
              <br />
              一杯のコーヒーで呼吸を整える。
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              夜明けの冷たい空気の中で火を起こし、豆を挽き、湯を沸かす。手を動かしながら静けさに身を置くことで、
              一日のはじまりがゆっくりと深くなる。農の現場にいるからこそ味わえる、贅沢で素朴な朝の時間です。
            </p>
            <div className="mt-7 inline-flex items-center gap-2 border border-teal-900/15 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <Coffee className="h-4 w-4" />
              焚火、ドリップ、会話、沈黙がひとつの体験になる朝
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-teal-900/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-teal-700">火を囲む時間</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  まだ言葉が少ない朝に、火の音と香りを感じながら、参加者同士の距離がやわらかく近づいていきます。
                </p>
              </div>
              <div className="border border-teal-900/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-teal-700">一杯を淹れる所作</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  豆を挽き、お湯を注ぎ、器を手に取る。そのひとつひとつが、日常へ持ち帰れる整え方として残ります。
                </p>
              </div>
            </div>
          </motion.div>
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
            className="overflow-hidden shadow-[0_28px_90px_rgba(5,34,45,0.16)]"
          >
            <img
              src="/food-experience-onigiri.png"
              alt="自然栽培の食と香りの体験イメージ"
              className="h-[520px] w-full object-cover"
            />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="mb-3 text-sm font-semibold text-teal-700">FOOD EXPERIENCE</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">旅の時間に寄り添う、土地の食卓。</h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              旅の食体験は、一度きりの豪華な夕食ではなく、朝から夜までゆるやかにつながる流れとして設計されています。自然栽培米、畑の野菜、土の器、バラやへちまの香りが、身体と気分を少しずつ整えていきます。
            </p>
            <div className="mt-7 inline-flex items-center gap-2 border border-teal-900/15 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <Wine className="h-4 w-4" />
              季節の香りを閉じ込めたドリンクもご用意します
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {foodMenu.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-teal-900/10 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#07161b] px-6 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
          >
            <img src="/satoyama-bbq.png" alt="自然栽培野菜とジビエを囲む里山BBQのイメージ" className="h-[540px] w-full object-cover" />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.08 }}>
            <p className="mb-3 text-sm font-semibold text-emerald-200">SATOYAMA BBQ</p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">自然栽培の野菜と、里山のジビエを火でひらく。</h2>
            <p className="mt-5 text-lg leading-9 text-slate-200">
              畑で育ったみずみずしい野菜と、その土地の循環のなかにあるジビエを一つの火に集める、夜のハイライトです。焼き上がる香り、脂の音、野菜の甘みが重なり合って、食卓そのものが土地の物語になります。
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-emerald-200">畑の恵み</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">採れたての自然栽培野菜を、その場で焼いて味わうシンプルで贅沢な体験。</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-emerald-200">山の命</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">イノシシやシカなどのジビエを通して、いただくことの輪郭を静かに感じ直す時間。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="itinerary" className="bg-[#061a23] px-6 py-20 text-white md:px-10">
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
              className="border border-emerald-100/12 bg-white/[0.06] p-7 shadow-sm backdrop-blur"
            >
              <div className="mb-5 inline-flex border border-emerald-200/35 bg-emerald-100 px-4 py-2 text-sm font-bold text-slate-950">
                {day.day}
              </div>
              <h3 className="mb-6 text-2xl font-semibold">{day.theme}</h3>
              <ul className="space-y-4 text-slate-200">
                {day.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-200" />
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold text-teal-700">PLAN</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">1日1組限定。深く味わうための農泊リトリート。</h2>
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
            className="border border-teal-900/10 bg-white p-8 shadow-[0_28px_90px_rgba(5,34,45,0.12)] md:p-10"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-teal-700">RETREAT PLAN</p>
                <h3 className="mt-2 text-2xl font-semibold">農と祈りのリトリート</h3>
              </div>
              <div className="border border-emerald-900/10 bg-[#edf8f1] px-4 py-3 text-left sm:text-right">
                <p className="text-sm text-slate-600">1組</p>
                <p className="text-2xl font-bold">¥100,000〜</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-[#f6faf7] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
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

      <section className="bg-white px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="LOCATION"
          title="舞台は、射水市水戸田・青井谷エリア"
          body="田んぼ、畑、陶芸、里山、人の営みが近い距離で重なる場所。水のサジタリオの世界観を、地域全体で体験するためのフィールドです。"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {locationItems.map((item) => (
            <div key={item.label} className="border border-teal-900/10 bg-[#fbfdfb] p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-emerald-100">{item.icon}</div>
              <p className="font-semibold leading-7">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reserve" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl bg-[#061a23] p-8 text-center text-white shadow-[0_32px_100px_rgba(5,34,45,0.24)] md:p-14">
          <Moon className="mx-auto mb-6 h-12 w-12 text-emerald-200" />
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">まずは、モニター1組から。</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-slate-200">
            季節、参加者の属性、地域の受入体制に合わせて内容を調整しながら、最初の1組限定モニターとして実施する想定です。写真、感想、改善点を集め、正式販売へつなげます。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@example.com?subject=%E8%BE%B2%E3%81%A8%E7%A5%88%E3%82%8A%E3%81%AE%E3%83%AA%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-7 py-4 text-base font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
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

      <footer className="border-t border-teal-900/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-slate-950">水のサジタリオ presents 農と祈りのリトリート</p>
          <p>© Mizuno Sagittario Retreat. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
