const home = document.querySelector(".Home");
const about = document.querySelector(".About");
const help = document.querySelector(".Help");
function selectHome() {
  unselect();
  document.querySelector(".wel-Home").classList.add("active");
  home.style.display = "block";
}
function selectAbout() {
  unselect();
  document.querySelector(".wel-abt").classList.add("active");
  about.style.display = "block";
}
function selectHelp() {
  unselect();
  document.querySelector(".wel-hel").classList.add("active");
  help.style.display = "block";
}
function unselect() {
  document.querySelector(".active").classList.remove("active");
  home.style.display = "none";
  about.style.display = "none";
  help.style.display = "none";
}
