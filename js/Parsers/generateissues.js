function getdetailsi(artist){
    var test;

    $.ajax({                        
        type: "GET",
        url: "data/issues.xml",
        dataType: "xml",
        success: function(xml){
 
            $(xml).find("issue").filter(function(){
                return $(this).find("date").text().indexOf(artist) === 0;
                
            }).each(function(){
                test=$(this).find('date').text();
                $('#issues').append('<div id="block">'
                    +'<div id="date">'+$(this).find('date').text()+'</div><div id=""><img src="'+$(this).find('image').text()+'"alt="articleimage"/></div>'
                    +'<div id="content"><a href="">download issue</a></div></div><br />').trigger('create');	
             
                $('a').click(function(e) {
                    e.preventDefault();
                    window.location.href = test;

                });
            })
        }
    })
   
}
function getNode(id) {
                $.ajax({
                    type: "GET",
                    url: "data/issues.xml",
                    dataType: "xml",
                    success: function(xml){
                        oIssue = $(xml).find('issue:eq('+id+')');
                    $('#issues').empty(); 
                        $('#issues').append('<div id="block"><div id="title"><strong>'+oIssue.find('title').text()+'</strong></div>'
                    +'<div id="date">'+oIssue.find('date').text()+'</div><div id=""><img src="'+oIssue.find('image').text()+'"alt="articleimage"/></div>'
                    +'<div id="content"><a href="">deze maand</a></div></div><br />').trigger('create');
                    }
                })
            }