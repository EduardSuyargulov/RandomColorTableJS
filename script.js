let headerText = document.getElementById("header-text");
let introInput = document.getElementById("intro-input");
let randomColorTable = document.getElementById("random-color-table");

headerText.innerHTML = "<h1>Таблица случайных цветов от Суяргулова Эдуарда</h1>";
headerText.setAttribute("align", "center");

introInput.innerHTML = `
	<p>Выберите размер таблицы</p>
	<br>
	<label for='table-height'>Количество строк в таблице </label>
	<input type='text' id='table-height-value' size='1' value='10'>
	<label for='table-width'>Количество ячеек в строке </label>
	<input type='text' id='table-width-value' size='1' value='10'>
	<br>
	<input type="button" value="Сгенерировать" id="generate-button" onclick="generate()">`;
introInput.setAttribute("align", "center"); 

function generate() {
	let tableWidth = document.getElementById("table-width-value");  
	let tableHeight = document.getElementById("table-height-value");

	let tableWidthValue = parseInt(tableWidth.value);
	let tableHeightValue = parseInt(tableHeight.value);

	let redRand = 0, greenRand = 0, blueRand = 0;

	randomColorTable.setAttribute("align", "center");

	if(tableWidthValue > 0 && tableHeightValue > 0 && tableWidthValue <= 10 && tableHeightValue <= 10) {
		let cells = "";
		randomColorTable.innerHTML = "<table id='table-body'></table>";
		let tableBody = document.getElementById("table-body");

		for(let i = 1; i <= tableHeightValue; i++) {
			tableBody.innerHTML += "<tr class='rows' id='row" + i + "'></tr>";
			for(let j = 1; j <= tableWidthValue; j++) {
				redRand = Math.floor(Math.random() * 255);
				greenRand = Math.floor(Math.random() * 255);
				blueRand = Math.floor(Math.random() * 255);
				cells += "<td class='cells' id='cell" + i + j 
				+ "' style='background-color: rgb(" + redRand + " " + greenRand + " " + blueRand 
				+ ")'>" + "R: " + redRand + "<br>" + "G: " + greenRand + "<br>" + "B: " + blueRand  + "</td>";
			}
			document.getElementById("row" + i).innerHTML = cells;
			cells = "";
		}

	}
	else {
		randomColorTable.innerHTML = "Введите значение больше 0 и меньше 10"
	}
}
