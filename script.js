console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements

let loc = document.getElementById("lo")
let l = document.getElementById("lot")

loc.addEventListener("click", function(event){
  l.textContent = "1300 Boynton Ave (Coming Soon!)"
})

// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence

let s = document.getElementById("sss")
let sc = document.getElementById("ccc")
let sco = document.getElementById("ooo")
let scor = document.getElementById("rrr")
let score = document.getElementById("eee")

s.addEventListener("click", function(event){
  s.textContent = "Self-Awareness"
})

sc.addEventListener("click", function(event){
  sc.textContent = "Consistency"
})

sco.addEventListener("click", function(event){
  sco.textContent = "Ownership"
})

scor.addEventListener("click", function(event){
  scor.textContent = "Resilience"
})

score.addEventListener("click", function(event){
  score.textContent = "Excellence"
})





// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp

let sw = document.getElementById("fr")
let back = document.getElementById("ba")


sw.addEventListener("mouseover", function(event){
  sw.src = "joggers-front.webp"
})
sw.addEventListener("mouseout", function(event){
  sw.src = "joggers-back.webp"
})

back.addEventListener("mouseover", function(event){
  back.src = "sweater-front.webp"
})
back.addEventListener("mouseout", function(event){
  back.src = "sweater-back.webp"
})

// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)

s.addEventListener("mouseover", function(event){
  s.style.color = "#3ab54b";
})
sc.addEventListener("mouseover", function(event){
  sc.style.color = "#3ab54b";

})
sco.addEventListener("mouseover", function(event){
  sco.style.color = "#3ab54b";

})
scor.addEventListener("mouseover", function(event){
  scor.style.color = "#3ab54b";

})
score.addEventListener("mouseover", function(event){
  score.style.color = "#3ab54b";
})

s.addEventListener("mouseout", function(event){
  s.style.color = "black";
})
sc.addEventListener("mouseout", function(event){
  sc.style.color = "black";

})
sco.addEventListener("mouseout", function(event){
  sco.style.color = "black";

})
scor.addEventListener("mouseout", function(event){
  scor.style.color = "black";

})
score.addEventListener("mouseout", function(event){
  score.style.color = "black";
})



