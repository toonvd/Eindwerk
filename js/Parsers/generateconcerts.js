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
            var counter = 0;
            var line = "";
            $(xml).find("concert").each(function(){
                if(counter > 0){
                    line = '<hr /> <br />'
                    }
                $('#concerten').append(line+'<div id="tabel" onclick="navigate('+"'"+$(this).find('artist').text()+"'"+')"><div id="tabelimage"><img src="http://griekenland.mixxt.at/storage/images/events/0/0/0/00000000000000000000000000000.jpg"/></div>'
                    +'<div id="artist">'+$(this).find('artist').text()+'</div>'
                    +'<div id="date">'+$(this).find('date').text()+'</div>'
                    +'<div id="review">'+$(this).find('review').text()+'</div>').trigger('create');
                counter ++;
            })
        }
    })
})