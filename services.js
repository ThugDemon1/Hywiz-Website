// ********************** Service Pages ******************* //
// ****** Headline Section ******** //
function setupCanvas(canvasId, dotSize = 5) {
	const canvas = document.getElementById(canvasId);
	const ctx = canvas.getContext("2d");
    
	function resizeCanvas() {
	    canvas.width = canvas.offsetWidth;
	    canvas.height = canvas.offsetHeight;
	}
    
	window.addEventListener("resize", resizeCanvas);
	resizeCanvas();
    
	const dots = [];
	const numDots = 40;
    
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
    
	for (let i = 0; i < numDots; i++) {
	    dots.push({
		   x: Math.random() * canvas.width,
		   y: Math.random() * canvas.height,
		   radius: Math.random() * dotSize + 1,
		   dx: Math.random() * 1 + 0.1,
		   dy: (Math.random() - 0.5) * 1.5,
		   shape: Math.random() > 0.66 ? "pentagon" : (Math.random() > 0.5 ? "circle" : "square"),
		   color: Math.random() > 0.5 ? "#0324ff" : "white"
	    });
	}
    
	function animateDots() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
	    for (let dot of dots) {
		   dot.x += dot.dx;
		   dot.y += dot.dy;
    
		   if (dot.x > canvas.width) dot.x = 0;
		   if (dot.y > canvas.height) dot.y = 0;
    
		   ctx.beginPath();
    
		   if (dot.shape === "circle") {
			  ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
		   } else if (dot.shape === "square") {
			  ctx.rect(dot.x - dot.radius, dot.y - dot.radius, dot.radius * 2, dot.radius * 2);
		   } else if (dot.shape === "pentagon") {
			  drawPentagon(ctx, dot.x, dot.y, dot.radius, dot.color);
			  continue;
		   }
    
		   ctx.fillStyle = dot.color;
		   ctx.fill();
	    }
    
	    requestAnimationFrame(animateDots);
	}
    
	animateDots();
 }
 
 
   
   // Initialize canvas for both sections
   document.addEventListener("DOMContentLoaded", function() {
	setupCanvas("backgroundCanvas1");
   });

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

   ScrollReveal({
	distance: "80px",
	duration: 2100,
	delay: 200,
   });
   
   ScrollReveal().reveal(".section-header", { origin: "top" });
   ScrollReveal().reveal(".flip-card,.video-card,.vision-section ul li,.why-choose-title,.excellence-badge,.why-box,.blog-container,.eta-section,.methods h1,.methods p,.text-content h1,.method-headline,.commerce-content h1,.commerce-content p,.commerce-content h4,.commerce-content ul li,.contact-card h1,.contact-card p,.contact-cards",{ origin: "bottom" });
   ScrollReveal().reveal(".content-section,.img-right,.commerce-img img,.content-left", { origin: "right" });
   ScrollReveal().reveal(".image-section,.progress-bar,.left,.img-left", { origin: "left" });
   
   animation.setSpeed(1.5);

