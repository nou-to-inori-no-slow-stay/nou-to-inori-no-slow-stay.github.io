import { BrandGoods } from "@/components/BrandGoods";
import { Logo } from "@/components/Logo";
import { ProducerCard } from "@/components/ProducerCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";

const navItems = [
  ["理念", "#concept"],
  ["物語", "#story"],
  ["商品", "#products"],
  ["生産者", "#producers"],
  ["マルシェ", "#marche"],
  ["お問い合わせ", "#contact"],
];

const coreValues = [
  {
    label: "水脈",
    title: "射水。水を射るという名の地。",
    text: "霊峰立山の雪解け水は地下を巡り、長い時間をかけて浄化され、この土地に湧き出します。水が矢のように駆け抜ける、その清流こそが野菜の起源です。",
  },
  {
    label: "星読",
    title: "星と土の対話。",
    text: "古代、農は星や月のリズムと共にありました。自然のサイクルに耳を澄ませることで、作物は本来の生命力を宿し、野菜は軽やかな力を取り戻します。",
  },
  {
    label: "養土",
    title: "傷ついた大地を癒やす「手」。",
    text: "自然栽培は、肥料や農薬に頼らず土本来の力を取り戻す引き算の農法。土を癒やすことが、食べる人の心身を整えることへとつながっていきます。",
  },
];

