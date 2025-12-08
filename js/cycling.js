// サイクリングコースデータ（ここに追加・編集するだけで簡単に管理できます）
const courses = [
  {
    name: "ともや",
    subtitle: "市街地をゆったり巡る",
    level: "初心者",
    levelClass: "beginner",
    distance: 8.5,
    duration: 45,
    elevation: 20,
    description:
      "江別市街地を巡る平坦なコース。パン屋3軒を回りながら、歴史的建造物や公園を訪れます。初めてのサイクリングにぴったり。",
    highlights: [
      "市街地の主要なパン屋3軒",
      "江別れんが館を見学",
      "平坦な道で安心",
      "信号が少なく走りやすい",
    ],
    tags: ["初心者向け", "平坦", "市街地", "短距離"],
    distanceClass: "short",
  },
  {
    name: "石狩川沿い 絶景ロングライド",
    subtitle: "川沿いの爽快サイクリング",
    level: "中級者",
    levelClass: "intermediate",
    distance: 25.3,
    duration: 120,
    elevation: 80,
    description:
      "石狩川沿いのサイクリングロードを走る人気コース。広大な田園風景と川の流れを楽しみながら、5軒のパン屋を巡ります。",
    highlights: [
      "石狩川の絶景パノラマ",
      "専用サイクリングロード",
      "田園風景が美しい",
      "パン屋5軒を効率よく巡回",
    ],
    tags: ["中級者向け", "川沿い", "絶景", "中距離"],
    distanceClass: "medium",
  },
  {
    name: "小麦畑を巡る 春よ恋コース",
    subtitle: "小麦の産地を体感する",
    level: "初心者",
    levelClass: "beginner",
    distance: 12.5,
    duration: 60,
    elevation: 35,
    description:
      "江別の小麦畑エリアを巡るコース。「春よ恋」が育つ畑を見学しながら、製粉所直営のパン屋を中心に3軒を訪問します。",
    highlights: [
      "小麦畑の風景を満喫",
      "製粉所見学可能",
      "春よ恋使用パン屋3軒",
      "写真スポット多数",
    ],
    tags: ["初心者向け", "小麦畑", "製粉所", "短距離"],
    distanceClass: "short",
  },
  {
    name: "野幌森林公園 自然満喫コース",
    subtitle: "森の中を走る爽快ルート",
    level: "中級者",
    levelClass: "intermediate",
    distance: 18.7,
    duration: 90,
    elevation: 120,
    description:
      "野幌森林公園周辺を巡る緑豊かなコース。起伏がありますが、森林浴を楽しみながら4軒のパン屋を訪れます。",
    highlights: [
      "野幌森林公園の大自然",
      "野鳥観察スポット",
      "適度なアップダウン",
      "森のカフェ併設パン屋",
    ],
    tags: ["中級者向け", "森林", "自然", "中距離"],
    distanceClass: "medium",
  },
  {
    name: "江別完全制覇 チャレンジコース",
    subtitle: "全てのパン屋を一日で巡る",
    level: "上級者",
    levelClass: "advanced",
    distance: 42.8,
    duration: 210,
    elevation: 200,
    description:
      "江別市内の主要パン屋8軒を一日で巡る本格派コース。体力に自信のある方におすすめ。達成感は格別です。",
    highlights: [
      "パン屋8軒を完全制覇",
      "江別の魅力を総合的に体験",
      "様々な地形を走破",
      "サイクリスト向けマップ付き",
    ],
    tags: ["上級者向け", "長距離", "チャレンジ", "全制覇"],
    distanceClass: "long",
  },
  {
    name: "夕暮れサンセット 石狩川コース",
    subtitle: "美しい夕日を求めて",
    level: "初心者",
    levelClass: "beginner",
    distance: 10.2,
    duration: 50,
    elevation: 15,
    description:
      "石狩川沿いで夕日を楽しむ短距離コース。夕方スタートで、サンセットを見ながら2軒のパン屋でディナー用のパンを購入。",
    highlights: [
      "石狩川の美しいサンセット",
      "夕方の涼しい時間帯",
      "平坦で走りやすい",
      "夕食用パン購入に最適",
    ],
    tags: ["初心者向け", "夕方", "サンセット", "短距離"],
    distanceClass: "short",
  },
  {
    name: "れんが建築巡り 歴史探訪コース",
    subtitle: "江別の歴史と文化を学ぶ",
    level: "初心者",
    levelClass: "beginner",
    distance: 14.3,
    duration: 75,
    elevation: 40,
    description:
      "江別のれんが建築を巡る文化的なコース。歴史を感じながら4軒の老舗パン屋を訪問。建築好きにもおすすめです。",
    highlights: [
      "れんが建築の見学",
      "江別の歴史を学べる",
      "老舗パン屋4軒",
      "フォトジェニックなスポット",
    ],
    tags: ["初心者向け", "歴史", "文化", "短距離"],
    distanceClass: "short",
  },
  {
    name: "郊外アドベンチャー 丘陵コース",
    subtitle: "起伏に富んだ本格ルート",
    level: "上級者",
    levelClass: "advanced",
    distance: 35.6,
    duration: 180,
    elevation: 280,
    description:
      "江別郊外の丘陵地帯を走る上級者向けコース。激しいアップダウンで体力を要しますが、頂上からの眺めは絶景。6軒のパン屋を巡ります。",
    highlights: [
      "丘陵頂上からの絶景",
      "本格的な上り坂",
      "達成感抜群",
      "景色の変化を楽しめる",
    ],
    tags: ["上級者向け", "丘陵", "絶景", "長距離"],
    distanceClass: "long",
  },
  {
    name: "週末ファミリー 公園巡りコース",
    subtitle: "家族で楽しむのんびりサイクリング",
    level: "初心者",
    levelClass: "beginner",
    distance: 9.8,
    duration: 60,
    elevation: 25,
    description:
      "公園を巡りながらパン屋を訪れる家族向けコース。休憩ポイントが多く、小さなお子様連れでも安心です。",
    highlights: [
      "公園での休憩ポイント多数",
      "遊具のある公園",
      "ファミリー向けパン屋3軒",
      "安全な道のり",
    ],
    tags: ["初心者向け", "ファミリー", "公園", "短距離"],
    distanceClass: "short",
  },
  {
    name: "早朝モーニング 焼きたてパンコース",
    subtitle: "焼きたてを求めて朝活",
    level: "中級者",
    levelClass: "intermediate",
    distance: 22.1,
    duration: 100,
    elevation: 65,
    description:
      "早朝スタートで焼きたてパンをゲットするコース。朝の静かな街並みと新鮮な空気を楽しみながら、5軒のパン屋を効率的に巡ります。",
    highlights: [
      "焼きたてパンを優先的に購入",
      "早朝の清々しい空気",
      "朝営業のパン屋5軒",
      "混雑を避けて快適",
    ],
    tags: ["中級者向け", "早朝", "焼きたて", "中距離"],
    distanceClass: "medium",
  },
];

