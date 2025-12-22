const bakeries = [
  {
    name: "菓子工房　笑くぼ",
    subtitle: "北海道の大地が香る、道産小麦100%の優しい甘み",
    icon: "imgs/ekubo.jpg",
    tag: "道産小麦",
    description:
      "障がいをもつ方の自立支援をサポートしているの菓子工房です。道産小麦を使ったお菓子やベーグル・ケーキなどの販売を行っています。",
    address: "〒069-0813 北海道江別市野幌町５７−１２ 八丁目プラザ のっぽ 1F",
    hours: "10:30 - 15:00",
    closed: "日曜日.祝日",
    features: ["ハルユタカ使用", "天然酵母", "テイクアウト可", "イートイン・カフェ", "配達サービス", "季節限定"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/CjNo5X76JKL1yAhV9",
  },
  {
    name: "Cinnamon Bakery（シナモンベーカリー）",
    subtitle: "小麦の味を楽しむパン",
    icon: "imgs/sinamon.jpg",
    tag: "人気店",
    description:
      "デニッシュ系のパンやキッシュなどの珍しいパンを取り扱っているお店です。",
    address: "〒069-0802 北海道江別市野幌寿町１６−２",
    hours: "10:00 - 16:00",
    closed: "月曜日.火曜日",
    features: ["ハルユタカ使用", "テイクアウト可", "駐車場", "季節限定", "予約可"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/bRjyzuvMk64uGJ1U6",
  },
  {
    name: "低糖質専門店 niros bake（ニロズベイク）",
    subtitle: "天然酵母のこだわり",
    icon: "imgs/nirozubeiku.jpg",
    tag: "天然酵母",
    description:
      "低糖質で美味しいバーガーやお菓子、お弁当などを扱っており、糖質の記載がされているので糖質制限中の方にはもってこいのお店です。",
    address: "〒069-0814 北海道江別市野幌松並町10−２４ シャレード 藤 E 棟左",
    hours: "11:00 - 16:00",
    closed: "月曜日.火曜日.水曜日.木曜日.金曜日.日曜日",
    features: ["テイクアウト可", "予約可", "季節限定", "カフェ"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/quXRjcNMG2dY2xYF9",
  },
  {
    name: "Pasco 夢パン工房 野幌店",
    subtitle: "石窯焼きの本格派",
    icon: "imgs/yumepan.jpg",
    tag: "石窯焼き",
    description:
      "北海道産小麦にこだわったお店です。定番の「超熟」から野幌店限定の商品まで幅広く取りそろえられています。",
    address: "〒069-0832 北海道江別市西野幌１０７−１ ゆめちからテラス内",
    hours: "9:00 - 17:00",
    closed: "基本的に無し",
    features: ["ハルユタカ使用", "テイクアウト可", "イートイン・カフェ", "駐車場", "石窯焼き", "季節限定", "予約可"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/dmYjv8ZL7vAvaQjV7",
  },
  {
    name: "Bakery Nire Kaze（ベーカリー ニレカゼ）",
    subtitle: "家族で楽しめるパン屋",
    icon: "imgs/nirekaze.jpg",
    tag: "ファミリー",
    description:
      "ハード系のパンを多く取り扱っているパン屋です。北海道産小麦を使っており、スコーンなどのメニューも取り扱っています。",
    address: "〒069-0812 北海道江別市幸町１４−６ OMレジデンス野幌 １F",
    hours: "11:00 - 18:00",
    closed: "火曜日.水曜日",
    features: ["ハルユタカ使用", "テイクアウト可", "予約可", "駐車場", "季節限定"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/UcAyfLttTeJRBqdV6",
  },
  {
    name: "Picco Bakery（ピッコ ベーカリー）",
    subtitle: "地産地消のこだわり",
    icon: "imgs/pikko.jpg",
    tag: "地産地消",
    description:
      "道産小麦を使ったパンで様々な種類のパンがあり、プチパンなどの小さめなパンやボリュームのあるパンまであります。",
    address: "〒069-0801 北海道江別市中央町４２−２９",
    hours: "9:00 - 17:00",
    closed: "水曜日",
    features: ["ハルユタカ使用", "駐車場", "予約可", "季節限定/限定メニュー"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/A26vu3Rb6UqMAtVQ6",
  },
  {
    name: "ブランジェール　ラパン",
    subtitle: "伝統と革新のハーモニー",
    icon: "imgs/rapan.jpg",
    tag: "創作パン",
    description:
      "江別産の小麦と北海道産の食材にこだわったパンや食パンのフレーバーを多く取り扱うお店です。",
    address: "〒069-0813 北海道江別市野幌町７６−１",
    hours: "10:00 - 18:00",
    closed: "日曜日",
    features: ["ハルユタカ使用", "テイクアウト可", "駐車場", "予約可", "季節限定"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/gKqGdr4oGytfoR5T9",
  },
  {
    name: "ほっぺぱん",
    subtitle: "製粉所のもう一つの顔",
    icon: "imgs/hoppe.jpg",
    tag: "直営店",
    description:
      "コッペパンに好きな具材を挟んで購入できるため、好みのパンにできます。ボリューム満点で美味しいです。",
    address: "〒069-0813 北海道江別市野幌町５３−５５ 佐野ビル",
    hours: "9:30 - 18:00",
    closed: "月曜日.日曜日",
    features: ["ハルユタカ使用", "テイクアウト可", "駐車場", "予約可", "季節限定"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/jyjPwDbZzzMUzqwaA",
  },
  {
    name: "MARURI bread & cafe",
    subtitle: "素敵な庭を眺めながら過ごせる、隠れ家パンカフェ",
    icon: "imgs/marui.jpg",
    tag: "隠れ家",
    description:
      "白壁に青緑色のドアが映えるお洒落な一軒家のパン屋さん。道産小麦にこだわった「しっとりもっちり」の食パンやクロワッサンが人気です。カフェスペースが併設されており、お庭を眺めながらゆっくりとランチやパンを楽しむことができます。",
    address: "〒069-0806 北海道江別市新栄台５−８",
    hours: "9:00 - 18:00",
    closed: "日曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "イートイン・カフェ", "駐車場", "予約可", "季節限定"],
    categories: ["nopporo"],
    mapUrl: "https://maps.app.goo.gl/4pATWvKYgYA8DyMj7",
  },

  {
    name: "ODD BAKERY",
    subtitle: "「少しの特別（ODD）」を添える、洗練されたパン",
    icon: "imgs/odd.jpg",
    tag: "日常",
    description:
      "サクサク食感のクロワッサンやデニッシュ、そして江別産小麦の甘みを引き出した食パンは、一度食べると虜になるファンが続出しています。",
    address: "〒067-0005 北海道江別市牧場町１４−１",
    hours: "10:00 - 20:00",
    closed: "基本的に無し",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可", "季節限定",],
    categories: ["ebetu"],
    mapUrl: "https://maps.app.goo.gl/X93Sru5Bhgz9LzwNA",
  },
  {
    name: "Croissant Factory MIL",
    subtitle: "27層が奏でる、極上のサクサク食感",
    icon: "imgs/mil.jpg",
    tag: "お土産",
    description:
      "北海道産バターの芳醇な香りが口いっぱいに広がり、贅沢な満足感を味わえます。",
    address: "〒067-0023 北海道江別市東光町３５−１０",
    hours: "10:00 - 17:00",
    closed: "月曜日.金曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可", "季節限定",],
    categories: ["ebetu"],
    mapUrl: "#",
  },
  {
    name: "ドルチェ&ベーカリーカフェ Amam",
    subtitle: "江別の赤レンガで楽しむ、贅沢パンランチとスイーツ",
    icon: "imgs/dorutye.jpg",
    tag: "手土産",
    description:
      "パンだけでなく見た目も華やかな焼き菓子やケーキが揃い、手土産選びにも困りません。",
    address: "〒067-0061 北海道江別市上江別東町４４−８",
    hours: "10:00 - 18:00",
    closed: "火曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "イートイン・カフェ", "駐車場", "予約可", "季節限定"],
    categories: ["ebetu"],
    mapUrl: "#",
  },
  {
    name: "flamme! (フラム)",
    subtitle: "薪火の香りに包まれる、本格ハードパンと料理の店",
    icon: "imgs/fulam.jpg",
    tag: "薪窯",
    description:
      "焼きたてパンをお店自慢の薪火料理と一緒にその場で楽しめる、贅沢な体験が可能です。",
    address: "〒067-0066 北海道江別市ゆめみ野南町2−２０",
    hours: "10:00 - 15:00",
    closed: "月曜日.火曜日.水曜日.木曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "イートイン・カフェ", "駐車場", "予約可", "石窯焼き（薪窯）", "季節限定"],
    categories: ["ebetu"],
    mapUrl: "#",
  },
  {
    name: "FATE BAKE",
    subtitle: "ザクザク食感に驚く、進化系スコーンの専門店",
    icon: "imgs/fate.jpg",
    tag: "江別産小麦",
    description:
      "表面の「ザクッ」とした力強い歯ごたえと、中の「しっとり」感のコントラストが、従来のスコーンのイメージを覆します。",
    address: "〒067-0042 北海道江別市見晴台１５−１",
    hours: "9:00 - 17:00",
    closed: "月曜日.日曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可", "季節限定"],
    categories: ["ebetu"],
    mapUrl: "#",
  },
  {
    name: "ベーカリーもみの木",
    subtitle: "毎日通いたくなる、ホッとする味と手頃な価格",
    icon: "imgs/mominoki.jpg",
    tag: "名店",
    description:
      "最近の高級パン店とは一線を画す、非常にリーズナブルな価格設定で家計に優しい。",
    address: "〒067-0042 北海道江別市見晴台１２−１４",
    hours: "7:30 - 15:30",
    closed: "月曜日.日曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可","季節限定"],
    categories: ["ebetu"],
    mapUrl: "#",
  },

  {
    name: "どんぐり 大麻店",
    subtitle: "焼きたて・揚げたて・作りたて！札幌圏最強のパンのテーマパーク",
    icon: "imgs/donguri.jpg",
    tag: "家族",
    description:
      "広いイートイン、キッズスペース、充実のテラス席と、ファミリーで楽しむための設備が完璧。",
    address: "〒069-0845 北海道江別市大麻２１３−２",
    hours: "9:00 - 19:00",
    closed: "基本的に無し",
    features: ["ハルユタカ使用",  "テイクアウト可", "イートイン・カフェ", "駐車場", "キッズスペース", "季節限定"],
    categories: ["ooasa"],
    mapUrl: "#",
  },
  {
    name: "ぱん屋ねこのさんぽ",
    subtitle: "猫モチーフに癒やされる、優しさあふれる街のパン屋",
    icon: "imgs/neko.jpg",
    tag: "江別産・道産小麦",
    description:
      "肉球パンや猫の形の食パンなど、見た目だけで笑顔になれる可愛いパンが豊富で、ギフトにも最適。",
    address: "〒069-0852 北海道江別市大麻東町１３−１６",
    hours: "8:00 - 15:00",
    closed: "水曜日.木曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可", "季節限定"],
    categories: ["ooasa"],
    mapUrl: "#",
  },
  {
    name: "パン屋 Sora",
    subtitle: "毎日食べたい、ふんわり優しい「空」のようなパン",
    icon: "imgs/sora.jpg",
    tag: "絶品",
    description:
      "生地が非常に柔らかく、口どけが良いのが特徴。特に「白パン」系のしっとり感は絶品です。",
    address: "〒069-0847 北海道江別市大麻ひかり町４５−８",
    hours: "8:00 - 15:00",
    closed: "火曜日.水曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可", "季節限定"],
    categories: ["ooasa"],
    mapUrl: "#",
  },
  {
    name: "パン工房 あさのわ",
    subtitle: "薪窯で焼く力強い天然酵母パン",
    icon: "imgs/anosawa.jpg",
    tag: "薪窯",
    description:
      "手作りの薪窯（石窯）で焼き上げられたパンは、皮がパリッと香ばしく、中は驚くほどもっちりとした唯一無二の食感。",
    address: "〒069-0841 北海道江別市大麻元町１５４−１３",
    hours: "9:30 - 17:00",
    closed: "火曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "駐車場", "予約可", "石窯焼き（薪窯）", "天然酵母", "季節限定"],
    categories: ["ooasa"],
    mapUrl: "#",
  },
];

// パン屋カードを生成する関数
function createBakeryCard(bakery) {
  const card = document.createElement("div");
  card.className = "bakery-card";
  card.dataset.categories = bakery.categories.join(" ");

  card.innerHTML = `
                <div class="bakery-image">
                    <img src="${bakery.icon}" alt="${bakery.name}">
                    <div class="bakery-tag">${bakery.tag}</div>
                </div>
                <div class="bakery-content">
                    <h2 class="bakery-title">${bakery.name}</h2>
                    <p class="bakery-subtitle">${bakery.subtitle}</p>
                    <p class="bakery-description">${bakery.description}</p>
                    <div class="bakery-info">
                        <div class="info-item">
                            <span class="info-icon">📍</span>
                            <span>${bakery.address}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-icon">🕐</span>
                            <span>${bakery.hours}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-icon">🚫</span>
                            <span>定休日: ${bakery.closed}</span>
                        </div>
                    </div>
                    <div class="bakery-features">
                        ${bakery.features
                          .map(
                            (feature) =>
                              `<span class="feature-badge">${feature}</span>`
                          )
                          .join("")}
                    </div>
                    <a href="${
                      bakery.mapUrl
                    }" class="bakery-button">ルートマップで見る</a>
                </div>
            `;

  return card;
}

// パン屋カードを表示
function displayBakeries(filter = "all") {
  const grid = document.getElementById("bakeryGrid");
  grid.innerHTML = "";

  bakeries.forEach((bakery, index) => {
    if (filter === "all" || bakery.categories.includes(filter)) {
      const card = createBakeryCard(bakery);
      grid.appendChild(card);

      // アニメーション
      setTimeout(() => {
        anime({
          targets: card,
          opacity: [0, 1],
          scale: [0.9, 1],
          duration: 600,
          easing: "easeOutExpo",
        });
        card.classList.add("show");
      }, index * 100);
    }
  });
}

// フィルターボタンの処理
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // アクティブクラスの切り替え
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // フィルター適用
    const filter = this.dataset.filter;
    displayBakeries(filter);
  });
});

// 初期表示
displayBakeries();

// カードホバーアニメーション
document.addEventListener("mouseover", function (e) {
  if (e.target.closest(".bakery-card")) {
    const card = e.target.closest(".bakery-card");
    anime({
      targets: card.querySelector(".bakery-image"),
      scale: 1.05,
      duration: 300,
      easing: "easeOutQuad",
    });
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.closest(".bakery-card")) {
    const card = e.target.closest(".bakery-card");
    anime({
      targets: card.querySelector(".bakery-image"),
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    });
  }
});
