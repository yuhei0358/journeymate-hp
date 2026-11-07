import type { BilingualString } from "./i18n";

// Single source for tour products. Mirrors docs/tours/catalog.md in yuhei0358/journeymate.
// Prices are per person in USD. Items marked TODO need confirmation by Yuhei.

export const contactInfo = {
  email: "hello@journeymate.jp",
  // TODO: business WhatsApp number in international format without "+" (e.g. "8190XXXXXXXX").
  whatsapp: "",
};

export function whatsappLink(message: string): string | null {
  if (!contactInfo.whatsapp) return null;
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

export interface TourStep {
  title: BilingualString;
  desc: BilingualString;
}

export interface Tour {
  slug: string;
  category: BilingualString;
  title: BilingualString;
  tagline: BilingualString;
  priceUsd: number;
  priceNote: BilingualString;
  duration: BilingualString;
  time: BilingualString;
  meetingPoint: BilingualString;
  groupSize: BilingualString;
  image?: string;
  imageAlt?: BilingualString;
  gradient: string;
  steps: TourStep[];
  included: BilingualString[];
  notIncluded: BilingualString[];
  goodToKnow: BilingualString[];
  forCruise?: boolean;
}

const s = (en: string, ja: string): BilingualString => ({ en, ja });

export const tours: Tour[] = [
  {
    slug: "hakata-yatai-night",
    category: s("Food", "グルメ"),
    title: s("Hakata Yatai Night Crawl", "博多屋台ナイト"),
    tagline: s(
      "Two yatai, one night, zero guesswork — Fukuoka's open-air food stalls with a local friend.",
      "屋台を2軒、迷わずはしご。地元の友だちと味わう博多の夜。"
    ),
    priceUsd: 95,
    priceNote: s("per person · food & a drink at two stalls included", "1人あたり・屋台2軒の料理とドリンク込み"),
    duration: s("3 hours", "3時間"),
    time: s("18:30 – 21:30", "18:30〜21:30"),
    meetingPoint: s("Nakasu-Kawabata Station, Exit 1", "中洲川端駅 1番出口"),
    groupSize: s("Private · 2–6 guests", "貸切・2〜6名"),
    image: "/images/tours/yatai-cooking.jpg",
    imageAlt: s("A yatai cook tossing noodles over a flame in Fukuoka", "福岡の屋台で麺を炒める店主"),
    gradient: "linear-gradient(135deg, #4A1A1A 0%, #8B2500 100%)",
    steps: [
      { title: s("Meet by the river", "川沿いで集合"), desc: s("Meet Yuhei and walk the Nakasu riverside as the stalls light up.", "Yuheiと合流し、灯りがともる中洲の川沿いを歩きます。") },
      { title: s("Stall one", "1軒目"), desc: s("Grab seats at the counter and order Hakata ramen or oden with a cold beer. Yuhei handles the Japanese.", "カウンターに座って博多ラーメンやおでんと冷えたビールを。注文はYuheiにお任せ。") },
      { title: s("Learn the yatai rules", "屋台のルールを知る"), desc: s("The etiquette locals follow, and the three things not to do.", "地元の人が守るマナーと、やってはいけない3つのこと。") },
      { title: s("Stall two", "2軒目"), desc: s("Try skewers or the owner's specialty and chat with the people next to you.", "串焼きや店主の名物を味わい、隣の席の人とも話してみましょう。") },
      { title: s("Tips for the rest of your trip", "旅の続きのアドバイス"), desc: s("Where to eat next, what to skip, how to get around Kyushu.", "次に行くべき店、行かなくていい場所、九州の回り方。") },
    ],
    included: [
      s("Local English-speaking guide", "英語を話す地元ガイド"),
      s("One dish and one drink per person at each of the first two stalls", "最初の2軒で1人1品＋1ドリンク"),
      s("A short 'how to yatai' guide on WhatsApp after the tour", "ツアー後にWhatsAppで「屋台の楽しみ方」ガイド"),
    ],
    notIncluded: [
      s("Extra food and drinks you order", "追加で注文した飲食代"),
      s("Transport to the meeting point", "集合場所までの交通費"),
    ],
    goodToKnow: [
      s("Stalls close in heavy rain or strong wind. We move you to an indoor izakaya or refund in full.", "大雨・強風の日は屋台が休みます。屋内の居酒屋に変更するか全額返金します。"),
      s("Vegetarian options are limited; tell us in advance.", "ベジタリアン向けは少ないため、事前にお知らせください。"),
    ],
  },
  {
    slug: "dazaifu-yanagawa",
    category: s("Culture", "文化"),
    title: s("Dazaifu & Yanagawa Day", "太宰府・柳川の1日"),
    tagline: s(
      "Shrines in the morning, a canal boat in the afternoon — the classic Fukuoka day trip, without the tour bus.",
      "朝は天満宮、午後は川下り。観光バスなしで巡る福岡の定番日帰り旅。"
    ),
    priceUsd: 180,
    priceNote: s("per person · guide fee", "1人あたり・ガイド料"),
    duration: s("8 hours", "8時間"),
    time: s("9:00 – 17:00", "9:00〜17:00"),
    meetingPoint: s("Nishitetsu Fukuoka (Tenjin) Station, ticket gate", "西鉄福岡（天神）駅 改札"),
    groupSize: s("Private · 2–6 guests", "貸切・2〜6名"),
    gradient: "linear-gradient(135deg, #1B3A5C 0%, #8B2500 100%)",
    steps: [
      { title: s("Train to Dazaifu", "電車で太宰府へ"), desc: s("Ride the Nishitetsu line with Yuhei, who sorts out the tickets.", "切符の買い方もYuheiがサポートし、西鉄電車で向かいます。") },
      { title: s("Dazaifu Tenmangu", "太宰府天満宮"), desc: s("Walk the approach to Japan's shrine of learning and try warm umegae-mochi.", "学問の神様を祀る天満宮の参道を歩き、焼きたての梅ヶ枝餅を。") },
      { title: s("On to Yanagawa", "柳川へ"), desc: s("Continue by train to the 'water town' of Kyushu.", "電車で「水の町」柳川へ。") },
      { title: s("Canal punt boat", "川下り"), desc: s("Glide through the old castle moats on a traditional boat.", "伝統の舟で城下町のお堀をめぐります。") },
      { title: s("Steamed eel lunch", "うなぎのせいろ蒸し"), desc: s("Yanagawa's famous unagi no seiro-mushi, then back to Tenjin.", "柳川名物のせいろ蒸しを味わい、天神へ戻ります。") },
    ],
    included: [
      s("Local English-speaking guide for the whole day", "終日、英語を話す地元ガイドが同行"),
      s("Help buying the Dazaifu–Yanagawa sightseeing ticket", "太宰府・柳川観光きっぷの購入サポート"),
    ],
    notIncluded: [
      s("Nishitetsu Dazaifu–Yanagawa sightseeing ticket (rail + canal boat, about ¥3,620 per adult in 2026)", "西鉄「太宰府・柳川観光きっぷ」（電車＋川下り、2026年時点で大人約3,620円）"),
      s("Lunch", "昼食代"),
    ],
    goodToKnow: [
      s("Wear comfortable shoes. The canal boat takes about an hour and is uncovered in summer.", "歩きやすい靴で。川下りは約1時間、夏は日差しを遮るものがありません。"),
    ],
  },
  {
    slug: "nagasaki-heritage",
    category: s("History", "歴史"),
    title: s("Nagasaki Heritage Day", "長崎の世界遺産めぐり"),
    tagline: s(
      "400 years as Japan's window to the world — churches, merchant houses and a city that rebuilt itself.",
      "400年、世界への窓だった町。教会、洋館、そして復興の歴史をたどる1日。"
    ),
    priceUsd: 220,
    priceNote: s("per person · guide fee", "1人あたり・ガイド料"),
    duration: s("9 hours from Hakata", "博多発 9時間"),
    time: s("8:30 – 17:30", "8:30〜17:30"),
    meetingPoint: s("JR Hakata Station, Central Gate (or Nagasaki Station)", "JR博多駅 中央改札（長崎駅集合も可）"),
    groupSize: s("Private · 2–6 guests", "貸切・2〜6名"),
    gradient: "linear-gradient(135deg, #2A1A40 0%, #4A3070 100%)",
    steps: [
      { title: s("Kamome line to Nagasaki", "かもめで長崎へ"), desc: s("About 1 hour 20 minutes from Hakata with one easy transfer.", "博多から1回の乗り換えで約1時間20分。") },
      { title: s("Oura Church & Glover Garden", "大浦天主堂とグラバー園"), desc: s("A UNESCO World Heritage church and the merchant houses above the harbor.", "世界遺産の教会と、港を見下ろす洋館群。") },
      { title: s("Champon in Chinatown", "中華街でちゃんぽん"), desc: s("Lunch on Nagasaki's own noodle dish.", "長崎生まれの麺料理で昼食。") },
      { title: s("Dejima", "出島"), desc: s("The island where Japan traded with Europe for two centuries.", "200年以上、日本と欧州の交易の舞台となった人工島。") },
      { title: s("Peace Park", "平和公園"), desc: s("A quiet stop at the Peace Park and Atomic Bomb Museum before heading back.", "平和公園と原爆資料館に立ち寄ってから帰路へ。") },
    ],
    included: [
      s("Local English-speaking guide for the whole day", "終日、英語を話す地元ガイドが同行"),
      s("Train timing and seat planning", "列車の時刻と座席のプランニング"),
    ],
    notIncluded: [
      s("Train fare", "電車代"),
      s("Admission fees", "入場料"),
      s("Lunch", "昼食代"),
    ],
    goodToKnow: [
      s("The Atomic Bomb Museum can be emotional; we can shorten or skip it.", "原爆資料館は心に重く残る場所です。短くしたり省いたりもできます。"),
    ],
  },
  {
    slug: "yufuin-beppu-onsen",
    category: s("Onsen", "温泉"),
    title: s("Yufuin & Beppu Onsen Day", "由布院・別府 温泉の1日"),
    tagline: s(
      "Japan's hot-spring heartland in a day — a forest train, a lakeside village and the steaming 'hells' of Beppu.",
      "森の列車、湖の温泉郷、湯けむりの地獄めぐり。日本一の温泉地を1日で。"
    ),
    priceUsd: 240,
    priceNote: s("per person · guide fee", "1人あたり・ガイド料"),
    duration: s("11 hours from Hakata", "博多発 11時間"),
    time: s("8:00 – 19:00", "8:00〜19:00"),
    meetingPoint: s("JR Hakata Station, Central Gate", "JR博多駅 中央改札"),
    groupSize: s("Private · 2–4 guests", "貸切・2〜4名"),
    gradient: "linear-gradient(135deg, #2A1A0A 0%, #6B3A1A 100%)",
    steps: [
      { title: s("Yufuin no Mori train", "ゆふいんの森号"), desc: s("A wood-paneled sightseeing train through the mountains (about 2 hours).", "木の温もりあふれる観光列車で山あいを走ります（約2時間）。") },
      { title: s("Yufuin village & Lake Kinrin", "由布院の町と金鱗湖"), desc: s("Stroll the lanes to the lake, where mist rises on cool mornings.", "小道を歩いて、朝霧が立つ金鱗湖へ。") },
      { title: s("Lunch & optional private onsen", "昼食と貸切温泉（任意）"), desc: s("Local food and, if you like, a private hot-spring bath.", "地元の料理と、希望があれば貸切風呂も。") },
      { title: s("Beppu's Jigoku", "別府の地獄めぐり"), desc: s("Boiling ponds in red, blue and white.", "赤・青・白に湯が沸き立つ地獄めぐり。") },
      { title: s("Sonic express back", "特急ソニックで帰路へ"), desc: s("Return to Hakata in the evening.", "夕方に博多へ戻ります。") },
    ],
    included: [
      s("Local English-speaking guide for the whole day", "終日、英語を話す地元ガイドが同行"),
      s("Train and bus planning", "列車とバスのプランニング"),
    ],
    notIncluded: [
      s("Train and bus fares", "電車代・バス代"),
      s("Admission and bath fees", "入場料・入浴料"),
      s("Lunch", "昼食代"),
    ],
    goodToKnow: [
      s("Yufuin no Mori seats open one month ahead and sell out in autumn and winter. Book as early as you can.", "ゆふいんの森号の指定席は1ヶ月前に発売され、秋冬はすぐ埋まります。お早めに。"),
      s("Want Aso too? Aso Caldera is a separate custom day by car. Ask us.", "阿蘇も行きたい方へ：阿蘇は車で回る別のカスタムプランです。ご相談ください。"),
    ],
  },
  {
    slug: "kyushu-shore-day",
    category: s("Cruise", "クルーズ"),
    title: s("Kyushu Shore Day", "クルーズ寄港日の貸切ツアー"),
    tagline: s(
      "Your port day, your pace — a private local guide waiting at the terminal, back on board in plenty of time.",
      "寄港日を自分のペースで。ターミナルで地元ガイドがお出迎え、出航に余裕をもって帰船。"
    ),
    priceUsd: 220,
    priceNote: s("per person · guide fee", "1人あたり・ガイド料"),
    duration: s("Up to 8 hours", "最大8時間"),
    time: s("Planned around your ship", "船の時刻に合わせて設定"),
    meetingPoint: s("Hakata Port or Nagasaki Port cruise terminal", "博多港・長崎港のクルーズターミナル"),
    groupSize: s("Private · 2–6 guests", "貸切・2〜6名"),
    image: "/images/tours/yatai-exterior.jpg",
    imageAlt: s("A Fukuoka yatai stall with red lanterns in the city", "赤い暖簾が並ぶ福岡の屋台"),
    gradient: "linear-gradient(135deg, #1B3A5C 0%, #2D5A3D 100%)",
    forCruise: true,
    steps: [
      { title: s("Meet at the terminal", "ターミナルでお出迎え"), desc: s("Yuhei waits at the terminal exit with a JourneyMate sign.", "ターミナル出口でJourneyMateのボードを持ってお待ちします。") },
      { title: s("Choose your route", "ルートを選ぶ"), desc: s("From Hakata: Dazaifu & Yanagawa, or Fukuoka city. From Nagasaki: churches, Glover Garden and Chinatown.", "博多港なら太宰府・柳川か福岡市内。長崎港なら教会・グラバー園・中華街。") },
      { title: s("Eat where locals eat", "地元の店で食べる"), desc: s("Skip the crowds of the ship's bus tours.", "船の団体ツアーの混雑を避けて。") },
      { title: s("Back with time to spare", "余裕をもって帰船"), desc: s("At the port at least two hours before all-aboard.", "出航の2時間前までに港へ戻ります。") },
    ],
    included: [
      s("Local English-speaking guide", "英語を話す地元ガイド"),
      s("Terminal meet-and-greet", "ターミナルでのお出迎え"),
      s("A route planned around your ship's schedule", "船のスケジュールに合わせたルート作り"),
    ],
    notIncluded: [
      s("Taxi or train fares", "タクシー代・電車代"),
      s("Admission fees", "入場料"),
      s("Lunch", "昼食代"),
    ],
    goodToKnow: [
      s("Send us your ship name and port date when you book. We check the port schedule for you.", "予約時に船名と寄港日をお知らせください。寄港予定はこちらで確認します。"),
      s("A taxi takes up to four guests; larger groups use two.", "タクシー1台は4名まで。5名以上は2台に分乗します。"),
    ],
  },
];

export const tourPolicies = {
  cancellation: s(
    "Free cancellation up to 72 hours before the tour. No refund within 72 hours. Full refund if we cancel for weather.",
    "72時間前まで無料でキャンセルできます。72時間を切ると返金できません。天候で中止の場合は全額返金します。"
  ),
  minimum: s(
    "Private tours are priced for a minimum of two guests.",
    "貸切ツアーは2名分からの料金です。"
  ),
};

export const reviews = [
  {
    name: "Bryce",
    from: "Austin, TX",
    text: "Great time and great food! It is definitely a nice way to get out of your comfort zone and hangout with locals! The food was great and the beer was even better! The host is very kind and friendly.",
  },
  {
    name: "Jean",
    from: "South Korea",
    text: "It was so much fun. He's friendly and speak English well. His recommendations is all good. You don't have to worry, just enjoy it.",
  },
  {
    name: "Danh",
    from: "Austin, TX",
    text: "Fun experience and a great way to make new friends!",
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
