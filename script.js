const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi um dos principais efeitos sociais da Primeira Guerra Mundial nas sociedades europeias?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "cara~"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "fantastico"
            },
            {
                texto: "A Primeira Guerra Mundial causou uma grande mobilização de mulheres para o mercado de trabalho, já que muitos homens estavam na frente de batalha, o que resultou em mudanças significativas nas normas de gênero e no papel das mulheres na sociedade.",
                afirmacao: "As mulheres desempenharam um papel crucial durante a guerra."
            },
            {
                texto: "A guerra levou à estabilização das normas sociais e ao fortalecimento das instituições tradicionais, sem grandes mudanças nas estruturas de gênero ou na mobilidade social.",
                afirmacao: "Houve pouca mudança nas estruturas sociais."
            }
        ]
    },
    {
        enunciado: "Como a Segunda Guerra Mundial impactou a economia global e o comércio internacional?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "uau"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            },
            {
                texto: "A Segunda Guerra Mundial causou uma grande destruição das infraestruturas e indústrias, levando a uma recessão global profunda e a uma redução significativa no comércio internacional.",
                afirmacao: "A guerra trouxe destruição generalizada."
            },
            {
                texto: "A guerra estimulou o crescimento econômico e o comércio internacional, com a reconstrução pós-guerra levando ao desenvolvimento de novas economias e à expansão dos mercados globais.",
                afirmacao: "A reconstrução impulsionou a economia global."
            }
        ]
    },
    {
        enunciado: "Qual foi uma das principais consequências sociais da criação da Organização das Nações Unidas (ONU) após a Segunda Guerra Mundial?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "é triste mais interessante"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "é bom saber um pouco de história"
            },
            {
                texto: "A criação da ONU levou a uma maior cooperação internacional e à implementação de medidas para promover os direitos humanos, prevenir futuros conflitos e melhorar as condições de vida globalmente.",
                afirmacao: "A ONU desempenhou um papel importante na paz mundial."
            },
            {
                texto: "A ONU teve um impacto limitado na cooperação internacional e na promoção dos direitos humanos, com pouca influência nas questões de conflitos e desenvolvimento global.",
                afirmacao: "A ONU teve uma influência limitada."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
