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

var tablecontent;

function sortTableData(count, dir)
{
	var countryNames = new Array();
	
	tablecontent = document.getElementById('tableData');
	
	for(var i = count - 1; i > 0; --i)
	{
		countryNames[i - 1] = tablecontent.rows[i].getElementsByTagName('td')[1].innerHTML;
	}
	
	if (dir == 1) 
	{
		countryNames.sort();
		countryNames.reverse();
	}
	
	if(dir == 0)
	{
		countryNames.sort();
	}		
	
	
	
	var newTablecontent = tablecontent.cloneNode(true);
	
	for (var j = 0; j < countryNames.length; ++j)
	{
		for (var k = 1; k < count; ++k)
		{
			if(tablecontent.rows[k].getElementsByTagName('td')[1].innerHTML == countryNames[j])
			{
				newTablecontent.rows[j + 1].innerHTML = tablecontent.rows[k].innerHTML;
			}
		}
		
	}
	
	for(var l = 0; l < count; ++l)
	{
		document.getElementById('tableData').rows[l].innerHTML = newTablecontent.rows[l].innerHTML;
	}
	
	
}

