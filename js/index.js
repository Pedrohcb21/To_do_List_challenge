let inserir = document.querySelector("form");
inserir.addEventListener("submit" , (e) => {
    e.preventDefault();

    let atividade = obterInfo();

    if (atividade != false) {
        atividades.push(atividade);
    };
});

let atividades = Array();

const obterInfo = () => {
    let todoInfo = document.querySelector("#todo-input").value;

    if (!valida(todoInfo)) {
        alert (`Preencha todos os campos!`)
        return false
    } else {
        let atividade = {
            todoInfo
        };

        inserir.reset();

        addDom(atividade);
        
        return atividade;
    };
};

const valida = (campo) => {
    if (campo === "") {
        return false;
    } else {
        return true;
    }
};

function addDom (atividade) {
    //Texto da atividade
    let nomeAtividade = document.createElement("li");
    nomeAtividade.innerHTML = `${atividade.todoInfo}`;
    nomeAtividade.className = "todo-item";

    //Criação icone do botão excluir
    let btnIconExcluir = document.createElement("i");
    btnIconExcluir.className = "fas fa-trash";

    //Criação botão excluir
    let btnExcluir = document.createElement("button");
    btnExcluir.appendChild(btnIconExcluir);
    btnExcluir.className = "trash-btn";

    //Criação do icone do botão de confirmar
    let btnIconConfirm = document.createElement("i");
    btnIconConfirm.className = "fas fa-check";

    //Criação do botão confirmar
    let btnConfirm = document.createElement("button");
    btnConfirm.appendChild(btnIconConfirm);
    btnConfirm.className = "check-btn";

    //Criação da div das atvidades
    let contAtividades  = document.createElement("div");
    contAtividades.appendChild(nomeAtividade);
    contAtividades.appendChild(btnConfirm);
    contAtividades.appendChild(btnExcluir);
    contAtividades.className = "todo";

    //Adicionando a div e seu filhos a lista de atividades
    let contList = document.querySelector("#todo-list");
    contList.appendChild(contAtividades);
    contList.className = "todo-list";
};
