document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btn-tema");
  const linkHub = document.getElementById("tema-hub");

  // Caminhos dos arquivos de tema
  const HUB_CLARO = "/assets/css/hub-claro.css";
  const HUB_ESCURO = "/assets/css/hub-escuro.css";

  // Verifica o tema salvo no localStorage
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    linkHub.href = HUB_ESCURO;
  } else {
    linkHub.href = HUB_CLARO;
  }

  // Função auxiliar: verifica se o tema atual é claro
  const isClaro = () => linkHub.getAttribute("href").endsWith("hub-claro.css");

  // Atualiza o texto do botão
  const atualizarBotao = () => {
    botao.textContent = isClaro() ? "🌙 Tema Escuro" : "🌞 Tema Claro";
  };
  atualizarBotao();

  // Alterna o tema ao clicar
  botao.addEventListener("click", () => {
    if (isClaro()) {
      linkHub.setAttribute("href", HUB_ESCURO);
      localStorage.setItem("tema", "escuro");
    } else {
      linkHub.setAttribute("href", HUB_CLARO);
      localStorage.setItem("tema", "claro");
    }
    atualizarBotao();
  });
});
