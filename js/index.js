new Swiper (".Intro__carousel", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".Carousel__arrows-next",
    prevEl: ".Carousel__arrows-prev",
  },
  breakpoints: {
    768: {
      autoHeight: true,
    }
  }
});

new Swiper (".Eventi__carousel", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".Carousel__arrows-next",
    prevEl: ".Carousel__arrows-prev",
  },
});

new Swiper (".Professione__carousel", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".Carousel__arrows-next",
    prevEl: ".Carousel__arrows-prev",
  },
});

new Swiper (".Approccio__carousel", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".Carousel__arrows-next",
    prevEl: ".Carousel__arrows-prev",
  },
});

$("#Pagein").on("show.bs.modal", function (event) {
  var link = event.relatedTarget;
  var pageIdSelector = link.hash;
  $(".Pagein__page").css("display", "none");
  $(pageIdSelector).css("display", "block");
});

$("[data-smooth]").click(function() {
  var $target = $(this.hash);
  var destination = $target.length ? $target.offset().top : 0;
  destination = destination - $("#Header").height();
  destination -= 200;
  $("html,body").animate({ scrollTop: destination }, 500);
  return false;
});

var $header = $("#Header");

function maybeFixHeader() {
  if ($(window).scrollTop() >= 200) {
    $header.addClass("is-fixed");
  }
  else {
    $header.removeClass("is-fixed");
  }
}

$(window).scroll(maybeFixHeader);

maybeFixHeader();

// new Rellax('.rellax', {
//   speed: -2,
//   center: false,
//   wrapper: null,
//   round: true,
//   vertical: true,
//   horizontal: false
// });
