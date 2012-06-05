<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<!DOCTYPE html>
<html>
    <head>
        <!-- screen formatting -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
    <link rel="stylesheet" href="css/jquery.mobile-1.1.0.min.css" />
    <link rel="stylesheet" href="css/owncss.css"/>
    <!--Javascript libraries-->
    <script type="text/javascript" src="js/Libraries/jquery-1.7.1.min.js"></script>
    <script src="js/Libraries/jquery.mobile-1.1.0.min.js"></script>
    <!--Home made -->
   <!-- <script src="js/Parsers/generateissues.js"></script>-->
    <script type="text/javascript">		
        $(document).ready(function(){
            $.ajax({                        
                type: "GET",
                url: "data/issues.xml",
                dataType: "xml",
                success: function(xml){
                    count = $(xml).find("issue").each(function()
                    {
                        return $(this).children().length === 0;
                    }).length;
                }
            })
            
            var i = 0;
            getNode(i);
            $('body').live('swipeleft swiperight',function(event){
                if (event.type == "swipeleft") {
                    if(i == 0)
                    {
                        i = count-1;
                    }
                    else
                        i--;
                    getNode(i);          
                }
                      
                if (event.type == "swiperight") {
                    if(i==count-1)
                    {
                        i=0;
                    }
                    else
                        i++;
                    getNode(i);
                }
                         
            });
        });
         window.onorientationchange = detectIPadOrientation;
 function detectIPadOrientation () {

	if ( orientation == 90 || orientation == -90) {
	$('#wrap').hide();
	$('#landscape').show();
	}
	else
	{
	$('#wrap').show();
	$('#landscape').hide();
	}
	}
    </script>
    <script type="text/javascript">
		function getNode(id) {
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
            }
    </script>
        <title>issues</title>
    </head>
    <body>
    
        <div id="landscape"></div>
         <div data-role="page" id="wrap">
         <div data-role="header" data-position="fixed"><h1>Magazine</h1></div>

        <div class="banner"><img src="images/20-1.jpg"/></div>
       
             <div data-role="content">
                 <div id="issues"></div>
             </div>
             <div id="uitleg"></div>
             <div data-role="footer" data-position="fixed">
            <div data-role="navbar">
                <ul>
                    <li onclick="window.location.href='index.html'"><a href="">Update!</a></li>
                    <li onclick="window.location.href='xml-parser.html'"><a href="">Kalender</a></li>
                    <li onclick="window.location.href='freestuff.html'"><a href="">Free Stuff</a></li>
                    <li onclick="window.location.href='issues.php'"><a href="">Magazine</a></li>
                </ul>
            </div>
        </div>
         </div>
    </body>
</html>
