document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
    exibirMensagem(true, "Formulário válido! B é maior que A.");
    } else {
    exibirMensagem(false, "Formulário inválido! B precisa ser maior que A.");
    }
});

function exibirMensagem(valido, mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.color = valido ? "black" : "red";
}