window.addEventListener("load", iniciarTroca);
function iniciarTroca() {
  const frases = [ //array para guardar as frases que serão mostradas na página
    "A Escola de Música Belas Artes é uma escola de música voltada para o meio clássico e erudito, com formação preparatória para estudantes que planejam ingressar em orquestras.",
    "Oferecemos cursos especializados para todos os níveis, desde iniciantes até músicos mais experientes. Se você deseja aprender piano, violino, teoria musical ou até mesmo regência, temos a opção perfeita para você.",
    "Nossos cursos são projetados para combinar aprendizado teórico e prático, garantindo uma experiência completa e enriquecedora."
  ];
  
  const p = document.getElementById("descricao");
  let i = 0;
  p.textContent = frases[i];
  
  // Troca a cada 10 segundos
  setInterval(() => {
    p.style.opacity = 0;
    setTimeout(() => {
      i = (i + 1) % frases.length;
      p.textContent = frases[i];
      p.style.opacity = 1;
    }, 1000);
  }, 10000);
}
/*
setInterval(..., 8000);
  Executa a função a cada 10 segundos (10000 milissegundos), repetidamente.
  
p.style.opacity = 0;
  Faz o parágrafo sumir suavemente  — efeito de "fade out".

setTimeout(..., 1000);
  Espera 1000 milissegundos antes de executar a próxima função
  dá tempo do fade-out acontecer antes da troca de texto.

Explicação passo a passo:
  i + 1: avança para o próximo índice.
  % frases.length: garante que, ao chegar no final da lista, ele volte para o início.
  Se frases.length for 3:
  i = 0 → 1 % 3 → 1
  i = 1 → 2 % 3 → 2
  i = 2 → 3 % 3 → 0 (volta ao começo)
*/