$(document).ready(function(){

  images = ["assets/images/your-iphone.jpg",
            "assets/images/her-ipad.jpg",
            "assets/images/his-ipad.jpg",
            "assets/images/their-iphones.jpg"];

  phrases = ["your iphone porn free",
             "her ipad porn free",
             "his ipad porn free",
             "their iphones porn free"];

  $(window).on("backstretch.before", function (e, instance, index) {
    if (index == 4) {
      index -= 4;
    }
    $('h1').text(phrases[index]);
  });

  $.backstretch(images, { fade: 500 });

});
