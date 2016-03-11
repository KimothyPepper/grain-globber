grains.forEach(function (grains) {
  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $li.html(grains.name);

  $img.attr('src', 'images/' + grains.img);

});
