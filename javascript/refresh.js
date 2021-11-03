function refresh() {
  if (!document.getElementById("game-window")) return false;
  document.getElementById("game-window").setAttribute("data", "http://www.new-ideaa.gq/pictures/object-main.png");
}

window.addEventListener ? 
window.addEventListener("load",refresh,false) : 
window.attachEvent && window.attachEvent("onload",refresh());
