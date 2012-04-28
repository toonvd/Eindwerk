function getdetails(artist){
$.ajax({
				type: "GET",
				url: "data.xml",
				dataType: "xml",
				success: function(xml){
				$(xml).find("concert").filter(function(){
				return $(this).find("artist").text().indexOf(artist) === 0;
				}).each(function(){
				$('#container').append('<div id="tabel"><div id="tabelimage"><img src="http://griekenland.mixxt.at/storage/images/events/0/0/0/00000000000000000000000000000.jpg"/></div>'
				+'<div id="tabelartist">'+$(this).find('artist').text()+'</div>'
				+'<div id="tabellocation">'+$(this).find('location').text()+'</div>'
				+'<div id="tabelurl"><a href="'+$(this).find('url').text()+'">'+$(this).find('url').text()+'</a></div>').trigger('create');
				counter++;
				
				})
				}
				})
}