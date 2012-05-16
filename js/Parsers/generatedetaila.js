function getdetailsa(artist){
    $.ajax({
        type: "GET",
        url: "data/artikels.xml",
        dataType: "xml",
        success: function(xml){
            url = location.href;
            $(xml).find("article").filter(function(){
                return $(this).find("title").text().indexOf(artist) === 0;
            }).each(function(){
                $('#container').append('<div id="title_article">'+$(this).find('title').text()+'</div>'
                    +'<div id="date_article">'+$(this).find('date').text()+'</div>'
					+$(this).find('youtube').text()
                    +'<div id="content_article">'+$(this).find('fullcontent').text()+'</div>').trigger('create');
               // alert('<a href="http://pinterest.com/pin/create/button/?url='+url+'&media='+$(this).find('image').text()+'" class="pin-it-button" count-layout="none"><img border="0" src="images/pinterest.png" title="Pin It" /></a>');
                
                //$('#pinterest').append('<a href="http://pinterest.com/pin/create/button/?url='+url+'&media='+$(this).find('image').text()+'" class="pin-it-button" count-layout="none"><img border="0" src="images/pinterest.png" title="Pin It" /></a>');
                
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