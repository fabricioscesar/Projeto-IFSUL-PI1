function alternarTema() {
  const body = document.body;
  const botao = document.getElementById("botao-tema");

  body.classList.toggle("escuro");

  if (body.classList.contains("escuro")) {
    localStorage.setItem("tema", "escuro");
    botao.textContent = "☀️";
  } else {
    localStorage.setItem("tema", "claro");
    botao.textContent = "🌙";
  }
}

window.addEventListener("load", () => {
  const temaSalvo = localStorage.getItem("tema");
  const body = document.body;
  const botao = document.getElementById("botao-tema");

  if (temaSalvo === "escuro") {
    body.classList.add("escuro");
    botao.textContent = "☀️";
  } else {
    botao.textContent = "🌙";
  }
});