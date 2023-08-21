document.addEventListener("DOMContentLoaded", function () {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });

  document.addEventListener("click", (event) => {
    const heartClone = heart.cloneNode();
    const size = Math.random() * 100 + 50;
    const x = event.clientX - size / 2;
    const y = event.clientY - size / 2;

    heartClone.style.width = `${size}px`;
    heartClone.style.height = `${size}px`;
    heartClone.style.left = `${x}px`;
    heartClone.style.top = `${y}px`;

    document.body.appendChild(heartClone);

    setTimeout(() => {
      heartClone.remove();
    }, 3000);
  });
});
