function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Função para fechar a modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Fechar a modal se o usuário clicar fora dela
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}