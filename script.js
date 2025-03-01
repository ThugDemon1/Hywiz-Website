// navbar fixed position
let lastScrollTop = 0; // Track last scroll position

window.onscroll = () => {
    // Select elements
    const topBar = document.querySelector(".top-bar");
    const navbar = document.querySelector(".navbar");

    // Add or remove class for the navbar based on scroll
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

    // Handle scrolling direction
    if (window.scrollY > lastScrollTop + 10) {
        // Scrolling down
        if (window.scrollY > 50) {
            topBar.style.top = "-50px"; // Hide top bar
            navbar.style.position = "fixed"; // Keep navbar fixed
            navbar.style.top = "0";
        }
    } else if (window.scrollY < lastScrollTop - 10) {
        // Scrolling up
        if (window.scrollY > 50) {
            topBar.style.top = "-50px"; // Keep top bar hidden
            navbar.style.position = "fixed"; // Ensure navbar is fixed
            navbar.style.top = "0";
        } else {
            topBar.style.top = "0"; // Show top bar when reaching the top
            navbar.style.position = "relative"; // Reset navbar position
        }
    }

    // Update last scroll position
    lastScrollTop = window.scrollY;
};

document.addEventListener("DOMContentLoaded", function() {
  // Select the first icon (with id 'do2')
  const icon2 = document.querySelector("#do2");
  if (icon2) {
    icon2.addEventListener("click", function(event) {
      event.preventDefault();  // Prevent the link from opening when the <i> tag is clicked

      // Toggle the menu for #do2
      let menu = document.querySelector(".menu-dropdown");
      if (menu) {
        if (menu.style.display === "flex") {
          menu.style.display = "none";
        } else {
          menu.style.display = "flex";
        }
      } else {
        console.error("Menu with class 'menu-dropdown' not found.");
      }
    });
  } else {
    console.error("Icon with id 'do2' not found.");
  }

  // Select the second icon (with id 'do3')
  const icon3 = document.querySelector("#do3");
  if (icon3) {
    icon3.addEventListener("click", function(event) {
      event.preventDefault();  // Prevent the link from opening when the <i> tag is clicked

      // Toggle the menu for #do3
      let menuP = document.querySelector(".menu-dropdown-p");
      if (menuP) {
        if (menuP.style.display === "block") {
          menuP.style.display = "none";
        } else {
          menuP.style.display = "block";
        }
      } else {
        console.error("Menu with class 'menu-dropdown-p' not found.");
      }
    });
  } else {
    console.error("Icon with id 'do3' not found.");
  }

  // Select the third icon (with id 'do4')
  const icon4 = document.querySelector("#do4");
  if (icon4) {
    icon4.addEventListener("click", function(event) {
      event.preventDefault();  // Prevent the link from opening when the <i> tag is clicked

      // Toggle the menu for #do4
      let menuC = document.querySelector(".menu-dropdown-c");
      if (menuC) {
        if (menuC.style.display === "block") {
          menuC.style.display = "none";
        } else {
          menuC.style.display = "block";
        }
      } else {
        console.error("Menu with class 'menu-dropdown-c' not found.");
      }
    });
  } else {
    console.error("Icon with id 'do4' not found.");
  }
});

document.getElementsByClassName("menu-icon")[0].addEventListener("click", function() {
  let menu = document.getElementsByClassName("menu-content")[0]; // Select first element
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
});




// JavaScript to switch between Logo and Poster images

document.addEventListener("DOMContentLoaded", function () {
  const logoBtn = document.querySelector(".logo-btn");
  const posterBtn = document.querySelector(".poster-btn");
  const logoImgContainer = document.querySelector(".portfolio-img");
  const posterImgContainer = document.querySelector(".poster-img");

  // Function to set the active button style
  function setActiveButton(button) {
      // Reset styles for both buttons
      logoBtn.style.backgroundColor = "";
      logoBtn.style.color = "";
      posterBtn.style.backgroundColor = "";
      posterBtn.style.color = "";

      // Set active styles for the selected button
      button.style.backgroundColor = "#000";
      button.style.color = "#fff";
  }

  // Function to show logo images and hide poster images
  function showLogoImages() {
      logoImgContainer.classList.add("active");
      posterImgContainer.classList.remove("active");
  }

  // Function to show poster images and hide logo images
  function showPosterImages() {
      logoImgContainer.classList.remove("active");
      posterImgContainer.classList.add("active");
  }

  // Set default state (Logo images visible)
  setActiveButton(logoBtn);
  showLogoImages(); // Show logo images by default

  // Event listener for logo button
  logoBtn.addEventListener("click", function () {
      setActiveButton(logoBtn);
      showLogoImages();
  });

  // Event listener for poster button
  posterBtn.addEventListener("click", function () {
      setActiveButton(posterBtn);
      showPosterImages();
  });
});





// Lottie animation
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json'
});


