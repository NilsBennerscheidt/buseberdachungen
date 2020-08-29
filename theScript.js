//this toggles the nav bar
function toggleNav() {
  console.log("HI")
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// window.onscroll = function() {// Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//     console.log("Hi")
//   } else {
//     navbar.classList.remove("sticky");
//     console.log("bye")
//   }
// } 
