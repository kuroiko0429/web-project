document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // フォーム要素のロード時アニメーション
  function animateFormIn() {
    // フォーム全体をフェードイン
    anime({
      targets: ".contact-section",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeOutExpo",
      delay: 200,
    });

    // 各フォームグループを順番にフェードイン
    const formGroups = document.querySelectorAll(".form-group");
    anime({
      targets: formGroups,
      opacity: [0, 1],
      translateX: [-10, 0],
      duration: 600,
      easing: "easeOutQuad",
      delay: anime.stagger(150, { start: 400 }), // 150msずつ遅延させて順番に表示
    });

    // 送信ボタンをバウンスイン
    anime({
      targets: ".cta-button",
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      easing: "easeOutElastic(1, .6)",
      delay: anime.stagger(150, { start: 1000 }),
    });
  }

  // ページ読み込み時にアニメーションを実行
  animateFormIn();

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // デフォルトの送信動作をキャンセル

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !subject || !message) {
        showMessage("全ての必須項目を入力してください。", "error");
        return;
      }

      // ボタンを一時的に無効化
      const submitButton = document.querySelector(".cta-button");
      submitButton.disabled = true;
      submitButton.textContent = "送信中...";

      // サーバー送信のシミュレーション（500ms後に成功メッセージを表示）
      simulateSubmission()
        .then(() => {
          showMessage(
            "お問い合わせを受け付けました。ご返信までしばらくお待ちください。",
            "success"
          );
          form.reset(); // フォームをリセット
        })
        .catch(() => {
          showMessage(
            "送信中にエラーが発生しました。時間をおいて再度お試しください。",
            "error"
          );
        })
        .finally(() => {
          submitButton.disabled = false;
          submitButton.textContent = "送信する";
        });
    });
  }

  // 送信シミュレーション関数
  function simulateSubmission() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // ここで実際のサーバー通信が成功したと仮定
        resolve();
      }, 500);
    });
  }

  // メッセージ表示関数（アニメーション付き）
  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = ""; // クラスをリセット
    formMessage.classList.add(type);
    formMessage.classList.remove("hidden");

    // 登場アニメーション
    anime({
      targets: formMessage,
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 500,
      easing: "easeOutBack",
    });

    // 5秒後にメッセージを非表示にするアニメーション
    setTimeout(() => {
      anime({
        targets: formMessage,
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 500,
        easing: "easeInQuad",
        complete: function (anim) {
          formMessage.classList.add("hidden");
          formMessage.style = ""; // スタイルをリセット
        },
      });
    }, 5000);
  }
});
