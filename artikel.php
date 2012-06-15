<!DOCTYPE HTML>
<!-- screen formatting -->
<?php
$doc = new DOMDocument;
$doc->load('data/artikels.xml');
$items = $doc->getElementsByTagName('article');
$id = $_GET['count'];
$parent = $items->item($id);
$titlenode = $parent->getElementsByTagName('title');
$title = $titlenode->item(0)->nodeValue;
$imagenode = $parent->getElementsByTagName('image');
$image = $imagenode->item(0)->nodeValue;
$contentnode = $parent->getElementsByTagName('shortcontent');
$content = $contentnode->item(0)->nodeValue;
?>
<html>
    <head>
        <meta property="og:title" content="<?php echo $title; ?>" />
        <meta property="og:description" content="<?php echo $content ?>" />
        <meta property="og:image" content="<?php echo $image ?>" />
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
        <!--Home Made-->
        <!--<script src="js/Parsers/generatedetaila.js"></script>-->
        <script type="text/javascript">
            function showsocialmedia(type,name){
                url=location.href;
                if(type=='facebook'){ 
                    var popupwindow = window.open('http://www.facebook.com/sharer.php?u='+url,name,'location=1,status=1,scrollbars=1,width=700,height=500'); 
                    window.moveTo(20,20);
                }
                if(type=='twitter')
                {
                    var popupwindow = window.open('https://twitter.com/intent/tweet?original_referer='+url,name+'source=tweetbutton&text='+url,'location=1,status=1,scrollbars=1,width=700,height=500'); 
                    window.moveTo(20,20);
                }
        
                if(type=='gplus')
                {
                    var popupwindow = window.open('https://plusone.google.com/_/+1/confirm?hl=en&url='+url,name,'location=1,status=1,scrollbars=1,width=700,height=500'); 
                    window.moveTo(20,20);
                }
            }
        </script>
        <script type="text/javascript">		
            $(document).ready(function(){
                url=location.href;
                $('#comments').append('<div class="fb-comments" data-href="'+url+'" data-num-posts="2" data-width="470"></div>');
                $.urlParam = function(name){
                    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
                    return results[1] || 0;
                }
           
                var valinput = decodeURIComponent($.urlParam('count'));
            
                var valoutput = valinput.replace("+"," ");
            
                getArticle(valoutput);
                $.ajax({                        
                    type: "GET",
                    url: "data/artikels.xml",
                    dataType: "xml",
                    success: function(xml){
                        count = $(xml).find("article").each(function()
                        {
                            return $(this).children().length === 0;
                        }).length;
                        var j = 0;
                        while(j < count){
                            if(j==i){
                                $('#pager').append('<img src="images/pager_active.png"/>').trigger('create');
                            }
                            else{
						
                                $('#pager').append('<img src="images/pager_inactive.png"/>').trigger('create');

                            }
                            j++;
                        }
                    }
                })
                var i = decodeURIComponent($.urlParam('count'));
             
                $('body').live('swipeleft swiperight',function(event){
                    if (event.type == "swipeleft") {
                        if(i==count-1)
                        {
                            i=0;
                        }
                        else
                            i++;
                        navigate(i);    
                    }
                      
                    if (event.type == "swiperight") {
                        if(i == 0)
                        {
                            i = count-1;
                        }
                        else
                            i--;
                        navigate(i);   
                    }
                
                });
            });
        </script>
        <script>
            function showhide(){
                if ($('#comments:visible').length > 0)
                {
                    $('#comments').hide();
                }
                else
                {
                    $('#comments').show();
                }
              
            }
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
            function getArticle(id) {
                $.ajax({
                    type: "GET",
                    url: "data/artikels.xml",
                    dataType: "xml",
                    success: function(xml){
                        oArticle = $(xml).find('article:eq('+id+')');
                        var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                        var match = oArticle.find('youtube').text().match(regExp);   
                        $('#container').append('<div id="title_article">'+oArticle.find('title').text()+'</div>'
                            +'<div id="date_article">'+oArticle.find('date').text()+'</div>'
                            +'<iframe width="600" height="315" src='+'"'+'http://www.youtube.com/embed/'+match[1]
                            +'<div id="content_article">'+oArticle.find('fullcontent').text()+'</div>').trigger('create');
                    
                    }
                })
            }
            function navigate(id){
                window.location.href="artikel.php?count="+id;
            }
        </script>

        <!-- End Declarations -->
        <title>Update!</title>
    </head>
    <body>
        <div id="fb-root"></div>
        <div id="landscape"></div>
        <script>
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : '134067536728048', // App ID
                    status     : true, // check login status
                    cookie     : true, // enable cookies to allow the server to access the session
                    xfbml      : true  // parse XFBML
                });

                // Additional initialization code here
            };

            // Load the SDK Asynchronously
            (function(d){
                var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement('script'); js.id = id; js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";
                ref.parentNode.insertBefore(js, ref);
            }(document));
        </script>
        <div data-role="page" id="wrap">
            <div data-role="header" data-position="fixed">

                <h1>Update!</h1></div>
            <div data-role="content">

                <div class="banner"><img src="images/banner2.jpg"/></div>
                <a href="" data-rel="back"><img src="images/backbtn2.png" class="backbtn"/></a>   
                <div id="container"></div>

                <div id="social"> 
                    <ul id="socialmedialist">
                        <li><a onclick="showsocialmedia('facebook');return false;" href="#"><img src="images/facebook.png"></a></li>
                        <li><a onclick="showsocialmedia('twitter');return false;" href="#"><img src="images/twitter.png"></a></li>
                        <li><a onclick="showsocialmedia('gplus');return false;" href="#"><img src="images/googleplus.png"></a></li>
                    </ul>
                </div>
                <div id="showhide" onclick="showhide()">comments weergeven/verbergen</div>
                <div id="comments"></div>
                <div id="pager"></div>

            </div>
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
