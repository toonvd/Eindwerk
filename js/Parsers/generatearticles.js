function navigatea(position)
{
window.location.href="artikel.html?count="+position;	
}
$(document).ready(function generatexml(){
    $.ajax({                        
        type: "GET",
        url: "data/artikels.xml",
        dataType: "xml",
        success: function(xml){
            var counter = 0;
            var line = "";
            var window =  $(document).width();
            var iheight = window * 0.20;
            $(xml).find("article").each(function(){
                if(counter > 0){
                    line = '<hr /> <br />'
                    }
                $('#artikels').append(line + '<div id="block" onclick="navigatea('+"'"+$(this).index()+"'"+')"><div id="title"><strong>'+$(this).find('title').text()+'</strong></div>'
                    +'<div id="date">'+$(this).find('date').text()+'</div><div id="image"><img src="'+$(this).find('image').text()+'"alt="articleimage" style="width:'+iheight+'px;"/></div>'
                    +'<div id="content">'+$(this).find('shortcontent').text()+'</div></div><br />').trigger('create');	
                counter++;
            })
        
        }
        
    })
})