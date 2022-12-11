//Função para dar submit no formulário e fazer algumas validações
let inserir = document.querySelector("form");
inserir.addEventListener("submit" , (e) => {
    e.preventDefault();

    let atividades = obterInfo();

    if (atividades != false) {
        dados.push(atividades);
    };
});

//Declaração do array para salvar os itens que foram inseridos no objeto
let dados = Array();

//Função para obter o valor do campo de atividades
const obterInfo = () => {
    let atividade = document.querySelector("#todo-input").value;

    if (!valida(atividade)) {
        alert (`Preencha todos os campos!`)
        return false
    } else {
        let atividades = {
            "atividade" : atividade
        };

        inserir.reset();

        addDom(atividades);

        return atividades;
    };
};

//Validação para saber se o campo de atividades foi preenchido
const valida = (campo) => {
    if (campo === "") {
        return false;
    } else {
        return true;
    }
};

//Função para adicionar elementos no DOM
function addDom (atividades) {
    //Texto da atividade
    let nomeAtividade = document.createElement("li");
    nomeAtividade.innerHTML = `${atividades.atividade}`;
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

    //Funcionalidade botão de excluir
    btnExcluir.addEventListener("click" , (e) => {
        let clickExcluir = e.target;
        let excluir = clickExcluir.parentNode;
        contList.removeChild(excluir);
    });

    //Funcionalidade botão de confirmar
    btnConfirm.addEventListener("click" , (e) => {
        alert(`Em desenvolvimento...`);
    });
};