// 現在のフィルター状態
let currentFilters = {
  level: "all",
  distance: "all",
};

// レベルのラベル色
const levelColors = {
  beginner: "rgba(152, 151, 26, 0.3)",
  intermediate: "rgba(69, 133, 136, 0.3)",
  advanced: "rgba(204, 36, 29, 0.3)",
};

// コースカードを生成する関数
function createCourseCard(course) {
  const card = document.createElement("div");
  card.className = "course-card";
  card.dataset.level = course.levelClass;
  card.dataset.distance = course.distanceClass;

  card.innerHTML = `
                <div class="course-header" style="background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);">
                    <div class="course-level" style="background-color: ${
                      levelColors[course.levelClass]
                    }">${course.level}</div>
                    <h2 class="course-title">${course.name}</h2>
                    <p class="course-subtitle">${course.subtitle}</p>
                </div>
                <div class="course-content">
                    <p class="course-description">${course.description}</p>
                    
                    <div class="course-stats">
                        <div class="stat-item">
                            <div class="stat-icon">📏</div>
                            <div class="stat-value">${course.distance}km</div>
                            <div class="stat-label">距離</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon">⏱️</div>
                            <div class="stat-value">${course.duration}分</div>
                            <div class="stat-label">所要時間</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon">⛰️</div>
                            <div class="stat-value">${course.elevation}m</div>
                            <div class="stat-label">獲得標高</div>
                        </div>
                    </div>

                    <div class="course-highlights">
                        <div class="highlights-title">
                            <span>✨</span>
                            <span>コースのポイント</span>
                        </div>
                        <ul class="highlight-list">
                            ${course.highlights
                              .map((highlight) => `<li>${highlight}</li>`)
                              .join("")}
                        </ul>
                    </div>

                    <div class="course-tags">
                        ${course.tags
                          .map((tag) => `<span class="tag">${tag}</span>`)
                          .join("")}
                    </div>

                    <div class="course-buttons">
                        <a href="#" class="course-btn btn-primary">ルートを見る</a>
                        <a href="#" class="course-btn btn-secondary">詳細情報</a>
                    </div>
                </div>
            `;

  return card;
}

// コースカードを表示
function displayCourses() {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";

  let displayedCount = 0;

  courses.forEach((course, index) => {
    const matchLevel =
      currentFilters.level === "all" ||
      course.levelClass === currentFilters.level;
    const matchDistance =
      currentFilters.distance === "all" ||
      course.distanceClass === currentFilters.distance;

    if (matchLevel && matchDistance) {
      const card = createCourseCard(course);
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
      }, displayedCount * 100);

      displayedCount++;
    }
  });
}

// フィルターボタンの処理
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const type = this.dataset.type;
    const filter = this.dataset.filter;

    // 同じタイプのボタンのアクティブクラスを削除
    document
      .querySelectorAll(`[data-type="${type}"]`)
      .forEach((b) => b.classList.remove("active"));

    // クリックされたボタンをアクティブに
    this.classList.add("active");

    // フィルター状態を更新
    currentFilters[type] = filter;

    // 再表示
    displayCourses();
  });
});

// 初期表示
displayCourses();

// カードホバーアニメーション
document.addEventListener("mouseover", function (e) {
  if (e.target.closest(".course-card")) {
    const card = e.target.closest(".course-card");
    anime({
      targets: card.querySelector(".course-header"),
      scale: 1.02,
      duration: 300,
      easing: "easeOutQuad",
    });
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.closest(".course-card")) {
    const card = e.target.closest(".course-card");
    anime({
      targets: card.querySelector(".course-header"),
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    });
  }
});
