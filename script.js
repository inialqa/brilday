function showConfettiAndPopup() {
  // Confetti
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = Math.random() * 50 + "vh";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1000);
  }

  // Show popup
  const popup = document.getElementById("popup");
  popup.style.display = "block";

  // Show polaroid
  document.getElementById("polaroid1").style.display = "flex";
  document.getElementById("polaroid2").style.display = "flex";
  document.getElementById("polaroid3").style.display = "flex";

  // Mulai perulangan animasi bunga
  generateFlowers();
}

function generateFlowers() {
  setInterval(() => {
    // Create elemen bunga
    const flower = document.createElement("div");
    flower.className = "flower";

    // Random posisi
    flower.style.left = Math.random() * 100 + "vw";

    // Add petals dan center
    for (let i = 1; i <= 5; i++) {
      const petal = document.createElement("div");
      petal.className = `petal petal${i}`;
      flower.appendChild(petal);
    }

    const center = document.createElement("div");
    center.className = "center";
    flower.appendChild(center);

    // Add flower ke container
    document.getElementById("flower-container").appendChild(flower);

    // Hapus bunga setelah 5 detik
    setTimeout(() => {
      flower.remove();
    }, 3000);
  }, 1500); // Interval setiap 1,5 detik untuk muncul bunga baru
}

function getRandomColor() {
  const colors = ["#ff0", "#ff1493", "#00f", "#0f0", "#ff4500", "#8a2be2"];
  return colors[Math.floor(Math.random() * colors.length)];
}