const products = [
  {
    title: "季節の野菜",
    description: "子どもが『甘い』と驚く本物の味。射水の清流と土が育てる、旬の生命力をそのまま届けます。",
    tags: ["自然栽培", "射水産", "季節限定"],
    tone: "water" as const,
  },
  {
    title: "椎茸",
    description: "湿度と空気の密度まで整えながら育てる、深い香りと澄んだ余韻の山の恵みです。",
    tags: ["生産者の顔が見える", "射水産"],
    tone: "leaf" as const,
  },
  {
    title: "はちみつ",
    description: "ケイローンからアリスタイオスへと受け継がれた知恵を思わせる、静かな甘みの贈りもの。",
    tags: ["季節限定", "ギフト対応"],
    tone: "gold" as const,
  },
  {
    title: "加工品",
    description: "素材の純度を損なわず、毎日の暮らしに取り込みやすいかたちへ整えた小さな逸品です。",
    tags: ["少量生産", "ライフスタイル"],
    tone: "mist" as const,
  },
  {
    title: "ギフトセット",
    description: "古の祈りと現代のウェルネスをひと箱に。家族の健康を願う一矢として贈れます。",
    tags: ["射水産", "ギフト対応", "季節限定"],
    tone: "navy" as const,
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-sagittarius-porcelain">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-sagittarius-navy/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 md:px-8">
          <a aria-label="水のサジタリオ トップへ" className="relative translate-y-1.5" href="#top">
            <Logo compact inverted />
          </a>
          <nav aria-label="主要ナビゲーション" className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                className="text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:text-sagittarius-water"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="hidden rounded-full border border-sagittarius-gold/70 px-5 py-2 text-xs font-semibold tracking-[0.22em] text-white transition hover:bg-sagittarius-gold hover:text-sagittarius-navy md:inline-flex"
            href="#contact"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      <section
        className="relative flex min-h-[92svh] items-center overflow-hidden bg-hero-radial px-5 pb-16 pt-28 text-white md:px-8 md:pb-20 md:pt-36"
        id="top"
      >
        <div className="absolute inset-0 star-field opacity-80" />
        <div className="absolute inset-0 ripple-field opacity-25" />
        <div className="absolute left-[7%] top-[24%] h-72 w-72 rounded-full border border-sagittarius-water/25" />
        <div className="absolute right-[-7rem] top-24 h-[34rem] w-[34rem] rounded-full border border-sagittarius-gold/25" />
        <div className="absolute bottom-24 right-[18%] h-px w-56 rotate-[-30deg] bg-sagittarius-gold/50" />
        <div className="absolute bottom-10 right-4 opacity-25 md:hidden">
          <Logo className="scale-[1.2]" inverted markOnly />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="reveal max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-sagittarius-water">
              射水のスローベジタブル
              <span className="h-px w-16 bg-sagittarius-gold" />
            </p>
            <h1 className="serif-heading text-5xl font-semibold leading-[1.15] md:text-7xl lg:text-8xl">
              水の
              <br />
              サジタリオ
            </h1>
            <p className="serif-heading mt-8 max-w-2xl text-2xl leading-[1.7] text-white/88 md:text-4xl">
              射水の大地と清流が生む、
              <br className="hidden md:block" />
              一矢の潤い。
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              古の星が導き、射水の水が潤し、大地の力が育む。
              食卓から家族の笑顔を守るために放たれる、現代のまっすぐな一矢です。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold tracking-[0.16em] text-sagittarius-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-sagittarius-water"
                href="#concept"
              >
                ブランドストーリーを見る
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-sagittarius-gold/80 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-sagittarius-gold hover:text-sagittarius-navy"
                href="#products"
              >
                商品について知る
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative mx-auto hidden w-full max-w-[33rem] justify-center md:flex lg:justify-end">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-8 shadow-soft backdrop-blur">
              <div className="absolute inset-6 rounded-[1.5rem] border border-sagittarius-water/24" />
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full border border-sagittarius-gold/25" />
              <div className="absolute bottom-8 left-8 h-px w-28 bg-sagittarius-gold/60" />
              <div className="relative z-10 flex min-h-[30rem] items-center justify-center">
                <Logo className="scale-[1.7]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="concept">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="はじまり"
              title="射水。水を射るという名の地。"
              lead="立山連峰から富山湾へ、一筋の水の軌道。豊かな自然のエネルギーが収束する、命の的の真ん中にこのブランドは生まれました。"
            />
          </div>
          <div className="scroll-reveal rounded-[1.5rem] border border-sagittarius-water/35 bg-water-sheen p-8 shadow-soft md:p-12">
            <p className="text-lg leading-9 text-sagittarius-ink/82">
              「射水」という地名は、文字通り「水を射る」ことに由来します。
              雪解け水が地下を潜り、長い年月をかけて浄化され、この土地へと湧き出す。
              この大地は、水が矢のように駆け抜ける「水の聖地」なのです。
            </p>
            <p className="mt-6 serif-heading text-2xl leading-[1.7] text-sagittarius-navy">
              なにも足さない。ただ、射水の純粋さを
              食卓へまっすぐ届ける。
            </p>
          </div>
        </div>
      </section>

      <section className="water-texture bg-sagittarius-mist px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="三つの核心"
            title="水、星、土がひらく三つの核心。"
            lead="射水の風土、天体と農の記憶、そして土を癒やす手。ブランドの世界観を支える核を、静かなカードとしてまとめました。"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <article
                className="scroll-reveal rounded-[1.35rem] border border-white bg-white/88 p-8 shadow-soft"
                key={value.label}
              >
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-gold">
                    {value.label}
                  </p>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-sagittarius-water text-sm font-semibold text-sagittarius-navy">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="serif-heading text-3xl font-semibold leading-[1.5] text-sagittarius-navy">
                  {value.title}
                </h3>
                <p className="mt-5 text-sm leading-8 text-sagittarius-ink/72">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="story">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="物語"
              title="「射水」を翻訳する、イタリアの響き。"
              lead="サジタリオは、イタリア語で射手座を意味します。矢を放つ星座の名に、射水の清らかな水を重ね、野菜という一矢に乗せて食卓へ射抜く。そこに、イタリアのスローフード哲学を重ねました。"
            />
            <div className="mt-8 space-y-6 text-sm leading-8 text-sagittarius-ink/76 md:text-base">
              <p>
                イタリア発祥の「スローフード」は、その土地の風土と食文化を守り、
                効率やスピードよりも、旬の食材の味わいと生まれるまでの物語を大切にする思想です。
              </p>
              <p>
                日本のベニスと呼ばれる内川の水辺文化、立山の雪解け水、そして射水の農の記憶。
                Global Philosophy, Local Roots という感覚で、この土地の魅力を見つめ直しています。
              </p>
            </div>
          </div>
          <div className="scroll-reveal grid gap-6">
            <article className="overflow-hidden rounded-[1.5rem] border border-sagittarius-water/35 bg-sagittarius-navy p-8 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-water">
                土地の記憶
              </p>
              <h3 className="serif-heading mt-4 text-3xl font-semibold leading-[1.45]">
                日本のベニス、射水。
                <br />
                水と生きる場所。
              </h3>
              <p className="mt-5 text-sm leading-8 text-white/76">
                ベネチアを思わせる内川の景観と、立山連峰の雪解け水が代流となって潜り抜けてきた豊かな水。
                私たちの野菜は、この「水」と共に育ちます。
              </p>
            </article>
            <article className="overflow-hidden rounded-[1.5rem] border border-sagittarius-water/35 bg-white p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-gold">
                象徴
              </p>
              <h3 className="serif-heading mt-4 text-3xl font-semibold leading-[1.45] text-sagittarius-navy">
                地理的な「真ん中」を超えた、
                命の的。
              </h3>
              <p className="mt-5 text-sm leading-8 text-sagittarius-ink/72">
                海、川、里山が凝縮された富山県の中心、射水。
                ここは単なる中間地点ではなく、豊かな自然のエネルギーが収束する「的」の真ん中です。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative bg-sagittarius-navy px-5 py-24 text-white md:px-8 md:py-32">
        <div className="absolute inset-0 star-field opacity-45" />
        <div className="absolute inset-0 ripple-field opacity-10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="神話と伝承"
            light
            title="古の祈りと、射手座の知恵を現代の農へ。"
            lead="1000年続く流鏑馬神事の一矢、古代農耕と天体の関係、そしてケイローンの象徴性。水のサジタリオは、神話と土地の記憶を現代の食卓へ翻訳します。"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                古の祈り。五穀豊穣を願う「一矢」
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                射水市・下村加茂神社に1000年続く神事「やんさんま」。
                疾走する馬上から放たれる矢は、武芸ではなく五穀豊穣への祈りでした。
                豊かな実りを願い、天と地を繋ぐその一矢は、この土地の記憶そのものです。
              </p>
            </article>
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                星と土の対話。古の知恵
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                古代、農業は星や月のリズムと共にありました。
                種まきや収穫の時期を天体から学び、自然のサイクルに従うことで、作物は本来の生命力を宿します。
              </p>
            </article>
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                半人半馬の賢者・ケイローン
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                射手座のモデルであるケイローンは、荒ぶる自然と高度な知性の融合体。
                自然の力を尊重し、人の知恵をそっと添える農業の本質そのものを表しています。
              </p>
            </article>
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                土を癒やし、心身を整える
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                ケイローンは「傷ついた癒やし手」と呼ばれました。
                傷ついた大地を癒やすように、自然栽培は土本来の力を取り戻し、そこから生まれる野菜を通して食べる人の心身へ静かな整いを広げます。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sagittarius-porcelain px-5 py-24 md:px-8 md:py-32" id="products">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="商品"
            title="射水から届く、まっすぐな一矢。"
            lead="今後の展開を見据えながら、野菜、椎茸、はちみつ、加工品、ギフトセットへ。土地の清流と強いこだわりを、暮らしのかたちに変えて届けます。"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-sagittarius-deep px-5 py-24 text-white md:px-8 md:py-32" id="producers">
        <div className="absolute inset-0 water-texture opacity-20" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="生産者"
              light
              title="射手は、強いこだわりを持つ農家たち。"
              lead="妥協なき栽培技術。土への執着。私たちの農業は静かな闘いです。その強いこだわりこそが、弓を引き絞る力になります。"
            />
          </div>
          <ProducerCard
            name="marufarm"
            subtitle="射水の水と土を信じ、野菜・椎茸・はちみつを届ける生産者"
            description="自然の力を人の都合で押し切らず、季節の声を聞きながら少しずつ整える。水のサジタリオの思想に共鳴し、土地の恵みを食卓へまっすぐ届けます。"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="marche">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="scroll-reveal relative min-h-[34rem] overflow-hidden rounded-[1.5rem] border border-sagittarius-water/40 bg-sagittarius-mist shadow-soft">
            <div className="absolute inset-0 ripple-field opacity-55" />
            <div className="absolute inset-y-0 left-0 w-3/5 bg-sagittarius-navy" />
            <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-b from-sagittarius-water via-white to-sagittarius-water/30" />
            <div className="absolute left-8 top-10 max-w-[20rem]">
              <p className="serif-heading text-3xl font-semibold leading-[1.5] text-white">
                未来への一矢。
                <br />
                次世代への食育
              </p>
              <p className="mt-5 text-sm leading-8 text-white/78">
                子どもたちが「甘い」と驚く本物の味。
                自然の摂理と共に野菜をいただくことは、宇宙や自然とのつながりを学ぶ、静かで確かな教材になります。
              </p>
            </div>
            <div className="absolute bottom-10 left-8 h-px w-56 bg-sagittarius-gold/60" />
            <div className="absolute bottom-8 right-8 max-w-[14rem] rounded-[1.4rem] border border-white/60 bg-white/88 p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sagittarius-gold">
                波紋
              </p>
              <p className="mt-3 serif-heading text-2xl font-semibold leading-[1.5] text-sagittarius-navy">
                波紋のように
                <br />
                広がる「整い」
              </p>
              <p className="mt-3 text-sm leading-7 text-sagittarius-ink/70">
                あなた自身の健康から、家族の笑顔、社会全体の豊かさへ。
              </p>
            </div>
          </div>
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="マルシェ / 整う暮らし"
              title="食卓からはじまる、整いの連鎖。"
              lead="的に命中した矢が水面に波紋を広げるように、射水で生まれた野菜は個人の中から家族、そして社会全体へと健康の余韻を広げていきます。"
            />
          </div>
        </div>
      </section>

      <section className="water-texture bg-sagittarius-mist px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="ブランドグッズ"
            title="暮らしに寄り添う、世界観のかけら。"
            lead="ロゴや弓矢、水紋の余韻をまとったTシャツ、トート、包装資材まで。ブランドが日常に静かに溶け込む展開を見せます。"
          />
          <div className="mt-14">
            <BrandGoods />
          </div>
        </div>
      </section>

      <section className="relative bg-hero-radial px-5 py-24 text-white md:px-8 md:py-32" id="contact">
        <div className="absolute inset-0 star-field opacity-60" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-sagittarius-gold/45" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Logo className="justify-center" />
          <h2 className="serif-heading mt-10 text-4xl font-semibold leading-[1.35] md:text-6xl">
            私たちが届けるのは、
            <br />
            「まっすぐな未来」。
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
            古の星が導き、射水の水が潤し、大地の力が育む。
            「水のサジタリオ」は、食卓から家族の笑顔を守る、現代の射手です。
            なにも足さない、純粋な一矢を、あなたの家族へまっすぐ届けます。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-[0.18em] text-sagittarius-navy transition hover:-translate-y-0.5 hover:bg-sagittarius-water"
              href="mailto:info@example.com"
            >
              お問い合わせ
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-sagittarius-gold/80 px-8 py-4 text-sm font-semibold tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-sagittarius-gold hover:text-sagittarius-navy"
              href="mailto:info@example.com?subject=%E5%8F%96%E6%89%B1%E3%81%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
            >
              取扱いについて相談する
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-sagittarius-deep px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <p className="max-w-xl text-sm leading-7 text-white/62">
            水のサジタリオ / 射水のスローベジタブル。射水の大地と清流が生む一矢の潤いを、家族の食卓へ静かに届けます。
          </p>
          <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/64">
            <a className="transition hover:text-sagittarius-water" href="#">
              インスタグラム
            </a>
            <a className="transition hover:text-sagittarius-water" href="#">
              エックス
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
