document.addEventListener('DOMContentLoaded', () =>{
  anime({
    targets: '.animate-header',
    opacity: ['0', '1'],
    scale: [0.85, 1],
    easing: 'easeInOutQuad',
    duration: 300,
    delay: 500
  });

  anime({
    targets: '.feather-chevron-down',
    opacity: ['0', '1'],
    translateY: 16,
    easing: 'easeInOutQuad',
    duration: 500,
    delay: 1000
  });

  // ARTICLE ANIMATIONS

  anime({
    targets: '.opacity',
    opacity: ['0', '1'],
    easing: 'easeInOutQuad',
    duration: 500,
    delay: 500
  });

  // WAYPOINTS

  var waypointOne = new Waypoint({
    element: document.getElementById('article-01'),
    handler: function(direction){
      if(direction == 'down'){
        articleOne.play();
      }
      this.destroy()
    },
    offset: '50%'
  })

  var waypointTwo = new Waypoint({
    element: document.getElementById('article-02'),
    handler: function(direction){
      if(direction == 'down'){
        articleTwo.play();
      }
      this.destroy()
    },
    offset: '50%'
  })

  var waypointThree = new Waypoint({
    element: document.getElementById('article-03'),
    handler: function(direction){
      if(direction == 'down'){
        articleThree.play();
      }
      this.destroy()
    },
    offset: '50%'
  })

  var waypointFour = new Waypoint({
    element: document.getElementById('article-04'),
    handler: function(direction){
      if(direction == 'down'){
        articleFour.play();
      }
      this.destroy()
    },
    offset: '50%'
  })

  var articleOne = anime({
    targets: '.post-url-01',
    opacity: ['0', '1'],
    translateX: ['250px', '0px'],
    easing: 'easeInOutQuad',
    duration: 500,
    autoplay: false
  });

  var articleTwo = anime({
    targets: '.post-url-02',
    opacity: ['0', '1'],
    translateX: ['-250px', '0px'],
    easing: 'easeInOutQuad',
    duration: 500,
    autoplay: false
  });

  var articleThree = anime({
    targets: '.post-url-03',
    opacity: ['0', '1'],
    translateX: ['250px', '0px'],
    easing: 'easeInOutQuad',
    duration: 500,
    autoplay: false
  });

  var articleFour = anime({
    targets: '.post-url-04',
    opacity: ['0', '1'],
    easing: 'easeInOutQuad',
    duration: 500,
    autoplay: false
  });
})

function createTimedLink(element, callback, timeout){
  setTimeout( function(){callback(element);}, timeout);
  return false;
}

function myFunction(element) { 
/* Block of code, with no 'return false'. */
  window.location = element.href;
 }