function CriarPDF() {
	// Título da Ata
	var titulo = document.getElementById('tituloAta');
	var tituloTexto = titulo.value.toUpperCase();
	
	// Nome do Responsável
	var responsavel = document.getElementById('inputResponsavel');
	var nomeResponsavel = responsavel.value;

	// Data
	var data = document.getElementById('inputData');
	var valorData = data.value.toString();
	var valorData = valorData.split('-').reverse().join('/');

	// Descrição
	var descricao = document.getElementById('inputDescricao');
	var descricaoValor = descricao.value;

	// Integrantes
	var integrantes = document.getElementById('campoIntegrantes');
	var integrante = integrantes.querySelector('summary').innerText;
	console.log(integrantes);

	// Tarefa
	var tarefa = document.getElementById('inputDataTarefaInicio');
	tarefa = tarefa.value;

	// Estilização
	var style = "<style>";
	style = style + ".column {padding: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;}";
	style = style + ".row {display: flex; flex-direction: row; justify-content: center; align-items: center;}"
	style = style + "h1, h3 {font-family: 'Roboto'; margin: 0px 0px 5px 0px;}";
	style = style + "#inputDescricao {font-family: 'Times New Roman', Times, serif;}";
	style = style + ".integrantes {color: blue;}";
	style = style + "</style>";

	// CRIA UM OBJETO WINDOW
	var win = window.open('', '', 'height=800,width=1000');

	// DOM para PDF
	win.document.write('<!DOCTYPE html><html><head>');
	win.document.write('<title></title>');
	win.document.write(style);
	win.document.write('</head>');
	win.document.write('<body>');
	win.document.write('<header class="column">');
	win.document.write('<h1>' + tituloTexto + '</h1>');
	win.document.write('<div class="row">');
	win.document.write('<h3 style="margin-top: 3px; font-weight: normal;"> Responsável: ' + nomeResponsavel + '</h3>');
	win.document.write('</div>');
	win.document.write('</header>');
	win.document.write('<main>');
	if (descricaoValor != ""){
		win.document.write('<label style="margin-top: 10px; font-size: 20px; font-weight: bold;">DESCRIÇÃO</label>')
		win.document.write('<div style="margin: 10px 0 20px 0; text-indent: 30px; font-size: 18px; text-align: justify;">' + descricaoValor + '</div>');
	}
	win.document.write('<label style="font-size: 20px; font-weight: bold;">INTEGRANTES (Informações)</label>');
	win.document.write('<div style="margin-top: 10px; border: 1px solid black; padding: 3px;"');
	win.document.write('<p class="integrantes" style="text-indent: 30px; font-size: 28px;">' + integrante + '</p>');
	win.document.write('<p>' + tarefa + '</p>')
	win.document.write('</div>')
	win.document.write('</main>')
	win.document.write('</body></html>');
	win.document.close();
	win.print();
}