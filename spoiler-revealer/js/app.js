$(".spoiler span").hide();
$(".spoiler").append("<button>Reveal spoiler</button>");
$("button").click(function() {
  $(this).prev().show();
  $(this).remove();
});
