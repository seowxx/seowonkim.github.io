$("#ja").click(function () {
	$("p").toggle();
});

$("#seagull").click(function(){
	$("#seagull").animate({right: "300px"},2000);
});

$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'https://www.chelseadogs.com/media/wysiwyg/shop-by-breed/bichon-frise-sticking-the-tongue-out-isolated-on-white-xs.png';
  } else if ( key == 'b' ) {
    img = 'http://www.pngmart.com/files/4/Puppy-PNG-Image.png';
  } else if ( key == 'c' ) {
    img = 'http://www.freepngimg.com/download/unicorn/8-2-unicorn-free-png-image.png';
  }  else if ( key == 'd' ) {
    img = 'https://www.alaskanmalamutes.fr/Images_site/Tuile-Looping.png';
  } else if (key == 'e') {
  	img = 'https://www.pixelscrapper.com/legacy/sites/default/files/imagecache/resize_300_nocrop/assets/user-1/node-2207/image/marisa-lerin-glitter-scatter-asset-cambodia-embellishment-commercial-use.png'
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});