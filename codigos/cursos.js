function trocarCursos() {
  const novosCursos = [
    ["Canto Lírico", "Técnica vocal + Repertório clássico"],
    ["História da Música", "Aulas teóricas + Material digital"],
    ["Composição Musical", "Exercícios + Análise de obras"],
    ["Música de Câmara", "Ensaios em grupo + Apresentações"]
  ];

  const tbody = document.querySelector("#tabela-cursos tbody");
  tbody.innerHTML = ""; // Limpa as linhas da tabela

  for (let i = 0; i < novosCursos.length; i++) {
    const tr = document.createElement("tr");
    const tdCurso = document.createElement("td");
    const tdIncluso = document.createElement("td");

    tdCurso.textContent = novosCursos[i][0];
    tdIncluso.textContent = novosCursos[i][1];

    tr.appendChild(tdCurso);
    tr.appendChild(tdIncluso);
    tbody.appendChild(tr);
  }
}
