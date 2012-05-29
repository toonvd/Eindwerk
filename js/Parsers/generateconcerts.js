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
              var window =  $(document).width();
            var iheight = window * 0.20;
            $(xml).find("concert").each(function(){
                if(counter > 0){
                    line = '<hr /> <br />'
                    }
                $('#concerten').append(line+'<div id="tabelhomepage" onclick="navigate('+"'"+$(this).find('artist').text()+"'"+')"><div id="artist">'+$(this).find('artist').text()+'</div>'
					+'<div id="date">'+$(this).find('date').text()+'</div>'
					+'<div id="tabelimage"><img src="'+$(this).find('image').text()+'"alt="articleimage" style="width:'+iheight+'px;"/></div>'
                   	+'<div id="location">'+$(this).find('location').text()+'</div>'
					+'<div id="shortreview">'+$(this).find('shortreview').text()+'</div>').trigger('create');
                counter ++;
            })
        }
    })
})