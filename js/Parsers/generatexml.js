/*function navigate(artist)
{
window.location.href="detail.html?id="+encodeURIComponent(artist); 
}
function generatexml(dateText){
    $('#container').empty();
    var counter=0;
    $.ajax({
        type: "GET",
        url: "data/concerts.xml",
        dataType: "xml",
        success: function(xml){
            
           
            
            $(xml).find("concert").filter(function(){
                return $(this).find("date").text().indexOf(dateText) === 0;
            }).each(function(){
                $('#container').append('<div id="tabel" onclick="navigate('+"'"+$(this).find('artist').text()+"'"+')"><div id="tabelimage"><img src="'+$(this).find('image').text()+'"/></div>'
                    +'<div id="tabelartist">'+$(this).find('artist').text()+'</div>'
					
					
                    +'<div id="tabellocation">'+$(this).find('location').text()+'</div>'
					
                    ).trigger('create');
                counter++;
  
            })
        }
    })
}*/