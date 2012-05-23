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
    <!--Javascript libraries-->
    <script type="text/javascript" src="js/Libraries/jquery-1.7.1.min.js"></script>
    <script src="js/Libraries/jquery.mobile-1.1.0.min.js"></script>
    <!--Home made -->
    <script src="js/Parsers/generateissues.js"></script>
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
    </script>
        <title>issues</title>
    </head>
    <body>
         <div data-role="page">
        <div data-role="header" data-position="fixed">
            <h1>Issues</h1>
            </div>
             <div data-role="content">
                 <div id="issues"></div>
             </div>
             <div data-role="footer" data-position="fixed">
            <div data-role="navbar">
                <ul>
                    <li onclick="window.location.href='index.html'"><a href="">Update!</a></li>
                    <li onclick="window.location.href='xml-parser.html'"><a href="">Kalender</a></li>
                    <li onclick="window.location.href='freestuff.html'"><a href="">Free Stuff</a></li>
                    <li onclick="window.location.href='issues.html'"><a href="">Magazine</a></li>
                </ul>
            </div>
        </div>
         </div>
    </body>
</html>
