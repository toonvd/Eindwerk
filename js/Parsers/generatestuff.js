$(document).ready(function generatestuff(){
    $.ajax({                        
        type: "GET",
        url: "data/freestuff.xml",
        dataType: "xml",
        success: function(xml){
            var counter = 0;
            var line = "";
            $(xml).find("stuff").each(function(){
                if(counter > 0){
                    line = '<hr /> <br />'
                    }
                $('#freestuff').append(line + '<div id="stuff" onclick="navigatea('+"'"+$(this).find('title').text()+"'"+')"><div id="title"><strong>'+$(this).find('title').text()+'</strong></div>'
                    +'<div id="date">'+$(this).find('content').text()+'</div><div id="image"><img style="width:90%;" src="'+$(this).find('image').text()+'"alt="articleimage"/></div>'
                    +'<div id="content">'+$(this).find('image').text()+'</div>'
                    +'<div id="url">'+$(this).find('url').text()+'</div></div><br />').trigger('create');	
                counter++;
            })
        }
    })
})