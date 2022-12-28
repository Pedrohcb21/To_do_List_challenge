//Função para verficar se o usuário está logado
function login () {
    let logado = JSON.parse(sessionStorage.getItem("logado")) || false;
    if (logado === false) {
        window.location = "login.html";
    };
};
login();    

//Declaração do array para salvar os itens que foram inseridos no objeto
let dados = obterLocalStorage();
atualizarDom();

//Função para obter o valor do campo de atividades
const obterInfo = () => {
    let atividadeInserir = document.querySelector("#todo-input").value;

    if (!valida(atividadeInserir)) {
        alert (`Preencha todos os campos!`)
        return false
    } else {
        let atividades = {
            "atividade" : atividadeInserir , 
            "concluido" : false
        };
        return atividades;
    };
};

// let filtro = document.querySelector("#filtro");
// filtro.addEventListener('change', (e) => {
//     let filtrado = e.target.value;
//     console.log(filtrado)

//     if (filtrado === "completed") {
//         concluidos.forEach(i => {
//             addDom(i);
//         })
//     } else if (filtrado === "all") {
//         dados.forEach( i => {
//             addDom(i);
//         })
//     }
// });

//Função para dar submit no formulário e fazer algumas validações
let inserir = document.querySelector("form");
inserir.addEventListener("submit" , (e) => {
    e.preventDefault();

    let atividades = obterInfo();
    if(atividades != false){
        let inserido = inserirNaLista(atividades);
        if (inserido != false) {
            addDom(atividades);
            inserir.reset();
        };
    };
});

//Função para inserir a atividade no Array "dados" 
function inserirNaLista(atividades){
    let elementos = dados.filter((i)=>{
        if (iguais(i, atividades)){
            alert(`Já foi inserido!`)
            return i;
        }
    });
    if (elementos.length === 0) {
        dados.push(atividades);
        salvarLocalStorage();
        return true;
    };
    return false;
};

//Função para validar se a atividade já foi inserida ou não
function iguais(e1, e2) {
    return e1.atividade === e2.atividade
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
        removeDoDom (e, contList, atividades);

        removerDoArray(dados, atividades);
    });

    //Funcionalidade botão de confirmar
    btnConfirm.addEventListener("click" , (e) => {
        let clickExcluir = e.target;
        let excluir = clickExcluir.parentNode;
        contList.removeChild(excluir);
        removerDoArray(dados, atividades);
        // atividades.concluido = true;
        // concluidos.push(atividades);
        // salvarLocalStorage2();
    });
};

//Função para remover o item do DOM
function removeDoDom (e, contList, atividades) {
    let clickExcluir = e.target;
    let excluir = clickExcluir.parentNode;
    contList.removeChild(excluir);
};

// let concluidos = obterLocalStorage2();

// function salvarLocalStorage2 () {
//     localStorage.setItem("concluidos", JSON.stringify(concluidos));
// };

// function obterLocalStorage2 () {
//     let atividadeLS2 = JSON.parse(localStorage.getItem("concluidos")) || [];
//     return atividadeLS2;
// }

//Função para atualizar o DOM
function atualizarDom () {
    dados.forEach(e => {
        addDom(e);
    });
};

//Função para remover o item do array "dados" ao clicar no botão de excluir.
function removerDoArray(lista, atividades) {
    let index = lista.findIndex((i)=>{
        return iguais(i, atividades)
    });
    lista.splice(index, 1);

    salvarLocalStorage();
};

//Função para salvar no localStorage
function salvarLocalStorage () {
    localStorage.setItem("atividades", JSON.stringify(dados));
};

//Função para obter o que está salvo no local storage
function obterLocalStorage () {
    let atividadeLS = JSON.parse(localStorage.getItem("atividades")) || [];
    return atividadeLS;
};
