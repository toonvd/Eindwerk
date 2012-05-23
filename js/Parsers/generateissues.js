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
                    +'<div id="content"><a href="" onclick="window.location.href='+"'"+'download.php?f='+oIssue.find('file').text()+"'"+'">deze maand</a></div></div><br />').trigger('create');
                    }
                })
            }