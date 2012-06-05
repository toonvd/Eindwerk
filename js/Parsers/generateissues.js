/*function getNode(id) {
                $.ajax({
                    type: "GET",
                    url: "data/issues.xml",
                    dataType: "xml",
                    success: function(xml){
                        oIssue = $(xml).find('issue:eq('+id+')');
                    $('#issues').empty(); 
                        $('#issues').append('<div id="block"><div id="titleissue"><strong>'+oIssue.find('title').text()+'</strong></div>'
						  	+'<div id="issue_date">'+oIssue.find('date').text()+'</div>'
                   			+'<div id=""><img src="'+oIssue.find('image').text()+'"alt="coverimage" id="coverimage"/></div>'
				 			+'<div id="content"><a href="" id="downloadbtn" onclick="window.location.href='+"'"+'download.php?f='+oIssue.find('file').text()+"'"+'">Download</a></div></div><br />').trigger('create');
                    $('#uitleg').empty(); 
                    $('#uitleg').append(oIssue.find('text').text()).trigger('create');
                }
                })
            }*/