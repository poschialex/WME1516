//wechselt Bild von farbig auf grau, wenn Maus darüber geht
function turnImageToGrey()
{
	var image = document.getElementById('image');
	image.src = "world_data_logo_grey.png"; //beide image Dateien sind von derselben Größe, deswegen muss nur die Quelle veräandert
	image.style.cursor = "url('black-mouse-pointer.cur'), auto";
}
 //wechselt Bild von grau auf farbig, wenn die Maus nicht mehr darüber ist
function turnImageToColor()
{
	var image = document.getElementById('image');
	image.src = "world_data_logo_color.png";
	image.style.cursor = "default";
}

//Funktion, um das Menü in der mobilen Version zu togglen
function toggleMenu()
{
	var menu = document.getElementById('menu_links');
	var style = window.getComputedStyle(menu, null); //Da Javascript und CSS nicht zusammen arbeiten, müssen die Attribute über die Funktionn "window.getComputetStyle(variable, null)" aufgerufen werden
	
	if(style.getPropertyValue("display") == "none")
	{
		menu.style.display = "block";
	}
	else if(style.getPropertyValue("display") == "block")
	{
		menu.style.display = "none";
	}
}

//Funktion für das Erscheinen und Verschwinden der einzelnen Tabellenzeilen
function toggleColumn(colID)
{
	var column = document.getElementById(colID);
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


//Funktion um die Tabelle zu sortieren
var tablecontent;

function sortTableData(count, dir)
{
	var countryNames = new Array();
	
	tablecontent = document.getElementById('tableData');
	
	for(var i = count - 1; i > 0; --i)
	{
		countryNames[i - 1] = tablecontent.rows[i].getElementsByTagName('td')[1].innerHTML; //Auslesen der Ländernamen
	}
	
	if (dir == 1) //Sortierung je nach aufsteigend oder absteigend
	{
		countryNames.sort();
		countryNames.reverse();
	}
	
	if(dir == 0)
	{
		countryNames.sort();
	}		
	
	var newTablecontent = tablecontent.cloneNode(true); //Tabelle wird dupliziert
	
	for (var j = 0; j < countryNames.length; ++j) //Suche der den sortierten Ländernamen zugehörigen Tabellenzeilen, Übertragung dieser in die duplizierte Tabelle
	{
		for (var k = 1; k < count; ++k)
		{
			if(tablecontent.rows[k].getElementsByTagName('td')[1].innerHTML == countryNames[j])
			{
				newTablecontent.rows[j + 1].innerHTML = tablecontent.rows[k].innerHTML;
			}
		}
		
	}
	
	for(var l = 0; l < count; ++l) //Übertragung in die sichtbare Tabelle
	{
		document.getElementById('tableData').rows[l].innerHTML = newTablecontent.rows[l].innerHTML;
	}
	
	
}


//Funktion, wo Attribute gelöscht werden, wenn sich die Breite des Fensters wechselt
function removeAttributes()
{
	var w = window.innerWidth;
	var menu = document.getElementById('menu_links');
	var style = window.getComputedStyle(menu, null); //das Attribut muss von der CSS Datei manuell aufgerufen, damit sie verändert werden kann
	
	if(w > 320 && style.getPropertyValue("display") == "none")
	{
		menu.removeAttribute("style"); //Style wird vom Menu entfernt, damit die ganze Navigation gezeigt wird, wenn der Bildschirm größer 320ps ist
	}
}