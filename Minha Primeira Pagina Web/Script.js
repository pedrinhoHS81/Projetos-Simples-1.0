const botao = document.getElementById("botaoMenssagem");
const mensagem = document.getElementById("menssagem");

const texto = "Voce criou seu primeiro Front-End, parabens!";

botao.addEventListener("click", () => {
    mensagem.textContent = texto;
});