function trocaFundo() {
  const imagens = [
    "url('../midia/principal2.jpg')",
    "url('../midia/principal3.jpg')",
    "url('../midia/principal4.jpg')",
    "url('../midia/principal.jpg')"
  ];

  const main = document.getElementById("principal");
  let indice = 0;

  setInterval(() => {
    // Primeiro, opcionalmente faz algo (ex: fade out)
    // Aqui você pode colocar um estilo ou outro código se quiser

    setTimeout(() => {
      // Dentro do timeout você faz a troca efetiva, atrasando um pouco a mudança
      main.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), ${imagens[indice]}`;
      main.style.backgroundSize = "cover";
      main.style.backgroundPosition = "center";

      // Atualiza o índice para a próxima imagem
      indice = (indice + 1) % imagens.length;

      // Aqui você pode colocar um fade in, caso queira
    }, 500); // atraso de 500ms (ou o tempo que preferir)

  }, 5000); // intervalo a cada 5 segundos
}

window.onload = trocaFundo;
