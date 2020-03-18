// HOME PAGE HERO ANIMATION

anime({
  targets: '.el',
  keyframes: [
    {width: ['0%', '100%']}
  ],
  easing: 'easeInOutQuad',
  duration: 500,
  delay: 500
});

anime({
  targets: '.el-header',
  opacity: ['0%', '100%'],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: 1000
});

// ARTICLE ANIMATIONS

anime({
  targets: '.half',
  opacity: ['0%', '100%'],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: 200
});

anime({
  targets: '.small-grid',
  opacity: ['0%', '100%'],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: 1200
});
