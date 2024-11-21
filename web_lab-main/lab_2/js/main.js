const OPEN_CLASSNAME = "open";
const CLOSED_CLASSNAME = "closed";
const navLinks = document.getElementById("nav-links");

function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
    navLinks.classList.add(CLOSED_CLASSNAME);
  } else {
    navLinks.classList.remove(CLOSED_CLASSNAME);
    navLinks.classList.add(OPEN_CLASSNAME);
  }
}
