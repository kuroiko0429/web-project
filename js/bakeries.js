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
    mapUrl: "#",
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
    mapUrl: "#",
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
    mapUrl: "#",
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
    mapUrl: "#",
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
    mapUrl: "#",
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
    mapUrl: "#",
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
    mapUrl: "#",
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
    mapUrl: "#",
  },
  {
    name: "MARURI bread & cafe",
    subtitle: "素敵な庭を眺めながら過ごせる、隠れ家パンカフェ",
    icon: "imgs/marui.jpg",
    tag: "直営店",
    description:
      "白壁に青緑色のドアが映えるお洒落な一軒家のパン屋さん。道産小麦にこだわった「しっとりもっちり」の食パンやクロワッサンが人気です。カフェスペースが併設されており、お庭を眺めながらゆっくりとランチやパンを楽しむことができます。",
    address: "〒069-0806 北海道江別市新栄台５−８",
    hours: "9:00 - 18:00",
    closed: "日曜日",
    features: ["ハルユタカ使用",  "テイクアウト可", "イートイン・カフェ", "駐車場", "予約可", "季節限定"],
    categories: ["nopporo"],
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
