const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha){
        alert("As senhas não são iguais.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.usuario === usuario);

    if(existe){
        alert("Este usuário já existe.");
        return;
    }

    usuarios.push({
        usuario: usuario,
        senha: senha
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
});

// Mostrar e esconder senha
const toggleSenha = document.getElementById("toggleSenha");
const senha = document.getElementById("senha");

toggleSenha.addEventListener("click", function(){
    if(senha.type === "password"){
        senha.type = "text";
        toggleSenha.classList.remove("fa-eye");
        toggleSenha.classList.add("fa-eye-slash");
    }else{
        senha.type = "password";
        toggleSenha.classList.remove("fa-eye-slash");
        toggleSenha.classList.add("fa-eye");
    }
});