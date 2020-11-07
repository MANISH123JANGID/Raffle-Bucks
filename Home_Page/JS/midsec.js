

  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [5,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 500,
    delay: (el, i) => 500 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 200,
    easing: "easeOutExpo",
    delay: 5000
  });

  anime.timeline({loop: true})
  .add({
    targets: '.ml16 .word',
    scale: [5,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 500,
    delay: (el, i) => 500 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 200,
    easing: "easeOutExpo",
    delay: 5000
  });

  anime.timeline({loop: true})
  .add({
    targets: '.ml17 .word',
    scale: [5,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 500,
    delay: (el, i) => 500 * i
  }).add({
    targets: '.ml17',
    opacity: 0,
    duration: 200,
    easing: "easeOutExpo",
    delay: 5000
  });

  var countdown=new Date("Nov 8,2020 15:45:45").getTime();
  var 