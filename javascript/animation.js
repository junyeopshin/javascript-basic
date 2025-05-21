const fromBottomTitle = document.querySelector("#fromBottomTitle");

const keyframes = {
  opacity: [0, 1],
  transform: ["translateY(50px)", " translateY(0)"],
};

const options = {
  duration: 2000,
  easing: "ease-out",
};

fromBottomTitle.animate(keyframes, options);
