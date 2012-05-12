function navigate(artist)
{	
window.location.href="detail.html?id="+encodeURIComponent(artist);
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
                $('#concerten').append(line+'<div id="tabelhomepage" onclick="navigate('+"'"+$(this).find('artist').text()+"'"+')"><div id="artist">'+$(this).find('artist').text()+'</div>'
					+'<div id="date">'+$(this).find('date').text()+'</div>'
					+'<div id="id="tabelimage""><img src="http://griekenland.mixxt.at/storage/images/events/0/0/0/00000000000000000000000000000.jpg"/></div>'
                   	+'<div id="location">'+$(this).find('location').text()+'</div>'
                    +'<div id="review">'+$(this).find('review').text()+'</div>').trigger('create');
                counter ++;
            })
        }
    })
})