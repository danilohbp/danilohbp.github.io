function criarIntegrante(){
    var details = document.createElement('details');
    var summary = document.createElement('summary');
    var divContent = document.createElement('div');
    var textoTrabalhandoEm = document.createElement('label');
    
    var formCheck = document.createElement('div');
    textoTrabalhandoEm.innerText = "Trabalhando em: ";
    
    formCheck.appendChild(textoTrabalhandoEm);
    divContent.appendChild(formCheck);
    summary.innerText = document.getElementById('inputNomeIntegrante').value;
    details.style.margin = "10px";
    details.appendChild(summary);
    details.appendChild(divContent);
    
    var integrantesCampo = document.getElementById('campoIntegrantes');
    integrantesCampo.appendChild(details);
}