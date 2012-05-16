function fb_like() {
url=encodeURIComponent(location.href);
title=document.title;
window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(title),'sharer','toolbar=0,status=0,width=626,height=436');
return false;}
$(document).ready(function() {
    var pathname = window.location;
    var tweeturl = 'http://twitter.com/share?url='+encodeURI(pathname)+'&via=MyTwitterUserName&text=test';
    $('#tweet').append('<a id="mycustomtwitterbutton" href="'+ tweeturl+' "><img src="images/twitter.png"></a>');
    
});
function gplus(){
url=encodeURIComponent(location.href);
popUp = window.open('https://plusone.google.com/_/+1/confirm?hl=en-US&url='+url, 'popupwindow', 'scrollbars=yes,width=800,height=400');popUp.focus();return false;
}
