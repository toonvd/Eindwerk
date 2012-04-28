function navigate(artist)
{
    var valoutput ;
    if(typeof(window.localStorage) != 'undefined'){ 
        valoutput = window.localStorage. removeItem ("key10"); 
    } 
    else{ 
        throw "window.localStorage, not defined"; 
    }
    var keyinput = "key10";
    valoutput = artist;
    if(typeof(window.localStorage) != 'undefined'){ 
        window.localStorage.setItem(keyinput,valoutput);
        window.location.href = "detail.html";
    } 
    else{ 
        throw "window.localStorage, not defined"; 
    }
				
}
$(document).ready(function generatexml(){
$.ajax({
				type: "GET",
				url: "data/concerts.xml",
				dataType: "xml",
				success: function(xml){
				$(xml).find("concert").each(function(){
				$('#concerten').append('<div id="tabel" onclick="navigate('+"'"+$(this).find('artist').text()+"'"+')"><div id="tabelimage"><img src="http://griekenland.mixxt.at/storage/images/events/0/0/0/00000000000000000000000000000.jpg"/></div>'
                    +'<div id="tabelartist">'+$(this).find('artist').text()+'</div>'
                    +'<div id="tabellocation">'+$(this).find('location').text()+'</div>'
                    +'<div id="tabelurl"><a href="'+$(this).find('url').text()+'">'+$(this).find('url').text()+'</a></div>').trigger('create');				
				})
				}
				})
})