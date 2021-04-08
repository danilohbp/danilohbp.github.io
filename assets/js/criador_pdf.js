function CriaPDF() {
		var titulo = document.getElementById('tituloAta');
		var texto = titulo.value;
		var style = "<style>";
		style = style + "h1 {font-family: 'Roboto';}";
		style = style + "</style>";

		// CRIA UM OBJETO WINDOW
		var win = window.open('', '', 'height=800,width=800');

		win.document.write('<!DOCTYPE html><html><head>');
		win.document.write('<title>Ata</title>');
		//win.document.write(style);
		win.document.write('</head>');
		win.document.write('<body>');
		win.document.write('<h1>' + texto + '</h1>');
		win.document.write('</body></html>');
		win.document.close(); 	             
		win.print();
	}