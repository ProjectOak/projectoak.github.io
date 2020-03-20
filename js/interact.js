// HOME PAGE HERO ANIMATION

anime({
  targets: '.el-header',
  opacity: ['0%', '100%'],
  scale: [0.85, 1],
  easing: 'easeInOutQuad',
  duration: 300,
  delay: 500
});

anime({
  targets: '.wave',
  rotate: [0, 45],
  easing: 'easeInOutSine',
  duration: 1000,
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.scroll-down',
  opacity: ['0%', '100%'],
  translateY: 16,
  easing: 'easeInOutQuad',
  duration: 500,
  delay: 1200
});

// ARTICLE ANIMATIONS

anime({
  targets: '.half',
  opacity: ['0%', '100%'],
  easing: 'easeInOutQuad',
  duration: 500,
  delay: 200
});

anime({
  targets: '.small-grid',
  opacity: ['0%', '100%'],
  easing: 'easeInOutQuad',
  duration: 500,
  delay: 700
});
