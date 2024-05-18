
let paginaAtual = 0;
let temaAtual = 'escuro';

function avancarPagina() {
    paginaAtual++;
    atualizarPagina();
}

function voltarPagina() {
    if (paginaAtual > 0) {
        paginaAtual--;
        atualizarPagina();
    }
}

function atualizarPagina() {
    // Aqui você pode adicionar o conteúdo para cada página
    // Por exemplo:
    const texto = document.getElementById('texto');
    if (paginaAtual === 0) {
        texto.textContent = "Introdução a programação, entenda HTML, CSS E JS.";
    } else if (paginaAtual === 1) {
        texto.textContent = "Então, eu não sei, fim kkkk.";   
    }
    else if (paginaAtual === 2) {
        texto.textContent = "Mas calma, tô aprendendo.";   
    }
}

function alterarTema() {
    const body = document.body;
    const botaoTema = document.getElementById('botaoTema');
    if (temaAtual === 'escuro') {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        botaoTema.textContent = 'Tema Escuro';
        temaAtual = 'claro';
    } else {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        botaoTema.textContent = 'Tema Claro';
        temaAtual = 'escuro';
    }
}