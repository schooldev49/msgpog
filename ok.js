
         var contextMenu2 = document.getElementById('settingsMenu');
         var er = document.querySelector('.navdrop');
         er.onclick=eq;
         var siopen = false
        var cooldown = false;
        const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName,`animate__faster`);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName,`animate__faster`);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
         function eq(){


          if (siopen == false){
            contextMenu2.style.display = 'block';
            siopen = true
            animateCSS('.context-menu','backInRight').then((message) => {
console.log(message)

            })
          
            
          } else {
            animateCSS('.context-menu','backOutRight').then((message) => {
console.log(message)
        
              contextMenu2.style.display = 'none';
           

              siopen = false
            })
         
          }
        }
tsParticles.load("particles-js", {
    "preset": 'snow',
      "particles": {
          
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#0E6BA8"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#0E6BA8"
        },
        "polygon": {
          "nb_sides": 3
        },
      
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "fpsLimit": 1,
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 300,
          "rotateY": 500
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 5
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "zIndex": -1,
    "z-index": -1,
    "zindex":-1,
    "retina_detect": true
});
