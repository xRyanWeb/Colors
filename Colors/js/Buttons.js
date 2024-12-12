const Color = () => {
  const input = document.getElementById("input");
  const value = input.value;

  document.getElementById("color").textContent = "#" + value;
  document.body.style.backgroundColor = "#" + value;
  document.getElementById("color").style.color = "#fff";
  document.getElementById("h3").style.color = "#fff";
};

const btn = document.getElementById("button");
btn.addEventListener("click", Color);
