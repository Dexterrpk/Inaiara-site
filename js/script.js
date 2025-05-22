document.getElementById("form-comentario").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const msg = document.getElementById("mensagem").value.trim();
  if (!nome || !msg) return;
  const div = document.createElement("div");
  div.className = "comentario";
  div.textContent = `"${msg}" - ${nome}`;
  document.getElementById("comentarios").appendChild(div);
  this.reset();
});