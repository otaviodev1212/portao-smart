// Pegar usuário logado
let usuario = localStorage.getItem("usuarioLogado");
if (!usuario) {
    window.location.href = "../login/login.html";
} else {
    document.getElementById("usuario").innerHTML = usuario;
}

// Status inicial do portão
let portaoAberto = false;

// Carregar histórico quando abrir a página
carregarHistorico();

// Alterar status do portão
function alterarStatus() {
    let status = document.getElementById("statusPortao");
    if (portaoAberto) {
        status.innerHTML = "🔴 Fechado";
        let mensagem = `${usuario} fechou o portão`;
        adicionarHistoricoTela(mensagem);
        salvarHistorico(mensagem);
        portaoAberto = false;
    } else {
        status.innerHTML = "🟢 Aberto";
        let mensagem = `${usuario} abriu o portão`;
        adicionarHistoricoTela(mensagem);
        salvarHistorico(mensagem);
        portaoAberto = true;
    }
}

// Adicionar histórico na tela
function adicionarHistoricoTela(mensagem) {
    let historico = document.getElementById("historico");

    let data = new Date();

    let registro = `${data.toLocaleTimeString("pt-BR")} - ${data.toLocaleDateString("pt-BR")} - ${mensagem}`;
    historico.innerHTML += `
    <li>
        ${registro}
    </li>
    `;
}

// Salvar histórico
function salvarHistorico(mensagem) {
    let data = new Date();

    let registro = `${data.toLocaleTimeString("pt-BR")} - ${data.toLocaleDateString("pt-BR")} - ${mensagem}`;

    let lista = JSON.parse(
        localStorage.getItem("historicoPortao")
    ) || [];

    lista.push(registro);

    localStorage.setItem(
        "historicoPortao",
        JSON.stringify(lista)
    );
}

// Carregar histórico salvo
function carregarHistorico() {
    let historico = document.getElementById("historico");

    let lista = JSON.parse(
        localStorage.getItem("historicoPortao")
    ) || [];

    lista.forEach(item => {
        historico.innerHTML += `
        <li>
            ${item}
        </li>
        `;
    });
}

// Sair do sistema
function sair() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "../login/login.html";
}