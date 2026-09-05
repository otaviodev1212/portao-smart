const form = document.getElementById("loginform");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
        u => u.usuario === usuario && u.senha === senha
    );
    if(usuarioEncontrado){
        localStorage.setItem("usuarioLogado", usuario);
        window.location.href = "../dashboard/dashboard.html";
    }else{
        alert("Usuário ou senha inválidos!");
    }
});