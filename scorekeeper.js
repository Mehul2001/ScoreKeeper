var btn1 = document.getElementById("p1");
var btn2 = document.getElementById("p2");
var resetbtn = document.querySelector("#reset");
var p1dis = document.querySelector("#p1Display");
var p2dis = document.querySelector("#p2Display");
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

btn1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1dis.classList.add('winning');
            gameOver = true;
        }
        p1dis.textContent = p1Score;
    }
});

btn2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2dis.classList.add('winning');
            gameOver = true;
        }
        p2dis.textContent = p2Score;
    }
});

resetbtn.addEventListener("click", function () {
    reset();

});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1dis.textContent = 0;
    p2dis.textContent = 0;
    p1dis.classList.remove("winning");
    p2dis.classList.remove("winning");
    gameOver = false;
}

input.addEventListener("click", function () {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})