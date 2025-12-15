const bakeries = [
  {
    name: "菓子工房　笑くぼ",
    subtitle: "仮タイトル",
    icon: "🏭",
    tag: "仮タグ",
    description:
      "障がいをもつ方の自立支援をサポートしているの菓子工房です。道産小麦を使ったお菓子やベーグル・ケーキなどの販売を行っています。",
    address: "仮住所",
    hours: "8:00 - 18:00",
    closed: "月曜日",
    features: ["春よ恋100%", "イートイン", "駐輪場"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "Cinnamon Bakery（シナモンベーカリー）",
    subtitle: "小麦の味を楽しむパン",
    icon: "🌾",
    tag: "人気店",
    description:
      "デニッシュ系のパンやキッシュなどの珍しいパンを取り扱っているお店です。",
    address: "江別市△△町4-5-6",
    hours: "7:00 - 19:00",
    closed: "水曜日",
    features: ["春よ恋使用", "予約可", "テイクアウト"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "低糖質専門店 niros bake（ニロズベイク）",
    subtitle: "天然酵母のこだわり",
    icon: "🥐",
    tag: "天然酵母",
    description:
      "低糖質で美味しいバーガーやお菓子、お弁当などを扱っており、糖質の記載がされているので糖質制限中の方にはもってこいのお店です。",
    address: "江別市□□町7-8-9",
    hours: "9:00 - 17:00",
    closed: "火・木曜日",
    features: ["天然酵母", "オーガニック", "カフェ併設"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "Pasco 夢パン工房 野幌店",
    subtitle: "石窯焼きの本格派",
    icon: "🧱",
    tag: "石窯焼き",
    description:
      "北海道産小麦にこだわったお店です。定番の「超熟」から野幌店限定の商品まで幅広く取りそろえられています。",
    address: "江別市××町10-11-12",
    hours: "10:00 - 18:00",
    closed: "日曜日",
    features: ["石窯焼き", "春よ恋使用", "ワークショップ"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "Bakery Nire Kaze（ベーカリー ニレカゼ）",
    subtitle: "家族で楽しめるパン屋",
    icon: "🏠",
    tag: "ファミリー",
    description:
      "ハード系のパンを多く取り扱っているパン屋です。北海道産小麦を使っており、スコーンなどのメニューも取り扱っています。",
    address: "江別市◇◇町13-14-15",
    hours: "8:30 - 19:30",
    closed: "不定休",
    features: ["春よ恋100%", "キッズスペース", "駐車場"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "Picco Bakery（ピッコ ベーカリー）",
    subtitle: "地産地消のこだわり",
    icon: "🌱",
    tag: "地産地消",
    description:
      "道産小麦を使ったパンで様々な種類のパンがあり、プチパンなどの小さめなパンやボリュームのあるパンまであります。",
    address: "江別市☆☆町16-17-18",
    hours: "7:30 - 18:30",
    closed: "木曜日",
    features: ["地産地消", "惣菜パン充実", "配達サービス"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "ブランジェール　ラパン",
    subtitle: "伝統と革新のハーモニー",
    icon: "🎨",
    tag: "創作パン",
    description:
      "江別産の小麦と北海道産の食材にこだわったパンや食パンのフレーバーを多く取り扱うお店です。",
    address: "江別市●●町19-20-21",
    hours: "9:00 - 18:00",
    closed: "月・火曜日",
    features: ["創作パン", "春よ恋使用", "季節限定"],
    categories: ["nopporo"],
    mapUrl: "#",
  },
  {
    name: "ほっぺぱん",
    subtitle: "製粉所のもう一つの顔",
    icon: "⚙️",
    tag: "直営店",
    description:
      "コッペパンに好きな具材を挟んで購入できるため、好みのパンにできます。ボリューム満点で美味しいです。",
    address: "江別市▲▲町22-23-24",
    hours: "10:00 - 17:00",
    closed: "月・水・金曜日",
    features: ["春よ恋100%", "限定商品", "工場見学可"],
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
