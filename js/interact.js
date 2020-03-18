// HOME PAGE HERO ANIMATION

anime({
  targets: '.el',
  height: ['0%', '100%'],
  easing: 'easeInOutQuad',
  duration: 500,
  delay: 500
});

anime({
  targets: '.el-header',
  opacity: ['0%', '100%'],
  scale: [0.85, 1],
  easing: 'easeInOutQuad',
  duration: 300,
  delay: 1000
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
