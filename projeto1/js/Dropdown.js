

/* Percorre todos os botões suspensos para alternar entre ocultar e mostrar seu conteúdo suspenso - Isso permite que o usuário tenha vários menus suspensos sem nenhum conflito */
var escolher = document.getElementsByClassName("btn-escolher");
var i;

for (i = 0; i < escolher.length; i++) {
    escolher[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let lista = this.nextElementSibling;
    if (lista.style.display === "block") {
      lista.style.display = "none";
    } else {
      lista.style.display = "block";
    }
  });
}