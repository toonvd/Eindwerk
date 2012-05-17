function navigatea(artist)
{
window.location.href="artikel.html?id="+encodeURIComponent(artist);	
}
$(document).ready(function generatexml(){
    $.ajax({                        
        type: "GET",
        url: "data/artikels.xml",
        dataType: "xml",
        success: function(xml){
            var counter = 0;
            var line = "";
            $(xml).find("article").each(function(){
                if(counter > 0){
                    line = '<hr /> <br />'
                    }
                $('#artikels').append(line + '<div id="block" onclick="navigatea('+"'"+$(this).find('title').text()+"'"+')"><div id="title"><strong>'+$(this).find('title').text()+'</strong></div>'
                    +'<div id="date">'+$(this).find('date').text()+'</div><div id="image"><img src="'+$(this).find('image').text()+'"alt="articleimage"/></div>'
                    +'<div id="content">'+$(this).find('shortcontent').text()+'</div></div><br />').trigger('create');	
                counter++;
            })
        }
    })
})