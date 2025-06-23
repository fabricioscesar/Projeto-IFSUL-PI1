function cadastrarUsuario() {

  const form = document.querySelector(".form-cadastro");
  const nome = form.nome.value;
  const usuario = form.usuario.value;
  const email = form.email.value;
  const senha = form.senha.value;
  const confirmar = form.confirmar.value;

  if (senha !== confirmar) {
    alert("As senhas não coincidem.");
    return false; // Evita envio
  }
  const foreground = document.querySelector(".foreground");
  foreground.innerHTML = `<h1>Cadastro realizado com sucesso! Bem-vindo, ${nome}.</h1>`;
  return false; // Impede o envio do formulário
}
