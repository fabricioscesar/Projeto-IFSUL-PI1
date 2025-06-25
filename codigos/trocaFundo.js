let indice = 0;
function trocaFundo() {
  const imagens = [
    "url('../midia/principal2.jpg')",
    "url('../midia/principal3.jpg')",
    "url('../midia/principal4.jpg')",
    "url('../midia/principal.jpg')"
  ];

  const main = document.getElementById("principal");

      // Dentro do timeout você faz a troca efetiva, atrasando um pouco a mudança
      main.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), ${imagens[indice]}`;
      main.style.backgroundSize = "cover";
      main.style.backgroundPosition = "center";

      // Atualiza o índice para a próxima imagem
      indice = (indice + 1) % imagens.length;
      // Aqui você pode colocar um fade in, caso queira
}