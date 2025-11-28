// Musica di background
let bgMusic;

function initBackgroundMusic() {
  bgMusic = new Audio("background-music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.25;
  bgMusic.play().catch((err) => {
    console.log("Riproduzione bloccata dal browser:", err);
  });
}

// Brillantini del mouse
let mouseSparkleTimeout;
document.addEventListener("mousemove", (e) => {
  clearTimeout(mouseSparkleTimeout);
  mouseSparkleTimeout = setTimeout(() => {

    const count = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;
      createMouseSparkle(e.clientX + offsetX, e.clientY + offsetY);
    }
  }, 20);
});

function createMouseSparkle(x, y) {
  const sparkles = ["✨", "⭐", "💫", "✨", "✨"];
  const sparkle = document.createElement("div");
  sparkle.className = "mouse-sparkle";
  sparkle.textContent =
    sparkles[Math.floor(Math.random() * sparkles.length)];
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";

  const tx = (Math.random() - 0.5) * 40;
  const ty = -Math.random() * 60;
  sparkle.style.setProperty("--tx", tx + "px");
  sparkle.style.setProperty("--ty", ty + "px");

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 3500);
}

function createSparkle(x, y) {
  const sparkles = ["✨", "⭐", "💫", "🌟", "✨"];
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.textContent =
    sparkles[Math.floor(Math.random() * sparkles.length)];
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";

  const tx = (Math.random() - 0.5) * 180;
  const ty = -Math.random() * 180 - 40;
  sparkle.style.setProperty("--tx", tx + "px");
  sparkle.style.setProperty("--ty", ty + "px");

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}

document.querySelector(".hat").addEventListener("mouseover", function () {
  const rect = this.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Più brillantini dal cappello
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 100;
      createSparkle(centerX + offsetX, centerY + offsetY);
    }, i * 40);
  }
});

// Genera stelle
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildStars(count, color) {
  const w = Math.max(1200, window.innerWidth);
  const h = Math.max(1600, window.innerHeight * 2);
  const pts = [];
  for (let i = 0; i < count; i++) {
    const x = randomInt(0, w);
    const y = randomInt(0, h);
    pts.push(`${x}px ${y}px ${color}`);
  }
  return pts.join(", ");
}

const s1 = buildStars(700, "#fff");
const s2 = buildStars(400, "#c084fc");
const s3 = buildStars(200, "#a855f7");

const style = document.createElement("style");
style.textContent = `
            #stars { box-shadow: ${s1}; }
            #stars2 { box-shadow: ${s2}; }
            #stars3 { box-shadow: ${s3}; }
          `;
document.head.appendChild(style);


document.addEventListener("click", function startAudio() {
  initBackgroundMusic();
  document.removeEventListener("click", startAudio);
});


