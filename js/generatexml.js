function generatexml(dateText){
$('#container').empty();
var counter=0;
$.ajax({
				type: "GET",
				url: "data.xml",
				dataType: "xml",
				success: function(xml){
				var parse = $.datepicker.parseDate('dd/mm/yy', dateText);
				var datez = $.datepicker.formatDate('DD d MM yy',new Date(parse)).toString();
				var value = datez.split('00:00:00');
				$('#container').append("<h1>"+value[0].toString()+"</h1>");
				$(xml).find("concert").filter(function(){
				return $(this).find("date").text().indexOf(dateText) === 0;
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