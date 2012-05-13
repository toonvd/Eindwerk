function getdetailsa(artist){
    $.ajax({
        type: "GET",
        url: "data/artikels.xml",
        dataType: "xml",
        success: function(xml){
            $(xml).find("article").filter(function(){
                return $(this).find("title").text().indexOf(artist) === 0;
            }).each(function(){
                $('#container').append('<div id="title_article">'+$(this).find('title').text()+'</div>'
                    +'<div id="date_article">'+$(this).find('date').text()+'</div>'
					+$(this).find('youtube').text()
                    +'<div id="content_article">'+$(this).find('fullcontent').text()+'</div>').trigger('create');
            })
        }
    })
}
function getArticle(id) {
                $.ajax({
                    type: "GET",
                    url: "data/artikels.xml",
                    dataType: "xml",
                    success: function(xml){
                        oArticle = $(xml).find('article:eq('+id+')');
                    
                        $('#container').empty();       
                        $('#container').append('<div id="title_article">'+oArticle.find('title').text()+'</div>'
                            +'<div id="date_article">'+oArticle.find('date').text()+'</div>'
                            +oArticle.find('youtube').text()
                            +'<div id="content_article">'+oArticle.find('fullcontent').text()+'</div>').trigger('create');
                    }
                })
            }