document.addEventListener("DOMContentLoaded", function () {
  const tracks = [
    { id: "track-1", speed: 1, direction: "left", reverseClone: false },
    { id: "track-2", speed: 1, direction: "right", reverseClone: true },
    { id: "track-3", speed: 1, direction: "left", reverseClone: false },
    { id: "track-4", speed: 1, direction: "right", reverseClone: true },
  ];

  // Function to duplicate images and ensure a seamless chain
  const duplicateImagesForChain = (track, reverse = false) => {
    const images = Array.from(track.children);
    const trackWidth = track.offsetWidth; // Get container width
    let totalWidth = 0;

    // Duplicate images until they fill twice the track's width
    while (totalWidth < trackWidth * 2) {
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        if (reverse) {
          track.insertBefore(clone, track.firstChild); // Add at the beginning for reverse direction
        } else {
          track.appendChild(clone); // Add at the end for normal direction
        }
        totalWidth += img.offsetWidth;
      });
    }

    track.style.whiteSpace = "nowrap"; // Ensure no gaps
  };

  // Function to animate a track
  const animateTrack = (track, speed, direction) => {
    let position = direction === "right" ? -track.scrollWidth / 2 : 0; // Start position for reverse direction

    const animate = () => {
      position += direction === "right" ? speed : -speed;

      // Reset position when out of bounds
      const resetPoint = track.scrollWidth / 2;
      if (direction === "right" && position >= 0) {
        position = -resetPoint;
      } else if (direction === "left" && Math.abs(position) >= resetPoint) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  };

  // Loop through tracks and apply duplication and animation
  tracks.forEach(({ id, speed, direction, reverseClone }) => {
    const track = document.getElementById(id);
    if (track) {
      duplicateImagesForChain(track, reverseClone);
      animateTrack(track, speed, direction);
    }
  });
});

const typed = new Typed(".multiple-text", {
  strings: ["Web Development", "UI/UX Design", "Artificial Intelligence", "Google Ads", "Scaling Businesses"],
  backSpeed: 16,
  typeSpeed: 25,
  backDelay: 1700,
  loop: true,
  showCursor: false,
});
 
//         Background dots of hero section
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match section
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Call once on page load

const dots = [];
const numDots = 35; // Adjust number of dots

// Function to draw a pentagon
function drawPentagon(ctx, x, y, radius, color) {
  const numSides = 5;
  const angle = (2 * Math.PI) / numSides;

  ctx.beginPath();
  for (let i = 0; i < numSides; i++) {
    const xPos = x + radius * Math.cos(i * angle);
    const yPos = y + radius * Math.sin(i * angle);
    ctx.lineTo(xPos, yPos);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

// Create dots with random properties (including pentagon)
for (let i = 0; i < numDots; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    dx: Math.random() * 1 + 0.1, // Left-to-right motion (0.5 to 2 speed)
    dy: (Math.random() - 0.5) * 1.5, // Random vertical motion
    shape: Math.random() > 0.66 ? "pentagon" : (Math.random() > 0.5 ? "circle" : "square"), // Add pentagon option
    color: Math.random() > 0.5 ? "#0324ff" : "black"
  });
}

function animateDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let dot of dots) {
    dot.x += dot.dx; // Move horizontally (left to right)
    dot.y += dot.dy; // Random vertical movement

    if (dot.x > canvas.width) dot.x = 0; // Reset when out of bounds
    if (dot.y > canvas.height) dot.y = 0; // Reset when out of bounds

    ctx.beginPath();

    if (dot.shape === "circle") {
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2); // Draw circle
    } else if (dot.shape === "square") {
      ctx.rect(dot.x - dot.radius, dot.y - dot.radius, dot.radius * 2, dot.radius * 2); // Draw square
    } else if (dot.shape === "pentagon") {
      drawPentagon(ctx, dot.x, dot.y, dot.radius, dot.color); // Draw pentagon
    }

    ctx.fillStyle = dot.color;
    ctx.fill();
  }

  requestAnimationFrame(animateDots);
}

animateDots(); // Start the animation

function playVideo(iframeId, thumbnail) {
  var iframe = document.getElementById(iframeId);

  // Check if iframe is already displayed, to prevent re-triggering
  if (iframe.style.display === "block") return;

  // Hide the thumbnail (and play icon)
  thumbnail.style.display = "none";

  // Update the iframe's src to include autoplay parameter
  if (!iframe.src.includes("autoplay=1")) {
    iframe.src += iframe.src.includes("?") ? "&autoplay=1" : "?autoplay=1";
  }

  // Show the iframe
  iframe.style.display = "block";
}

// moving images
// const image = document.querySelector('.img-right');
// const container = document.querySelector('.image');

// container.addEventListener('mousemove', (e) => {
//     const { offsetX, offsetY } = e;
//     const { clientWidth, clientHeight } = container;

//     // Increase the rotation range for more pronounced effect
//     const moveX = (offsetX / clientWidth) * 50 - 25;  // Horizontal rotation range (-25deg to 25deg)
//     const moveY = (offsetY / clientHeight) * 50 - 25;  // Vertical rotation range (-25deg to 25deg)

//     // Apply rotation effect based on mouse movement
//     image.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
// });

// container.addEventListener('mouseleave', () => {
//     // Optionally, reset the rotation when the mouse leaves the container
//     image.style.transform = 'rotateY(0deg) rotateX(0deg)';
// });





ScrollReveal({
  distance: "80px",
  duration: 2100,
  delay: 200,
});

ScrollReveal().reveal(".section-header", { origin: "top" });
ScrollReveal().reveal(".flip-card,.video-card,.vision-section ul li,.why-choose-title,.excellence-badge,.why-box,.blog-container,.eta-section",{ origin: "bottom" });
ScrollReveal().reveal(".image,.image,.content-section,.img-right", { origin: "right" });
ScrollReveal().reveal(".content,.image-section,.progress-bar,.left", { origin: "left" });

animation.setSpeed(1.5);

function updateActiveClassColor() {
  // Get all elements with the "active" class
  const activeElements = document.querySelectorAll('.active');

  // Loop through each element and set its color to #0324ff
  activeElements.forEach((element) => {
    element.style.color = '#0324ff';
  });

  console.log(`${activeElements.length} elements updated to color #0324ff.`);
}

// Call the function
updateActiveClassColor();



// window.addEventListener('scroll', () => {
//   ScrollReveal().reveal('.image', {
//       duration: 1000,
//       distance: '100px',
//       origin: 'bottom',
//       opacity: 0,
//       easing: 'ease-out',
//       reset: true
//   });
// });