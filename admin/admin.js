// Lista de usuários
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Histórico
let historico = JSON.parse(localStorage.getItem("historicoPortao")) || [];

// Elementos
const listaUsuarios = document.getElementById("listaUsuarios");
const listaHistorico = document.getElementById("listaHistorico");

// Carregar tudo
carregarUsuarios();
carregarHistorico();

// =====================
// USUÁRIOS
// =====================

function carregarUsuarios(){
    listaUsuarios.innerHTML = "";
    usuarios.forEach((usuario, index) =>{
        listaUsuarios.innerHTML += `
        <div class="usuario">
            <span>
                ${usuario.usuario}
            </span>

            <div class="acoes">
                <button
                class="btn-editar"
                onclick="editarUsuario(${index})">
                    <i class="fa-solid fa-pen"></i>
                    Editar
                </button>

                <button
                class="btn-excluir"
                onclick="excluirUsuario(${index})">
                    <i class="fa-solid fa-trash"></i>
                    Excluir
                </button>
            </div>
        </div>
        `;
    });

}

// =====================
// EXCLUIR
// =====================

function excluirUsuario(index){
    if(confirm("Deseja excluir este usuário?")){
        usuarios.splice(index,1);
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        carregarUsuarios();

    }

}

// =====================
// EDITAR
// =====================

function editarUsuario(index){
    let novoNome = prompt(
        "Novo nome:",
        usuarios[index].usuario
    );

    if(novoNome === null) return;

    let novaSenha = prompt(
        "Nova senha:",
        usuarios[index].senha
    );

    if(novaSenha === null) return;
    usuarios[index].usuario = novoNome;
    usuarios[index].senha = novaSenha;

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
    carregarUsuarios();
}

// =====================
// HISTÓRICO
// =====================

function carregarHistorico(){
    listaHistorico.innerHTML = "";
    historico.forEach(item =>{
        listaHistorico.innerHTML += `
            <li>${item}</li>
        `;
    });
}s