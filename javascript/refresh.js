function refresh() {
  if (!document.getElementById("game-window")) return false;
  document.getElementById("game-window").setAttribute("data", "http://www.new-ideaa.gq/pictures/object-main.png");
}

window.onload = changeData;
