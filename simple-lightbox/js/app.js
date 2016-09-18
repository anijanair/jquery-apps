//creating an overlay of the clicked image to prevent reaching a dead end
var $overlay=$('<div id="overlay"></div>');

var $image=$("<img>");
var $caption = $("<p></P>");
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation =$(this).attr("href");
  $image.attr("src",imageLocation);
  $overlay.show();
  var captionText =$(this).children("img").attr("alt");
  $caption.text(captionText);
});
$overlay.click(function(){
  $(this).hide();
});
