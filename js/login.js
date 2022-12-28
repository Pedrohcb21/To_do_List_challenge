let login = document.querySelector("form");
login.addEventListener("submit", (e) =>{
    e.preventDefault();

    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("pass").value;

    if (usuario === "adm" && senha === "123") {
        sessionStorage.setItem("logado", JSON.stringify(true));
        window.location = "index.html";
    } else {
        sessionStorage.setItem("logado", JSON.stringify(false));
        alert(`Usuário ou senha incorretos!`);
    };
});
