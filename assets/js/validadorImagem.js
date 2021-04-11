function validadorDeImagem(){
    var nomeArquivo = document.getElementById("nomeArquivo").value;
    var idxDot = nomeArquivo.lastIndexOf(".") + 1;
    var extArquivo = nomeArquivo.substr(idxDot, nomeArquivo.length).toLowerCase();
    if (extArquivo == "jpg" || extArquivo == "jpeg" || extArquivo == "png"){}
    else{
        alert("Apenas é permitido imagens!");
    } 
}