$(document).ready(function(){

  images = ["assets/images/your-iphone.jpg",
            "assets/images/her-ipad.jpg",
            "assets/images/their-iphones.jpg",
            "assets/images/his-ipad.jpg"];

  phrases = ["your iphone porn free",
             "her ipad porn free",
             "their iphones porn free",
             "his ipad porn free"];

  $(window).on("backstretch.before", function (e, instance, index) {
    if (index == 4) {
      index -= 4;
    }
    $('h1').text(phrases[index]);
  });

  $.backstretch(images, { fade: 500 });

});
