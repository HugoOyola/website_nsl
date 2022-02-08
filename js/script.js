var current = 0;
var imagenes = new Array();

$(document).ready(function () {
  var numImages = 4;
  if (numImages <= 3) {
    $(".right-arrow").css("display", "none");
    $(".left-arrow").css("display", "none");
  }

  $(".left-arrow").on("click", function () {
    if (current > 0) {
      current = current - 1;
    } else {
      current = numImages - 3;
    }

    $(".carrusel").animate({ left: -$("#product_" + current).position().left }, 600);

    return false;
  });

  $(".left-arrow").on(
    "hover",
    function () {
      $(this).css("opacity", "0.5");
    },
    function () {
      $(this).css("opacity", "1");
    }
  );

  $(".right-arrow").on(
    "hover",
    function () {
      $(this).css("opacity", "0.5");
    },
    function () {
      $(this).css("opacity", "1");
    }
  );

  $(".right-arrow").on("click", function () {
    if (numImages > current + 3) {
      current = current + 1;
    } else {
      current = 0;
    }

    $(".carrusel").animate({ left: -$("#product_" + current).position().left }, 600);

    return false;
  });
});

function openTab(namePersona) {
  var i;
  var x = document.getElementsByClassName("tipoPersona");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(namePersona).style.display = "block";
}
