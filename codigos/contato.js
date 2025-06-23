function enviarFormulario() {

  const formulario = document.querySelector("section");
  formulario.innerHTML = ""; // Limpa o conteúdo da página

  const mensagem = document.createElement("h1");
  mensagem.textContent = "Obrigado por entrar em contato! Em breve retornaremos.";
  mensagem.style.textAlign = "center";

  formulario.appendChild(mensagem);
}
