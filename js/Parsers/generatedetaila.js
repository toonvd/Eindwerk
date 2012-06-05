/*function getArticle(id) {
                $.ajax({
                    type: "GET",
                    url: "data/artikels.xml",
                    dataType: "xml",
                    success: function(xml){
                        oArticle = $(xml).find('article:eq('+id+')');
                         $('#container').append('<div id="title_article">'+oArticle.find('title').text()+'</div>'
                    +'<div id="date_article">'+oArticle.find('date').text()+'</div>'
					+oArticle.find('youtube').text()
                    +'<div id="content_article">'+oArticle.find('fullcontent').text()+'</div>').trigger('create');
                       
                    }
                })
            }
            function navigate(id){
                 window.location.href="artikel.html?count="+id;
            }*/