
// redering page
const container1 = document.getElementById('conteiner1'); // Obtém o container  1
const container2 = document.getElementById('conteiner2'); // Obtém o container 2
function pageCadastro() { // Cria a pagina de cadastro
    container1.innerHTML = `
          <form id="cadastro">
            <legend>Cadastro</legend>
            <input type="email" name="email" id="mail" value=""  placeholder="Digite seu e-mail">
            <input type="password" name="password" id="pass" value=""  placeholder="Digite sua senha">
            <input type="text" name="nome" id="nome" value=""  placeholder="Digite seu nome">
            <button type="submit">Cadastrar</button>
          </form>
          <p>Já tem conta? <a  onclick="homePage()">Login</a></p>`;
}

function homePage() {    // Cria a pagina de login
    container1.innerHTML = `
        <form id="login">
            <legend>Login</legend>
            <input type="text" name="email" id="mail" value=""  placeholder="Digite seu e-mail">
            <input type="password" name="password" id="pass" value=""  placeholder="Digite sua senha">
            <button type="submit">Entrar</button>  
        </form>
        <p>Ainda não tem conta? <a onclick="pageCadastro()">Cadastre-se</a></p>`;
}

//dados de login escopo global
let dadosLogin={};
// Função para lidar com o evento de login
function logar(event) { 
    event.preventDefault();

    const form = document.getElementById('login'); // Obtém o formulário de login
    const email = form.mail.value; // Obtém o valor do campo de e-mail
    const senha = form.pass.value; // Obtém o valor do campo de senha

  dadosLogin = {
        email: email,
        senha: senha
    };
  buscarDados(dadosLogin)
 

}
 function proximo() { 
    paginaAtual++;
    container2.innerHTML = ''
    buscarDados(dadosLogin);

  } 
  function anterior() { 
    paginaAtual--;
    container2.innerHTML = ''
    buscarDados(dadosLogin);

  }
  const per_page = 3; // Quantidade de recados
  let paginaAtual=1;  // Pagina atual
 
function buscarDados(dadosLogin) { // Função para buscar os dados
    // Cria o elemento loader
  
    const loader = document.getElementById('loader');

    loader.style.display = 'block'

     // Simula uma ação assíncrona (por exemplo, uma requisição AJAX)
     setTimeout(() => {
        // Esconde o loader após um atraso de 2 segundos
        loader.style.display = 'none';
    }, 5000); // 2000 milissegundos = 2 segundos
     
 
    axios.post(`https://api-crudde-recados.onrender.com/users/login?per_page=${per_page}&page=${paginaAtual}`, dadosLogin)
        .then(response => {
            //oculta o loader
            loader.style.display = 'none';
            console.log('Resposta do servidor:', response.data);
            // Implemente a lógica de sucesso aqui
            const listaRecados = response.data.recadosDaPagina

            // cria o array de recados
            console.log(listaRecados)
            for (let recado of listaRecados) {
                recado = {
                    titulo: recado.titulo,
                    descricao: recado.descricao,
                    idRecado: recado.id
                }

                const totalPages = Math.ceil(listaRecados.length / per_page);

                // Cria o elemento header e limpa o conteúdo
                container1.innerHTML = ` 
                    <button onclick="anterior()"><</button>
                    <button onclick="proximo()">></button>`
                //renderizar lista de recados   
                 

                // Cria a div card
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');

                // Cria o elemento h3 e p para título e descrição do recado
                const h3 = document.createElement('h3');

                h3.textContent = recado.titulo;

                const p = document.createElement('p');
                p.textContent = recado.descricao;

                // Anexa os elementos h2 e p à div card
                cardDiv.appendChild(h3);
                cardDiv.appendChild(p);

                // Anexa a div card ao container1
                container2.appendChild(cardDiv);
            }

        }

        )
        .catch(error => {
            console.error('Dados Incorretos:', error);
            const alert = document.createElement('h2')
            alert.setAttribute('style', 'color: red', 'id', 'alert');
            alert.setAttribute( 'id', 'alert');
            container1.appendChild(alert);
            alert.textContent = 'Dados Incorretos';
            alert.textContent = 'Dados Incorretos';
            loader.style.display = 'none'; //oculta o loader

            // Implemente a lógica de erro aqui
        })
    }

