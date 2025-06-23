window.onload = function () {
  const popup = document.createElement("div");
  popup.id = "meu-popup";
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.right = "20px";
  popup.style.backgroundColor = "#694207b2";
  popup.style.color = "#fff";
  popup.style.padding = "15px 20px";
  popup.style.borderRadius = "10px";
  popup.style.cursor = "pointer";
  popup.style.fontFamily = "sans-serif";
  popup.onclick = function irParaContato() {
    window.location.href = "../paginas/Contato.html"; // ajuste o caminho conforme sua estrutura
  }

  popup.innerHTML = `
    <span id="fechar-popup" 
          style="position:absolute;top:5px;right:10px;font-weight:bold;cursor:pointer;" 
          onclick="fecharPopup(event)">×</span>
    <p style="margin: 0; padding-right: 20px;">Entre em contato agora!</p>
  `;

  document.body.appendChild(popup);
};


function fecharPopup(e) {
  e.stopPropagation(); // evita que o clique no "×" dispare o redirecionamento
  const popup = document.getElementById("meu-popup");
  popup.remove();
}