// 共通ヘッダーアニメーション
function animateHeader() {
  // ロゴアニメーション
  const logo = document.querySelector(".logo");
  if (logo) {
    anime({
      targets: logo,
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 800,
      easing: "easeOutExpo",
      delay: 200,
    });
  }

  // ナビゲーションリンクアニメーション
  const navLinks = document.querySelectorAll("nav a");
  if (navLinks.length > 0) {
    anime({
      targets: navLinks,
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 600,
      easing: "easeOutExpo",
      delay: anime.stagger(100, { start: 400 }),
    });
  }
}

// 共通スクロールフェードインアニメーション
function setupScrollAnimation() {
  const scrollElements = document.querySelectorAll(".section");

  if (scrollElements.length === 0) {
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          easing: "easeOutExpo",
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  scrollElements.forEach((el) => {
    observer.observe(el);
  });
}

// DOM読み込み後に共通アニメーションを実行
document.addEventListener("DOMContentLoaded", () => {
  animateHeader();
  setupScrollAnimation();
});
