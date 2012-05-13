function getdetails(artist){
    $.ajax({
        type: "GET",
        url: "data/concerts.xml",
        dataType: "xml",
        success: function(xml){
            $(xml).find("concert").filter(function(){
                return $(this).find("artist").text().indexOf(artist) === 0;
            }).each(function(){
                $('#container').append('<div id="tabel"><div id="tabelimage_detail"><img src="'+$(this).find('image').text()+'"alt="articleimage"/></div>'
				
                    +'<div id="tabelartist_detail">'+$(this).find('artist').text()+'</div>'
                    +'<div id="tabellocation_detail">'+$(this).find('location').text()+'</div>'
					+'<div id="tabelurl_detail"><a href="'+$(this).find('url').text()+'">'+$(this).find('url').text()+'</a></div>'
					+'<div id="longreview">'+$(this).find('longreview').text()+'</div>'
                    ).trigger('create');
            })
        }
    })
}
