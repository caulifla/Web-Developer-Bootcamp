var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var reset = document.querySelector("#reset");
var inputs = document.querySelector("#numinput");
var target = document.querySelector("#target");
var buttons = document.querySelector("#buttons");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var player1 = 0;
var player2 = 0;
var gameOver = false;

inputs.addEventListener("change", function() {
  target.textContent = this.value;
  resetAll();
});

reset.addEventListener("click", function() {
    resetAll();
});

buttons.addEventListener("click", function(event) {
  if (!gameOver) {
    switch (event.target.id) {
      case "b1":
        player1++;
        s1.textContent = player1;
        if (player1 >= target.textContent) {
          gameOver = true;
          s1.classList.add("won");
        }
        break;
      case "b2":
        player2++;
        s2.textContent = player2;
        if (player2 >= target.textContent) {
          gameOver = true;
          s2.classList.add("won");
        }
        break;
    }
  }
});

function resetAll() {
    s1.textContent = s2.textContent = player1 = player2 = 0;
    gameOver = false;
    s1.classList.remove("won");
    s2.classList.remove("won");
}

