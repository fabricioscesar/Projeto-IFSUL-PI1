const fundos = [
  {
    imagem: "url('../midia/cursos_piano.jpg')",
    titulo: "Cursos de Piano",
    cursos: [
      ["Piano Clássico", "Aulas práticas + leitura de partituras"],
      ["Piano Moderno", "Improvisação + acompanhamento"],
      ["Piano para Iniciantes", "Técnica básica + repertório simples"],
      ["Preparatório para Conservatório", "Treinamento intensivo"]
    ]
  },
  {
    imagem: "url('../midia/cursos_cordas.jpg')",
    titulo: "Cursos de Cordas",
    cursos: [
      ["Violino Básico", "Exercícios + técnica de arco"],
      ["Viola", "Postura + prática coletiva"],
      ["Violoncelo", "Posicionamento + peças solo"],
      ["Contrabaixo", "Fundamentos + base para orquestra"]
    ]
  }
];

let i = 0;

function trocarCursos() {
  const secao = document.querySelector(".cursos");
  const titulo = document.querySelector(".foreground h1");
  const tabela = document.getElementById("tabela-cursos").querySelector("tbody");

  // fade-out
  secao.style.opacity = 0;

  setTimeout(() => {
    // atualiza imagem e título
    i = (i + 1) % fundos.length;
    secao.style.backgroundImage = fundos[i].imagem;
    titulo.textContent = fundos[i].titulo;

    // atualiza cursos
    tabela.innerHTML = "";
    for (let j = 0; j < fundos[i].cursos.length; j++) {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      td1.textContent = fundos[i].cursos[j][0];
      td2.textContent = fundos[i].cursos[j][1];
      tr.appendChild(td1);
      tr.appendChild(td2);
      tabela.appendChild(tr);
    }

    // fade-in
    secao.style.opacity = 1;
  }, 500);
}
