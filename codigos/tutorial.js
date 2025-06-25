window.onload = () => {
  const dialog = document.getElementById("popup-tutorial");
  const btnFechar = document.getElementById("fechar-popup");

  if (typeof dialog.showModal === "function") {
    dialog.showModal(); // abre automaticamente
  }

  btnFechar.onclick = () => dialog.close(); // fecha ao clicar no botão

  // também fecha com tecla ESC (já é comportamento padrão do <dialog>)
};
