// ヒーローアニメーション
anime({
  targets: ".hero h1",
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 1000,
  easing: "easeOutExpo",
  delay: 600,
});

anime({
  targets: ".hero p",
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 1000,
  easing: "easeOutExpo",
  delay: 800,
});

anime({
  targets: ".cta-button",
  opacity: [0, 1],
  scale: [0.8, 1],
  duration: 800,
  easing: "easeOutElastic(1, .6)",
  delay: 1000,
});

// 浮遊アイコンアニメーション
anime({
  targets: ".floating-icon",
  translateY: [
    { value: -20, duration: 2000 },
    { value: 0, duration: 2000 },
  ],
  rotate: [
    { value: 5, duration: 2000 },
    { value: -5, duration: 2000 },
  ],
  easing: "easeInOutSine",
  loop: true,
  delay: anime.stagger(200),
});

// カードホバーエフェクト
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    anime({
      targets: this.querySelector(".card-image"),
      scale: 1.1,
      duration: 300,
      easing: "easeOutQuad",
    });
  });

  card.addEventListener("mouseleave", function () {
    anime({
      targets: this.querySelector(".card-image"),
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    });
  });
});
