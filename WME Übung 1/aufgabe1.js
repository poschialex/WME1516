//wechselt Bild, wenn Maus darüber geht
function turnImageToGrey()
{
	var image = document.getElementById('image');
	image.src = "world_data_logo_grey.png";
	image.style.cursor = "url('black-mouse-pointer.cur'), auto";
}

function turnImageToColor()
{
	var image = document.getElementById('image');
	image.src = "world_data_logo_color.png";
	image.style.cursor = "default";
}

//Boolean-Werte für die Buttons
var isCol1Visible = true;
var isCol2Visible = true;
var isCol3Visible = true;
var isCol4Visible = true;
var isCol5Visible = true;
var isCol6Visible = true;
var isCol7Visible = true;

//Funktion für das Erscheinen und Verschwinden der einzelnen Tabellenzeilen
function toggleColumn(colNumber)
{
	var columnBool;
	var column;
	
	switch(colNumber)
	{
	case 1: columnBool = isCol1Visible; column = document.getElementById('col1'); break;
	case 2: columnBool = isCol2Visible; column = document.getElementById('col2'); break;
	case 3: columnBool = isCol3Visible; column = document.getElementById('col3'); break;
	case 4: columnBool = isCol4Visible;	column = document.getElementById('col4'); break;
	case 5: columnBool = isCol5Visible; column = document.getElementById('col5'); break;
	case 6: columnBool = isCol6Visible; column = document.getElementById('col6'); break;
	case 7: columnBool = isCol7Visible; column = document.getElementById('col7'); break;
	}
	
	if(columnBool)
	{
		column.style.visibility = "collapse";
		columnBool = false;
	}
	else if(!columnBool)
	{
		column.style.visibility = "visible";
		columnBool = true;
	}
	
	switch(colNumber)
	{
	case 1: isCol1Visible = columnBool; break;
	case 2: isCol2Visible = columnBool; break;
	case 3: isCol3Visible = columnBool; break;
	case 4: isCol4Visible = columnBool; break;
	case 5: isCol5Visible = columnBool; break;
	case 6: isCol6Visible = columnBool; break;
	case 7: isCol7Visible = columnBool; break;
	}
}

function sortDescending()
{
	
}

function sortAscending()
{
	turnImageToGrey();
}