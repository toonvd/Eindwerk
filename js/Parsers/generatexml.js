function navigate(artist)
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
            
            $('#container').append("<h2>"+dateText.toString()+"</h2>");
            
            $(xml).find("concert").filter(function(){
                return $(this).find("date").text().indexOf(dateText) === 0;
            }).each(function(){
                $('#container').append('<div id="tabel" onclick="navigate('+"'"+$(this).find('artist').text()+"'"+')"><div id="tabelimage"><img src="http://griekenland.mixxt.at/storage/images/events/0/0/0/00000000000000000000000000000.jpg"/></div>'
                    +'<div id="tabelartist">'+$(this).find('artist').text()+'</div>'
                    +'<div id="tabellocation">'+$(this).find('location').text()+'</div>'
                    +'<div id="tabelurl"><a href="'+$(this).find('url').text()+'">'+$(this).find('url').text()+'</a></div>').trigger('create');
                counter++;
  
            })
        }
    })
}