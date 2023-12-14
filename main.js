function validationMachine() {
    let campoAvalor = parseFloat(document.getElementById("campoA").value);
    let campoBvalor = parseFloat(document.getElementById("campoB").value);

    if (campoBvalor <= campoAvalor) {
        alert("O valor de B não pode ser igual ou menor do que o de A, favor corrigir!");
        document.getElementById("standart").style.display = "none";
        document.getElementById("error").style.display = "block";
        return false;
    } else {
        alert("Tudo certo!, submetido com sucesso");
        return true;
    }
}

document.getElementById("campos").addEventListener("submit", function(event) {
    if (!validationMachine()) {
        event.preventDefault();
    }
});