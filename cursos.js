/*
var carros = [26, 16, 16, 17, 17, 16, 16, 17]

alert(idade[3])



cursos.forEach(curso => console.log( curso.nome + " " + curso.topicos ))

var topicos = document.getElementById("topicos");
console.log(topicos)

var litopicos = document.createElement("li");
litopicos.innerText = "front-end";
console.log(litopicos)

topicos.appendChild(litopicos)

var listaDebotoes = document.getElementById("lista-botoes")
console.log(listaDebotoes)
var botaoSobre = document.createElement("<a >")

/*
var messiStats = {
    nomeCompleto:" Lionel Andrés Messi ",
    idade:35,
    time:"PSG",
    outrosTimes: ["newell's","barcelona","Argentina" ]
}

console.log(messiStats)


var nome = "giovanni"
var curso = "na aula"
var dia = 31;
var frase = nome+" faltou "+curso+" no dia "+dia

console.log(frase)


var nota = prompt();

if (nota>=60){
    console.log("aprovado "+ nota )
}
else {
   console.log("reprovado "+nota  ) 
}



var altura = prompt("ALTURA")
var peso = prompt("PESO")
var imc = peso/(altura*altura)
console.log(imc)
    if (imc<18.5){
        console.log (" magreza " )
    }
    else if(imc<25){
        console.log(" normal ")

    }
    var alunosPresentes = ["pedro", "giovanni", "vanderlei", "joaoVitor", "maria", "luiz", "cecilia", "joao", "arthur"]
    alunosPresentes.forEach(nome=> console.log(nome))

var titulo = document.getElementById("titulo");
titulo.style.backgroundColor = "green"
titulo.style.color = "black"

var saibamais = document.getElementById("saibamais")
saibamais.style.backgroundColor = "green"
    
var detalhe = document.getElementById("detalhe")
detalhe.style.backgroundColor = "red"

var programar = document.getElementById("programar")
programar.innerHTML = "<h1>programação</h1>"

var footer = document.getElementById("footer")
footer.innerHTML = <h1>footer</h1>
*/

var cursoEnfermagem = {
    nome: "Enfermagem",
    descricao: "Para você que gostaria de ingressar na area da saúde",
    topicos: ["Biosegurança", "Primeiros socorros", "Ministracao de Medicamentos"],
    imagem: "https://imagens.ne10.uol.com.br/veiculos/_midias/webp/2023/01/05/enfermeira_feminina_e_masculina_de_alto_angulo_23_2148501096-22257971.webp"
};

var cursoProgramacao = { 
    nome: "Programação",
    descricao: "Transforme a sua carreira e torne-se um Programador requisitado no mercado de tecnologia. Faça mentorias individuais com experts do mercado e decole sua carreira de programador.",
    topicos: ["Tecnologia", "Design UI", "Web"],
    imagem: "https://idocode.com.br/wp-content/uploads/2021/07/code-1839406_1920-1.jpg"
};

var cursoAdministracao = { 
    nome: "Administração", 
    descricao: "Direcionado para quem queira trabalhar no setor administrativo e com finanças.", 
    topicos: ["Marketing", "Finanças", "Finanças e Contabilidade"],
    imagem: "https://www.uemg.br/images/cursos/administracao.jpg" 
};

var cursoSeguranca = {
    nome: "Segurança do Trabalho", 
    descricao: "Direcionado para quem queira trabalhar com segurança no trabalho.", 
    topicos: ["Segurança", "Proteção", "Finanças e Contabilidade"],
    imagem: "https://blog.safesst.com.br/wp-content/uploads/2017/09/110758-a-importancia-da-seguranca-do-trabalho-nas-empresas.jpg" 
}

var cursos = [cursoEnfermagem,cursoProgramacao,cursoAdministracao, cursoSeguranca]


var ulCursos = document.getElementById("cursos-lista");
console.log(ulCursos)

cursos.forEach(curso => {
    var licurso = document.createElement("li");
    var topicos = "";
    curso.topicos.forEach(topico => {
        topicos = topicos + `<li class="txt-box">${topico}</li>`
        console.log(topicos)
    })
    licurso.innerHTML = `  <img src=${curso.imagem} alt="codigo">
    <div class="cursos-descricao">
        <span id="detalhe"></span>
        <h2>${curso.nome}</h2>
        <p>${curso.descricao}</p>
        </p>
        <ul>
          ${topicos}
        </ul>
        <a href="#">saiba mais</a>


    </div>`
    licurso.classList = "cursos-item"
    ulCursos.appendChild(licurso)
})
