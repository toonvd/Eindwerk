/*function parseLocation(adres, callback){

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
*/