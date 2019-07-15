$(document).ready(function() {
  var url =
    "https://api.nasa.gov/planetary/apod?api_key=x6vBGH5z5njOqWKVMz5pcXKnBPCYDDgGMeQaGcPl";

  $.ajax({
    url: url,
    success: function(result) {
      if ("copyright" in result) {
        $("#apoidCopyWrite").text("Image Credits: " + result.copyright);
      } else {
        $("#apoidCopyWrite").text("Image Credits: " + "Public Domain");
      }

      if (result.media_type == "video") {
        $("#apoidImage").css("display", "none");
        $("#apoidVideo").attr("src", result.url);
      } else {
        $("#apoidVideo").css("display", "none");
        $("#apoidImage").attr("src", result.url);
      }
      $("#apoidDescription").text(result.explanation);
      $("#apoidTitle").text(result.title);
    }
  });
});
