import type { BilingualString } from "./i18n";

// ── Type helpers ────────────────────────────────────────────────
export type { BilingualString };

// ── All bilingual copy strings ──────────────────────────────────
export const copy = {
  // ── Global ──────────────────────────────────────────────────
  brand: {
    name: "JourneyMate",
    nameJa: "株式会社ジャーニーメイト",
    tagline: { ja: "九州から旅を届ける。", en: "Your local friend in Kyushu." } as BilingualString,
  },

  // ── Navigation ───────────────────────────────────────────────
  nav: {
    home:    { ja: "ホーム",       en: "Home" } as BilingualString,
    tours:   { ja: "ツアー",       en: "Tours" } as BilingualString,
    kyushgo: { ja: "旅前サポート", en: "Concierge" } as BilingualString,
    vision:  { ja: "ビジョン",     en: "Vision" } as BilingualString,
    contact: { ja: "お問い合わせ", en: "Contact" } as BilingualString,
    cta:     { ja: "お問い合わせ", en: "Get in Touch" } as BilingualString,
    openMenu:  { ja: "メニューを開く", en: "Open menu" } as BilingualString,
    closeMenu: { ja: "メニューを閉じる", en: "Close menu" } as BilingualString,
  },

  // ── Home ────────────────────────────────────────────────────
  home: {
    hero: {
      label:      { ja: "九州のローカルガイド", en: "Your Local Guide in Kyushu" } as BilingualString,
      headlineJa: "九州から\n旅を届ける。",
      headlineEn: "Your local friend\nin Kyushu.",
      subheadline: {
        ja: "プライベートツアー、旅前コンシェルジュ、地元ガイドのおもてなし。\nJourneyMateは、海外旅行者に「本物の九州」を届けます。",
        en: "Private tours, pre-trip concierge, and genuine local hospitality.\nJourneyMate delivers the real Kyushu to international travelers.",
      } as BilingualString,
      cta1: { ja: "ツアーを見る", en: "Explore Tours" } as BilingualString,
      cta2: { ja: "旅前相談する", en: "Plan Your Trip" } as BilingualString,
    },

    whatIs: {
      eyebrow:  { ja: "ジャーニーメイトとは", en: "WHAT IS JOURNEYMATE" } as BilingualString,
      headline: { ja: "九州を拠点に、\n「本物の日本」を届ける。", en: "Based in Kyushu,\ndelivering authentic Japan." } as BilingualString,
      desc:     { ja: "JourneyMateは、九州を拠点に、プライベートツアーと旅前コンシェルジュサービスで、海外からの旅行者に「本物の日本」を届けます。東京でも京都でもない、まだ知られていない九州の魅力を、地元ガイドが一緒にご案内します。", en: "Based in Kyushu, JourneyMate delivers authentic Japan to international travelers through private guided tours and pre-trip concierge services. We show you the Kyushu that guidebooks miss — with a local friend by your side." } as BilingualString,
    },

    businesses: {
      eyebrow:  { ja: "サービス紹介", en: "OUR SERVICES" } as BilingualString,
      headline: { ja: "2つのサービスで、\nあなたの旅を支える。", en: "Two services to\nsupport your journey." } as BilingualString,
      tour: {
        number: "01",
        title:  { ja: "プライベートツアー & 体験", en: "Private Tours & Experiences" } as BilingualString,
        desc:   { ja: "プライベートツアー、少人数ガイドツアー、カスタム体験。あなただけの九州を、地元ガイドがご案内します。Airbnb ExperiencesとViatorで予約可能。直接予約なら最安値保証。", en: "Private tours, small-group guided tours, custom experiences. Your personal local guide shows you the real Kyushu. Available on Airbnb Experiences and Viator. Book direct for the best price." } as BilingualString,
        link:   { ja: "ツアーを見る", en: "View Tours" } as BilingualString,
      },
      app: {
        number: "02",
        title:  { ja: "旅前コンシェルジュ", en: "Pre-trip Concierge" } as BilingualString,
        desc:   { ja: "九州旅行の計画から現地サポートまで。カスタム旅程作成、レストラン予約代行、WhatsAppでのリアルタイムサポート。旅の不安をゼロにします。", en: "From trip planning to on-the-ground support. Custom itinerary creation, restaurant reservations, real-time WhatsApp support. Travel worry-free." } as BilingualString,
        link:   { ja: "詳しく見る", en: "Learn More" } as BilingualString,
      },
      guesthouse: {
        number: "03",
        badge:  { ja: "将来構想", en: "Future Vision" } as BilingualString,
        title:  { ja: "ゲストハウス", en: "Guesthouse" } as BilingualString,
        desc:   { ja: "旅人が集い、地域とつながる温かい場所。福岡を拠点に、将来的な宿泊拠点を構想中。", en: "A warm place where travelers gather and connect with local culture. Planning a future accommodation hub in Fukuoka." } as BilingualString,
        link:   { ja: "続報を待つ", en: "Stay Tuned" } as BilingualString,
      },
    },

    whyKyushu: {
      eyebrow:  { ja: "なぜ九州か", en: "WHY KYUSHU" } as BilingualString,
      headline: { ja: "東京でも京都でもない、\n日本がここにある。", en: "Not Tokyo. Not Kyoto.\nThis is the real Japan." } as BilingualString,
      desc:     { ja: "まだ世界に知られていない、本物の日本。九州にはそれがある。", en: "The authentic Japan the world hasn't discovered yet. Kyushu holds it all." } as BilingualString,
      reasons: [
        { icon: "Flame", title: { ja: "温泉天国", en: "Onsen Paradise" } as BilingualString, desc: { ja: "日本一の源泉数を誇る別府、湯布院、黒川温泉。世界に類を見ない温泉文化の中心地。", en: "Beppu, Yufuin, Kurokawa — Japan's greatest concentration of hot springs and a bathing culture found nowhere else." } as BilingualString },
        { icon: "Mountain", title: { ja: "大自然", en: "Raw Nature" } as BilingualString, desc: { ja: "阿蘇の世界最大級カルデラ、屋久島の千年杉、高千穂峡の渓谷。息を呑む大自然が広がる。", en: "Aso's world-class caldera, Yakushima's ancient cedars, Takachiho Gorge. Nature that takes your breath away." } as BilingualString },
        { icon: "UtensilsCrossed", title: { ja: "食の宝庫", en: "Culinary Treasure" } as BilingualString, desc: { ja: "博多ラーメン、もつ鍋、佐賀牛、長崎ちゃんぽん。日本のソウルフードの原点がここに。", en: "Hakata ramen, motsu nabe, Saga wagyu, Nagasaki champon. The birthplace of Japan's soul food." } as BilingualString },
        { icon: "Landmark", title: { ja: "歴史と文化", en: "History & Culture" } as BilingualString, desc: { ja: "太宰府天満宮、長崎の教会群、島原城。大陸との交流が育んだ、独自の歴史と文化が息づく。", en: "Dazaifu Tenmangu, Nagasaki's churches, Shimabara Castle. A unique culture shaped by centuries of continental exchange." } as BilingualString },
      ],
    },

    snsDiscovery: {
      eyebrow:  { ja: "旅の始め方", en: "HOW IT WORKS" } as BilingualString,
      headline: { ja: "相談から体験まで、\n4ステップ。", en: "From inquiry to experience,\nin 4 steps." } as BilingualString,
      desc:     { ja: "JourneyMateなら、旅の計画から現地体験まで、ワンストップでサポート。", en: "JourneyMate supports you from trip planning to on-the-ground experiences — all in one place." } as BilingualString,
      steps: [
        { icon: "MessageCircle", title: { ja: "相談する", en: "Reach Out" } as BilingualString, desc: { ja: "WhatsApp・メール・フォームから気軽にご相談。旅の希望を教えてください。", en: "Contact us via WhatsApp, email, or form. Tell us about your dream trip." } as BilingualString },
        { icon: "FileText", title: { ja: "旅程を受け取る", en: "Get Your Plan" } as BilingualString, desc: { ja: "あなた専用のカスタム旅程をお届け。レストランや体験の予約も代行します。", en: "Receive your custom itinerary. We'll book restaurants and experiences for you." } as BilingualString },
        { icon: "Map", title: { ja: "九州を旅する", en: "Explore Kyushu" } as BilingualString, desc: { ja: "旅中もWhatsAppでリアルタイムサポート。困った時はいつでもメッセージ。", en: "Real-time WhatsApp support during your trip. Message us anytime you need help." } as BilingualString },
        { icon: "Ticket", title: { ja: "ツアーで深める", en: "Go Deeper with a Tour" } as BilingualString, desc: { ja: "地元ガイドと一緒に、ガイドブックにない本物の九州を体験。", en: "Experience the real Kyushu with a local guide — beyond any guidebook." } as BilingualString },
      ],
    },

    featuredExperiences: {
      eyebrow:  { ja: "おすすめ体験", en: "FEATURED EXPERIENCES" } as BilingualString,
      headline: { ja: "五感で味わう、\n九州の旅。", en: "Feel Kyushu\nwith all your senses." } as BilingualString,
      cta:      { ja: "すべてのツアーを見る", en: "View All Tours" } as BilingualString,
      cards: [
        { category: { ja: "グルメ", en: "Food" } as BilingualString, title: { ja: "博多屋台ナイトツアー", en: "Hakata Yatai Night Tour" } as BilingualString, tagline: { ja: "湯気と笑い声が交差する、博多の夜。", en: "Where steam and laughter meet in Hakata's night." } as BilingualString, duration: { ja: "4時間", en: "4 hrs" } as BilingualString, price: { ja: "¥8,000〜", en: "From ¥8,000" } as BilingualString, gradient: "linear-gradient(135deg, #4A1A1A 0%, #8B2500 100%)", unsplash: "1553621042-f6e147245754" },
        { category: { ja: "自然", en: "Nature" } as BilingualString, title: { ja: "阿蘇カルデラ冒険", en: "Aso Caldera Adventure" } as BilingualString, tagline: { ja: "地球の鼓動を足元に感じる旅。", en: "Feel the Earth's heartbeat beneath your feet." } as BilingualString, duration: { ja: "6時間", en: "6 hrs" } as BilingualString, price: { ja: "¥12,000〜", en: "From ¥12,000" } as BilingualString, gradient: "linear-gradient(135deg, #1B3A5C 0%, #2D5A3D 100%)", unsplash: "1470071459604-3b5ec3a7fe05" },
        { category: { ja: "温泉", en: "Onsen" } as BilingualString, title: { ja: "別府地獄めぐり", en: "Beppu Hell Tour" } as BilingualString, tagline: { ja: "七色の地獄が語る、大地のドラマ。", en: "Seven hells, one unforgettable drama of the earth." } as BilingualString, duration: { ja: "5時間", en: "5 hrs" } as BilingualString, price: { ja: "¥9,000〜", en: "From ¥9,000" } as BilingualString, gradient: "linear-gradient(135deg, #2A1A0A 0%, #6B3A1A 100%)", unsplash: "1545569341-9eb8b30979d9" },
      ],
    },

    kyushgoTeaser: {
      eyebrow:  { ja: "旅前コンシェルジュ", en: "PRE-TRIP CONCIERGE" } as BilingualString,
      headline: { ja: "旅の準備、\nお任せください。", en: "Leave the planning\nto us." } as BilingualString,
      desc:     { ja: "旅程作成、レストラン予約、WhatsAppサポート、空港送迎手配。あなたの九州旅行を、旅前からトータルでサポートします。", en: "Itinerary creation, restaurant bookings, WhatsApp support, airport transfers. We handle everything for your Kyushu trip, from planning to arrival." } as BilingualString,
      cta:      { ja: "旅の相談をする", en: "Plan Your Trip" } as BilingualString,
      notify:   { ja: "料金を見る", en: "View Pricing" } as BilingualString,
      features: [
        { icon: "FileText", title: { ja: "カスタム旅程作成", en: "Custom Itinerary" } as BilingualString, desc: { ja: "あなた専用の旅程", en: "Tailored just for you" } as BilingualString },
        { icon: "Utensils", title: { ja: "レストラン予約代行", en: "Restaurant Booking" } as BilingualString, desc: { ja: "地元の名店を確保", en: "Reserve local gems" } as BilingualString },
        { icon: "MessageCircle", title: { ja: "WhatsAppサポート", en: "WhatsApp Support" } as BilingualString, desc: { ja: "旅中もリアルタイム対応", en: "Real-time help on trip" } as BilingualString },
        { icon: "Car", title: { ja: "空港送迎手配", en: "Airport Transfer" } as BilingualString, desc: { ja: "到着から安心", en: "Worry-free from arrival" } as BilingualString },
      ],
    },

    trustPartners: {
      eyebrow:  { ja: "安心のポイント", en: "WHY TRUST US" } as BilingualString,
      headline: { ja: "安心して旅を\n任せられる理由。", en: "Why travelers\ntrust JourneyMate." } as BilingualString,
      desc:     { ja: "JourneyMateは、九州在住の地元ガイドが運営。英語対応で、あなたの旅を最初から最後までサポートします。", en: "JourneyMate is run by a local guide based in Kyushu. We support your trip from start to finish, in English." } as BilingualString,
      cta:      { ja: "お問い合わせ", en: "Get in Touch" } as BilingualString,
      items: [
        { type: { ja: "地元在住ガイド", en: "Local Resident Guide" } as BilingualString },
        { type: { ja: "英語で安心対応", en: "English-Speaking Support" } as BilingualString },
        { type: { ja: "プライベート対応", en: "Private & Customizable" } as BilingualString },
        { type: { ja: "満足保証", en: "Satisfaction Guarantee" } as BilingualString },
      ],
    },

    finalCta: {
      headline: { ja: "九州の旅を、\n始めよう。", en: "Start your\nKyushu journey." } as BilingualString,
      tours: { title: { ja: "ツアーを探す", en: "Explore Tours" } as BilingualString, desc: { ja: "プライベートガイドツアーで九州を体験", en: "Experience Kyushu with a private guided tour" } as BilingualString },
      app: { title: { ja: "旅の計画を相談", en: "Plan Your Trip" } as BilingualString, desc: { ja: "旅程作成・レストラン予約・現地サポート", en: "Itinerary, restaurants, on-site support" } as BilingualString },
      contact: { title: { ja: "お問い合わせ", en: "Get in Touch" } as BilingualString, desc: { ja: "ご質問・ご相談はお気軽に", en: "Questions? We'd love to hear from you" } as BilingualString },
    },
  },

  // ── Tours Page ───────────────────────────────────────────────
  tours: {
    hero: {
      eyebrow:  { ja: "プライベートツアー & 体験", en: "PRIVATE TOURS & EXPERIENCES" } as BilingualString,
      headline: { ja: "あなただけの九州を、\n地元ガイドと。", en: "Your personal Kyushu,\nwith a local guide." } as BilingualString,
      subheadline: { ja: "プライベートツアー、少人数ガイド、カスタム体験。ガイドブックにない九州の本物をご案内します。", en: "Private tours, small groups, custom experiences. We show you the Kyushu that guidebooks miss." } as BilingualString,
    },
    booking: {
      eyebrow:  { ja: "予約方法", en: "HOW TO BOOK" } as BilingualString,
      headline: { ja: "お好きな方法でご予約ください。", en: "Book the way you prefer." } as BilingualString,
      airbnb:   { ja: "Airbnb で予約する", en: "Book on Airbnb" } as BilingualString,
      viator:   { ja: "Viator で予約する", en: "Book on Viator" } as BilingualString,
      direct:   { ja: "直接予約（最安値保証）", en: "Book Direct (Best Price)" } as BilingualString,
      custom:   { ja: "プライベート・カスタムツアーのお問い合わせ", en: "Inquire about Private & Custom Tours" } as BilingualString,
    },
    trust: {
      eyebrow: { ja: "安心のポイント", en: "WHY TRUST US" } as BilingualString,
      items: [
        { title: { ja: "地元ガイドが案内", en: "Local Guide" } as BilingualString, desc: { ja: "九州在住のガイドが同行します", en: "A Kyushu-based guide accompanies you" } as BilingualString },
        { title: { ja: "少人数・プライベート", en: "Small & Private" } as BilingualString, desc: { ja: "あなたのペースで楽しめます", en: "Enjoy at your own pace" } as BilingualString },
        { title: { ja: "カスタマイズ可能", en: "Fully Customizable" } as BilingualString, desc: { ja: "行きたい場所・やりたいことに合わせて", en: "Tailored to your interests" } as BilingualString },
        { title: { ja: "英語対応", en: "English Support" } as BilingualString, desc: { ja: "英語で安心してコミュニケーション", en: "Communicate comfortably in English" } as BilingualString },
      ],
    },
    cards: [
      { category: { ja: "文化", en: "Culture" } as BilingualString, title: { ja: "福岡下町散歩ツアー", en: "Fukuoka Downtown Walk" } as BilingualString, duration: { ja: "3時間", en: "3 hrs" } as BilingualString, price: { ja: "¥5,000〜", en: "From ¥5,000" } as BilingualString, gradient: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)", unsplash: "1528360983277-13d401cdc186" },
      { category: { ja: "自然", en: "Nature" } as BilingualString, title: { ja: "阿蘇カルデラ探索ツアー", en: "Aso Caldera Explorer" } as BilingualString, duration: { ja: "6時間", en: "6 hrs" } as BilingualString, price: { ja: "¥12,000〜", en: "From ¥12,000" } as BilingualString, gradient: "linear-gradient(135deg, #1B3A5C 0%, #2D5A3D 100%)", unsplash: "1470071459604-3b5ec3a7fe05" },
      { category: { ja: "グルメ", en: "Food" } as BilingualString, title: { ja: "博多屋台・もつ鍋ツアー", en: "Hakata Yatai & Motsu Nabe" } as BilingualString, duration: { ja: "4時間", en: "4 hrs" } as BilingualString, price: { ja: "¥8,000〜", en: "From ¥8,000" } as BilingualString, gradient: "linear-gradient(135deg, #4A1A1A 0%, #8B2500 100%)", unsplash: "1553621042-f6e147245754" },
      { category: { ja: "歴史", en: "History" } as BilingualString, title: { ja: "長崎・世界遺産めぐり", en: "Nagasaki Heritage Tour" } as BilingualString, duration: { ja: "終日", en: "Full day" } as BilingualString, price: { ja: "¥18,000〜", en: "From ¥18,000" } as BilingualString, gradient: "linear-gradient(135deg, #2A1A40 0%, #4A3070 100%)", unsplash: "1542051841857-5f90071e7989" },
      { category: { ja: "アドベンチャー", en: "Adventure" } as BilingualString, title: { ja: "屋久島・縄文杉トレッキング", en: "Yakushima Cedar Trek" } as BilingualString, duration: { ja: "終日", en: "Full day" } as BilingualString, price: { ja: "¥20,000〜", en: "From ¥20,000" } as BilingualString, gradient: "linear-gradient(135deg, #0D2419 0%, #2D5A3D 100%)", unsplash: "1509316785289-025f5b846b35" },
      { category: { ja: "温泉", en: "Onsen" } as BilingualString, title: { ja: "別府温泉・地獄めぐり", en: "Beppu Onsen Hell Tour" } as BilingualString, duration: { ja: "5時間", en: "5 hrs" } as BilingualString, price: { ja: "¥9,000〜", en: "From ¥9,000" } as BilingualString, gradient: "linear-gradient(135deg, #2A1A0A 0%, #6B3A1A 100%)", unsplash: "1545569341-9eb8b30979d9" },
    ],
  },

  // ── Concierge Page (route: /kyushgo) ────────────────────────
  kyushgo: {
    hero: {
      badge:    { ja: "受付中", en: "Now Available" } as BilingualString,
      eyebrow:  { ja: "旅前コンシェルジュ", en: "PRE-TRIP CONCIERGE" } as BilingualString,
      headline: { ja: "旅の不安を\nゼロにする。", en: "Travel Kyushu,\nworry-free." } as BilingualString,
      subheadline: { ja: "カスタム旅程作成、レストラン予約代行、旅中WhatsAppサポート、空港送迎手配。九州旅行のすべてをお任せください。", en: "Custom itinerary planning, restaurant bookings, in-trip WhatsApp support, airport transfers. Leave everything about your Kyushu trip to us." } as BilingualString,
      download: { ja: "旅の相談をする", en: "Start Planning" } as BilingualString,
      notify:   { ja: "料金を見る", en: "View Pricing" } as BilingualString,
    },
    features: {
      eyebrow:  { ja: "サービス内容", en: "SERVICES" } as BilingualString,
      headline: { ja: "あなたの旅を、トータルサポート。", en: "Complete support for your journey." } as BilingualString,
      items: [
        { icon: "FileText", title: { ja: "カスタム旅程作成", en: "Custom Itinerary Planning" } as BilingualString, desc: { ja: "あなたの旅のスタイル・日程・興味に合わせた完全オーダーメイドの旅程を作成。地元民しか知らない穴場も組み込みます。", en: "A fully customized itinerary tailored to your travel style, schedule, and interests. We include hidden gems only locals know." } as BilingualString },
        { icon: "Utensils", title: { ja: "レストラン・体験予約代行", en: "Restaurant & Activity Booking" } as BilingualString, desc: { ja: "予約困難な人気店、英語メニューのない地元の名店、季節限定の体験。すべて日本語で代行予約します。", en: "Hard-to-book popular restaurants, local spots without English menus, seasonal experiences. We handle all Japanese-language reservations." } as BilingualString },
        { icon: "MessageCircle", title: { ja: "旅中WhatsAppサポート", en: "In-trip WhatsApp Support" } as BilingualString, desc: { ja: "旅行中いつでもWhatsAppでメッセージ。道に迷った、メニューが読めない、急な変更にもリアルタイムで対応。", en: "Message us anytime during your trip. Lost? Can't read the menu? Plans changed? We respond in real-time." } as BilingualString },
        { icon: "Car", title: { ja: "空港送迎・移動手配", en: "Airport Transfer & Transport" } as BilingualString, desc: { ja: "福岡空港からの送迎、都市間移動のチケット手配、レンタカー予約など、移動のすべてをサポート。", en: "Airport pickups from Fukuoka, intercity transport tickets, rental car bookings — we handle all your travel logistics." } as BilingualString },
        { icon: "Map", title: { ja: "穴場スポット案内", en: "Hidden Gems Guide" } as BilingualString, desc: { ja: "ガイドブックに載っていない地元のお気に入りスポット、季節の風景、ローカルイベント情報をお届け。", en: "Our favorite local spots not in guidebooks, seasonal scenery, and local event information — delivered to you." } as BilingualString },
        { icon: "Shield", title: { ja: "緊急対応サポート", en: "Emergency Support" } as BilingualString, desc: { ja: "病院、警察、交通トラブルなど、万が一の時も日本語と英語でサポート。旅先での安心感が違います。", en: "Hospital, police, transport issues — we support you in both Japanese and English. Peace of mind throughout your trip." } as BilingualString },
      ],
    },
    roadmap: {
      eyebrow:  { ja: "料金プラン", en: "PRICING" } as BilingualString,
      headline: { ja: "シンプルな料金体系。", en: "Simple, transparent pricing." } as BilingualString,
      steps: [
        { phase: "Plan A", area: { ja: "旅程作成", en: "Itinerary Only" } as BilingualString, detail: { ja: "¥8,000〜 / カスタム旅程をPDFでお届け", en: "From ¥8,000 / Custom itinerary delivered as PDF" } as BilingualString, status: "current" as const },
        { phase: "Plan B", area: { ja: "旅程+予約代行", en: "Plan + Bookings" } as BilingualString, detail: { ja: "¥15,000〜 / 旅程作成+レストラン・体験予約代行", en: "From ¥15,000 / Itinerary + restaurant & activity bookings" } as BilingualString, status: "current" as const },
        { phase: "Plan C", area: { ja: "フルサポート", en: "Full Support" } as BilingualString, detail: { ja: "¥25,000〜 / 旅程+予約+旅中WhatsAppサポート", en: "From ¥25,000 / Itinerary + bookings + in-trip WhatsApp support" } as BilingualString, status: "current" as const },
        { phase: "Plan D", area: { ja: "プレミアム", en: "Premium" } as BilingualString, detail: { ja: "¥50,000〜 / フルサポート+空港送迎+同行案内1日", en: "From ¥50,000 / Full support + airport transfer + 1-day guided tour" } as BilingualString, status: "next" as const },
      ],
    },
    download: {
      eyebrow:  { ja: "お問い合わせ", en: "GET STARTED" } as BilingualString,
      headline: { ja: "まずはお気軽にご相談ください。", en: "Start with a free consultation." } as BilingualString,
      subtext:  { ja: "WhatsApp、メール、またはお問い合わせフォームからご連絡ください。24時間以内に返信します。", en: "Reach out via WhatsApp, email, or our contact form. We respond within 24 hours." } as BilingualString,
      notify:   { ja: "WhatsAppで相談", en: "Chat on WhatsApp" } as BilingualString,
      partner:  { ja: "お問い合わせフォーム", en: "Contact Form" } as BilingualString,
    },
  },

  // ── Vision Page ──────────────────────────────────────────────
  vision: {
    hero: {
      eyebrow:  { ja: "ビジョン", en: "VISION" } as BilingualString,
      headline: { ja: "旅を通じて、\n日本と世界をつなぐ。", en: "Connecting Japan and\nthe World Through Travel." } as BilingualString,
    },
    mission: {
      eyebrow:   { ja: "ミッション", en: "MISSION" } as BilingualString,
      statement: { ja: "ローカルの宝を、グローバルな体験に変える。", en: "Transforming local treasures into global experiences." } as BilingualString,
      desc:      { ja: "日本の地方には、世界が知るべき文化・食・自然が眠っています。JourneyMateはそれを発掘し、プライベートツアーやコンシェルジュサービスを通じて旅人に届けます。", en: "Japan's regions hold culture, cuisine, and nature that the world deserves to know. JourneyMate uncovers these treasures and delivers them through private tours and concierge services." } as BilingualString,
    },
    values: {
      eyebrow:  { ja: "バリュー", en: "VALUES" } as BilingualString,
      headline: { ja: "私たちが大切にすること。", en: "What we stand for." } as BilingualString,
      items: [
        { title: { ja: "誠実さ", en: "Integrity" } as BilingualString, desc: { ja: "旅人にも、地域にも、誠実であること。", en: "Honest to travelers and communities alike." } as BilingualString },
        { title: { ja: "好奇心", en: "Curiosity" } as BilingualString, desc: { ja: "常に「もっと面白いこと」を探し続ける。", en: "Always seeking what's more interesting." } as BilingualString },
        { title: { ja: "共創", en: "Co-creation" } as BilingualString, desc: { ja: "地域・旅人・パートナーと一緒につくる。", en: "Building together with communities and travelers." } as BilingualString },
        { title: { ja: "持続可能性", en: "Sustainability" } as BilingualString, desc: { ja: "量より質、規模より深さを大切に。", en: "Quality over quantity, depth over scale." } as BilingualString },
      ],
    },
    revitalization: {
      eyebrow:  { ja: "地方創生", en: "REGIONAL REVITALIZATION" } as BilingualString,
      headline: { ja: "観光で、地域を輝かせる。", en: "Illuminating regions through tourism." } as BilingualString,
      desc:     { ja: "インバウンド観光は地域経済を活性化させる力を持っています。私たちは九州を起点に、旅と地域をつなぐモデルを作り、全国に広げていきます。", en: "Inbound tourism holds the power to energize local economies. Starting from Kyushu, we build the model connecting travel and community, then scale it nationwide." } as BilingualString,
    },
    scale: {
      eyebrow:  { ja: "成長戦略", en: "GROWTH STRATEGY" } as BilingualString,
      headline: { ja: "九州から、\n日本全国へ。", en: "From Kyushu,\nto all of Japan." } as BilingualString,
      steps: [
        { ja: "九州でのツアー・コンシェルジュ事業の確立", en: "Establish tours & concierge business in Kyushu" },
        { ja: "直接予約とSNS集客による自立型収益モデル構築", en: "Build self-sustaining revenue via direct bookings and SNS" },
        { ja: "旅人が集まるゲストハウスの開業", en: "Open a guesthouse where travelers gather" },
        { ja: "日本各地へのサービス展開", en: "Expand services across Japan" },
      ],
    },
  },

  // ── Contact Page ─────────────────────────────────────────────
  contact: {
    hero: {
      eyebrow:     { ja: "お問い合わせ", en: "CONTACT" } as BilingualString,
      headline:    { ja: "九州の旅、\nご相談ください。", en: "Let's plan your\nKyushu adventure." } as BilingualString,
      subheadline: { ja: "ツアー予約、旅前コンシェルジュ、プライベートツアーのご相談を承っています。", en: "Tour bookings, pre-trip concierge, private tour inquiries — we'd love to hear from you." } as BilingualString,
    },
    form: {
      name:    { ja: "お名前", en: "Name" } as BilingualString,
      email:   { ja: "メールアドレス", en: "Email Address" } as BilingualString,
      type:    { ja: "お問い合わせ種別", en: "Inquiry Type" } as BilingualString,
      message: { ja: "メッセージ", en: "Message" } as BilingualString,
      submit:  { ja: "送信する", en: "Send Message" } as BilingualString,
      success: { ja: "お問い合わせを受け付けました。24時間以内にご連絡いたします。", en: "Your message has been received. We'll respond within 24 hours." } as BilingualString,
      namePlaceholder:    { ja: "山田 太郎", en: "John Smith" } as BilingualString,
      emailPlaceholder:   "email@example.com",
      messagePlaceholder: { ja: "旅行の日程、行きたい場所、興味のあることなどを教えてください", en: "Tell us your travel dates, places you'd like to visit, and interests..." } as BilingualString,
      types: [
        { label: { ja: "プライベートツアー", en: "Private Tour" } as BilingualString, value: "tour" },
        { label: { ja: "旅前コンシェルジュ", en: "Pre-trip Concierge" } as BilingualString, value: "concierge" },
        { label: { ja: "カスタム体験", en: "Custom Experience" } as BilingualString, value: "custom" },
        { label: { ja: "その他", en: "Other" } as BilingualString, value: "other" },
      ],
    },
    info: {
      eyebrow:     { ja: "連絡先", en: "CONTACT INFO" } as BilingualString,
      company:     { ja: "JourneyMate", en: "JourneyMate" } as BilingualString,
      location:    { ja: "福岡県 / Fukuoka, Japan", en: "Fukuoka, Japan" } as BilingualString,
      email:       "hello@journeymate.jp",
      partnership: { ja: "WhatsAppでもお気軽にご連絡ください", en: "Feel free to reach out via WhatsApp too" } as BilingualString,
    },
  },

  // ── Footer ────────────────────────────────────────────────────
  footer: {
    tagline:   { ja: "九州から旅を届ける。", en: "Your local friend in Kyushu." } as BilingualString,
    copyright: { ja: "© 2025 JourneyMate. All rights reserved.", en: "© 2025 JourneyMate. All rights reserved." } as BilingualString,
    nav: [
      { label: { ja: "ツアー", en: "Tours" } as BilingualString, href: "/tours" },
      { label: { ja: "旅前サポート", en: "Concierge" } as BilingualString, href: "/kyushgo" },
      { label: { ja: "ビジョン", en: "Vision" } as BilingualString, href: "/vision" },
      { label: { ja: "お問い合わせ", en: "Contact" } as BilingualString, href: "/contact" },
    ],
    legal: [
      { label: { ja: "プライバシーポリシー", en: "Privacy Policy" } as BilingualString, href: "#" },
      { label: { ja: "利用規約", en: "Terms of Service" } as BilingualString, href: "#" },
    ],
  },
} as const;
