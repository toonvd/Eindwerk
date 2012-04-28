$(document).ready(function generatexml(){
$.ajax({
				type: "GET",
				url: "data/artikels.xml",
				dataType: "xml",
				success: function(xml){
				$(xml).find("article").each(function(){
				$('#artikels').append('<div id="title"><strong>'+$(this).find('title').text()+'</strong></div>'
				+'<div id="date">'+$(this).find('date').text()+'</div><div id="image"><img src="'+$(this).find('image').text()+'"alt="articleimage"/></div>'
				+'<div id="content">'+$(this).find('content').text()+'</div>').trigger('create');				
				})
				}
				})
})