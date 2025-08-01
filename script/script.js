$("#trocaTema").on("click", function(){
    var body = document.querySelector("body")
    if (body.classList.contains("temaClaro")){
        body.classList.replace("temaClaro", "temaEscuro");
        $("#trocaTema").text("🌞");
    }else{
        body.classList.replace("temaEscuro","temaClaro");
        $("#trocaTema").text("🌑");
    }
})