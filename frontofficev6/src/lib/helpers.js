import $ from "jquery";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function doAnimations(elements) {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay,
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
}

export function intersectingAnimation() {
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-animation");
            //entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );
    document.querySelectorAll(".has-animation").forEach((block) => {
      observer.observe(block);
    });
  } else {
    document.querySelectorAll(".has-animation").forEach((block) => {
      block.classList.remove("has-animation");
    });
  }
}

export function bgImgFromData() {
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
}
