  const hamburger = document.getElementById("hamburger")
  const navbar = document.getElementById("navbar")
  hamburger.addEventListener("click", toggleMenu)

  function toggleMenu() {
   navbar.classList.toggle("hidden") 
  }

