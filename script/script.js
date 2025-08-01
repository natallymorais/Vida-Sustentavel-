
$(document).ready(function () {
    $(".titulo").on("click", function () {
        const conteudoAtual = $(this).next(".conteudo");
        // Fecha todos os outros
        $(".conteudo").not(conteudoAtual).slideUp(300);
        // Alterna apenas o clicado
        if (conteudoAtual.is(":visible")) {
          conteudoAtual.slideUp(300);
        } else {
          conteudoAtual.slideDown(300);
        }
    });
});