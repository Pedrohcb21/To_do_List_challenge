let inserir = document.querySelector("form");
inserir.addEventListener("submit" , (e) => {
    e.preventDefault();

    let dados = obterInfo();
    console.table(arrayMap);
});

const obterInfo = () => {
    let todoInfo = document.querySelector("#todo-input").value;

    if (!valida(todoInfo)) {
        alert (`Preencha todos os campos!`)
        return false
    } else {
        let dados = {
            todoInfo
        };
        return dados;
    }
};

const valida = (campo) => {
    if (campo === "") {
        return false;
    } else {
        return true;
    }
};
