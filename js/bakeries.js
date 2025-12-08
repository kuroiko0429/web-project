const bakeries = [
  {
    name: "江別製粉所直営パン屋",
    subtitle: "製粉所直営の本格派",
    icon: "🏭",
    tag: "直営店",
    description:
      "江別産「ハルユタカ」小麦を100%使用した、風味豊かなパンが自慢。サイクリストにも人気の休憩スポット。",
    address: "江別市○○町1-2-3",
    hours: "8:00 - 18:00",
    closed: "月曜日",
    features: ["春よ恋100%", "イートイン", "駐輪場"],
    categories: ["haruyutaka", "direct"],
    mapUrl: "#",
  },
  {
    name: "ハルユタカ ベーカリー",
    subtitle: "小麦の味を楽しむパン",
    icon: "🌾",
    tag: "人気店",
    description:
      "「春よ恋」を使った小麦本来の味を楽しめる、もちもち食感のパンが人気。季節限定パンもおすすめです。",
    address: "江別市△△町4-5-6",
    hours: "7:00 - 19:00",
    closed: "水曜日",
    features: ["春よ恋使用", "予約可", "テイクアウト"],
    categories: ["haruyutaka"],
    mapUrl: "#",
  },
  {
    name: "森の小さなパン屋さん",
    subtitle: "天然酵母のこだわり",
    icon: "🥐",
    tag: "天然酵母",
    description:
      "江別の自然に囲まれた小さなパン屋。天然酵母を使ったパンは、全て手作りで優しい味わいです。",
    address: "江別市□□町7-8-9",
    hours: "9:00 - 17:00",
    closed: "火・木曜日",
    features: ["天然酵母", "オーガニック", "カフェ併設"],
    categories: ["natural"],
    mapUrl: "#",
  },
  {
    name: "煉瓦窯パン",
    subtitle: "石窯焼きの本格派",
    icon: "🧱",
    tag: "石窯焼き",
    description:
      "江別の煉瓦を使った石窯で焼き上げる、香ばしいパンが人気。外はカリッと、中はもちもちの食感が楽しめます。",
    address: "江別市××町10-11-12",
    hours: "10:00 - 18:00",
    closed: "日曜日",
    features: ["石窯焼き", "春よ恋使用", "ワークショップ"],
    categories: ["haruyutaka"],
    mapUrl: "#",
  },
  {
    name: "小麦の家",
    subtitle: "家族で楽しめるパン屋",
    icon: "🏠",
    tag: "ファミリー",
    description:
      "江別「ハルユタカ」小麦を100%使用した、全てのパンが手作り。サイクリストも多く訪れる憩いの場。",
    address: "江別市◇◇町13-14-15",
    hours: "8:30 - 19:30",
    closed: "不定休",
    features: ["春よ恋100%", "キッズスペース", "駐車場"],
    categories: ["haruyutaka"],
    mapUrl: "#",
  },
  {
    name: "パン工房みのり",
    subtitle: "地産地消のこだわり",
    icon: "🌱",
    tag: "地産地消",
    description:
      "江別産の小麦と地元の食材にこだわった、季節感あふれるパンを提供。地域に愛される老舗パン屋です。",
    address: "江別市☆☆町16-17-18",
    hours: "7:30 - 18:30",
    closed: "木曜日",
    features: ["地産地消", "惣菜パン充実", "配達サービス"],
    categories: [],
    mapUrl: "#",
  },
  {
    name: "江別ベーカリー麦",
    subtitle: "伝統と革新のハーモニー",
    icon: "🎨",
    tag: "創作パン",
    description:
      "伝統的な製法と新しいアイデアを融合させた創作パンが人気。江別の小麦の魅力を最大限に引き出しています。",
    address: "江別市●●町19-20-21",
    hours: "9:00 - 18:00",
    closed: "月・火曜日",
    features: ["創作パン", "春よ恋使用", "季節限定"],
    categories: ["haruyutaka"],
    mapUrl: "#",
  },
  {
    name: "江別製粉所直営 第二工房",
    subtitle: "製粉所のもう一つの顔",
    icon: "⚙️",
    tag: "直営店",
    description:
      "製粉所直営ならではの新鮮な小麦を使用。実験的な商品も並ぶ、小麦の可能性を追求する工房です。",
    address: "江別市▲▲町22-23-24",
    hours: "10:00 - 17:00",
    closed: "月・水・金曜日",
    features: ["春よ恋100%", "限定商品", "工場見学可"],
    categories: ["haruyutaka", "direct"],
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
                    ${bakery.icon}
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
