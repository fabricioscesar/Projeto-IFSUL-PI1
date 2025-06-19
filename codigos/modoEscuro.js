function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("botao-tema");
  const backImage = document.getElementsByClassName("principal")[0];

  body.classList.toggle("escuro");

  if (body.classList.contains("escuro")) {
    localStorage.setItem("tema", "escuro");
    botao.textContent = "☀️";
    backImage.style.backgroundImage =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('../midia/principal.jpg')";
    backImage.style.backgroundPosition = "top";
  } else {
    localStorage.setItem("tema", "claro");
    botao.textContent = "🌙";
    backImage.style.backgroundImage =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('../midia/principal_claro.jpg')";
    backImage.style.backgroundPosition = "bottom";
  }
}

window.addEventListener("load", () => {
  const temaSalvo = localStorage.getItem("tema");
  const body = document.body;
  const botao = document.getElementById("botao-tema");
  const backImage = document.getElementsByClassName("principal")[0];

  if (temaSalvo === "escuro") {
    body.classList.add("escuro");
    botao.textContent = "☀️";
    backImage.style.backgroundImage =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('../midia/principal.jpg')";
    backImage.style.backgroundPosition = "top";
  } else {
    botao.textContent = "🌙";
    backImage.style.backgroundImage =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('../midia/principal_claro.jpg')";
    backImage.style.backgroundPosition = "bottom";
  }
});