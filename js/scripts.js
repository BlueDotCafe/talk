$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul.kitty").prepend("<li>Meow!</li>");
  });

  $("button#dog").click(function() {
    $("ul.doggie").prepend("<li>Bark, Bark!</li>");
  });

  $("button#neither").click(function() {
    $("ul.nope").prepend("<li>*cricket cricket*</li>");
  });
});
