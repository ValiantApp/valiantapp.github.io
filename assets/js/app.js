$(document).ready(function(){

  images = ["assets/images/her-ipad.jpg",
            "assets/images/their-iphones.jpg",
            "assets/images/his-ipad.jpg",
            "assets/images/your-iphone.jpg"];

  phrases = ["her ipad porn free",
             "their iphones porn free",
             "his ipad porn free",
             "your iphone porn free"];

  $(window).on("backstretch.before", function (e, instance, index) {
    if (index == 4) {
      index -= 4;
    }
    $('h1').text(phrases[index]);
  });

  $.backstretch(images, { fade: 500 });

});
