const resposta = document.querySelector("#resposta");
const buttonAnterior = document.querySelector("#buttonAnterior");
const buttonProximo = document.querySelector("#buttonProximo");
let paginaAtual = 1;
buscarDados();

function buscarDados() {
  axios
    .get(`https://reqres.in/api/users?page=${paginaAtual}`)
    .then((result) => {
      resposta.innerHTML = "";
      result.data.data.forEach((user) => {
        resposta.innerHTML += `
        <div class='user-card'>
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" class="user-avatar">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>${user.email}</p>
        <div>
        `;
      });

      verificarPagina(result.data.total_pages);
    });
}

function verificarPagina(numeroDePaginas) {
  if (paginaAtual === 1) buttonAnterior.disabled = true;
  else buttonAnterior.disabled = false;
  if (paginaAtual === numeroDePaginas) buttonProximo.disabled = true;
  else buttonProximo.disabled = false;
}

function proximo() {
  paginaAtual++;

  buscarDados();
}
function anterior() {
  paginaAtual--;
  buscarDados();
}
