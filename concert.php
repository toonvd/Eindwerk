<?php
$doc = new DOMDocument;
$doc->load('data/concerts.xml');
$id = $_GET['id'];
$xpath = new DOMXpath($doc);
foreach ($xpath->query('//concert'.'[artist="' . $id . '"]') as $node) {
$parent=$node->parentNode;
}
$titlenode = $parent->getElementsByTagName('artist');
$title = $titlenode->item(0)->nodeValue;
$imagenode = $parent->getElementsByTagName('image');
$image = $imagenode->item(0)->nodeValue;
$contentnode = $parent->getElementsByTagName('shortreview');
$content = $contentnode->item(0)->nodeValue;
?>
<!DOCTYPE html>
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
        <link rel="apple-touch-startup-image" href="images/landscape.png" media="only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)"  />
        <link rel="apple-touch-startup-image" href="images/portrait.png" media="only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)" />
        <link rel="stylesheet" href="css/jquery.mobile-1.1.0.min.css" />
        <link rel="stylesheet" href="css/owncss.css"/>
        <!--Javascript libraries-->
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="js/Libraries/jquery-1.7.1.min.js"></script>
        <script src="js/Libraries/jquery.mobile-1.1.0.min.js"></script>
        <script src="js/Libraries/infobox.js"></script>
        <script src="js/Libraries/jquery.ui.map.js"></script>
        <script src="js/Libraries/jquery.ui.map.microdata.js"></script>

        <!--Home Made-->
        <!--<script src="js/Parsers/generatedetail.js"></script> --> 
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
        <!--<script src="js/media.js"></script>--> 
        <script type="text/javascript">	
            $(document).ready(function(){
                $.urlParam = function(name){
                    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
                    return results[1] || 0;
                }
                var valoutput = decodeURIComponent($.urlParam('id'));
                      
                getdetails(valoutput);
                $('#map_canvas').hide();
                $('#concertinfo').hide();
            });  
            function showhide(){
                if ($('#map_canvas:visible').length > 0)
                {
                  
                    $('#map_canvas').hide();
                    $('#concertinfo').hide();
                }
                else
                {
                     
                    $('#map_canvas').show();
                    $('#map_canvas').gmap('refresh');
                    $('#concertinfo').show();
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
            function parseLocation(adres, callback){

                var geocoder = new google.maps.Geocoder();
                //convert location into longitude and latitude
                var addresses = adres;
                if (geocoder) {

                    geocoder.geocode( {
                        'address': addresses
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            lat1 = results[0].geometry.location.lat();
                            lng1 = results[0].geometry.location.lng();
                            if( typeof callback == 'function' ) {
                                callback(lat1, lng1);
                            }

                        }

                    });
                }



            }
            function getdetails(artist){
                $.ajax({
                    type: "GET",
                    url: "data/concerts.xml",
                    async: false,
                    dataType: "xml",
                    success: function(xml){
                        $(xml).find("concert").filter(function(){
                            return $(this).find("artist").text().indexOf(artist) === 0;
                        }).each(function(){
                            $('#container').append('<div id="tabel"><div id="tabelimage_detail"><img src="'+$(this).find('image').text()+'"alt="articleimage" id="image"/></div>'

                                +'<div id="tabelartist_detail">'+$(this).find('artist').text()+'</div>'	  
                                +'<div id="tabelurl_detail"><a href="'+$(this).find('url').text()+'">'+$(this).find('location').text()+'</a></div>'
                                +'<div id="longreview">'+$(this).find('longreview').text()+'</div>'+'</div>'
                        ).trigger('create');
                            $('#concertinfo').append('<div id="tabeldate_detail">'+'Datum: '+$(this).find('date').text()+'</div>'
                                +'<div id="tabelhour_detail">'+'Aanvangsuur: '+$(this).find('hour').text()+'</div>'
                                +'<div id="tabellocation_detail">'+'Locatie: '+$(this).find('location').text()+'</div>'
                                +'<div id="ticket_detail">'+'Prijs ticket: '+$(this).find('ticketprice').text()+'</div>'
                                +'<div id="souldout_detail">'+$(this).find('soldout').text()+'</div>'
                                +'</div>').trigger('create');
                            adres = $(this).find('adres').text();
                            parseLocation(adres, function(lat1, lng1){
                                $('#map_canvas').gmap(
                                { 
                                    'center': lat1+','+lng1,
                                    'zoom' : 14,
                                    'mapTypeControl' : true,
                                    'navigationControl' : true,
                                    'streetViewControl' : true
                                })
                                $('#map_canvas').gmap('addMarker', {
                                    'position':  lat1+','+lng1
                                }).click(function() {
                                    $('#map_canvas').gmap('openInfoWindow', {
                                        'content': adres
                                    }, this);
                                });
                            });

                        })
                    }
                })
            }

        </script>



        <title>detail</title>
        <!-- End Declarations -->
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
            <div data-role="header">
                <h1>Concert</h1>
            </div>            
            <div data-role="content">
                <div class="banner"><img src="images/banner.jpg"/></div>
                <a href="" data-rel="back"><img src="images/backbtn2.png" class="backbtn"/></a>   
                <div id="container"></div>
                <div id="social_concert"> 
                    <ul id="socialmedialist_concert">
                        <li><a onclick="showsocialmedia('facebook');return false;" href="#"><img src="images/facebook.png"></a></li>
                        <li><a onclick="showsocialmedia('twitter');return false;" href="#"><img src="images/twitter.png"></a></li>
                        <li><a onclick="showsocialmedia('gplus');return false;" href="#"><img src="images/googleplus.png"></a></li>
                    </ul>
                </div>
                <div id="moreinfo" onclick="showhide()">Meer info over dit concert</div>
                <div id="concertinfo"></div>
                <div id="map_canvas" style="width:400px;height:200px;"></div>


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


