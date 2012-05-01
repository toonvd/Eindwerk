function getdetailsa(artist){
    $.ajax({
        type: "GET",
        url: "data/artikels.xml",
        dataType: "xml",
        success: function(xml){
            $(xml).find("article").filter(function(){
                return $(this).find("title").text().indexOf(artist) === 0;
            }).each(function(){
                $('#container').append('<div>'+$(this).find('title').text()+'</div>'
                    +'<div id="image"><img style="width:90%;" src="'+$(this).find('image').text()+'"alt="articleimage"/></div>'
                    +'<div>'+$(this).find('date').text()+'</div>'
                    +'<div>'+$(this).find('content').text()+'</div>').trigger('create');
            })
        }
    })
}