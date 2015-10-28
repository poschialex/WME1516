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

//Funktion, um das Menü in der mobilen Version zu togglen
var menu;
var isClosed = true

function toggleMenu()
{
	menu = document.getElementById('menu_links');
	if(isClosed)
	{
		menu.style.display = "block";
		isClosed = false;
	}
	else if(!isClosed)
	{
		menu.style.display = "none";
		isClosed = true;
	}
}

//Funktion für das Erscheinen und Verschwinden der einzelnen Tabellenzeilen
function toggleColumn(colID)
{
	var column = document.getElementById(colID)
	var style = window.getComputedStyle(column, null);
	if(style.getPropertyValue("visibility") == "visible")
	{
		column.style.visibility = "collapse";
	}
	else if(style.getPropertyValue("visibility") == "collapse")
	{
		column.style.visibility = "visible";
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
