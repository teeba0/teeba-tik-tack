let players = ["Player1 X", "Player2 O"];
let isGameOver = false
let currentPlayer = 0;
document.getElementById("player").innerHTML = players[currentPlayer];

let ids = [
    ["btn1", "btn2", "btn3"],
    ["btn4", "btn5", "btn6"],
    ["btn7", "btn8", "btn9"]
]

let grid = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let game = document.getElementById("game");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        game.innerHTML += "<button onclick='play("+i+","+j+")' id="+ids[i][j]+">.</button>"
    }
    game.innerHTML += "</br>"
}

function play(i, j) {
    if (grid[i][j] != " " || isGameOver) return;
    if (currentPlayer == 0) grid[i][j] = "X"; else grid[i][j] = "O";
    document.getElementById(ids[i][j]).innerHTML = grid[i][j]
    if (currentPlayer == 0) currentPlayer = 1; else currentPlayer = 0;
    document.getElementById("player").innerHTML = players[currentPlayer];
    check()
}



function check() {
    //Horizontal
    for (let i = 0; i < 3; i++) {
        let goals = [" ", " ", " "]
        let score = 0;
        for (let j = 0; j < 3; j++) {
            goals[j] = grid[i][j]
        }
        goals.forEach(el => {
            if (el == " ") return
            if (el == goals[0]) ++score
        })
        if (score == 3) {
            document.getElementById("score").innerHTML = "Player " + goals[0] + " wins !!";
            isGameOver = true;
        }
    }

    //Vertical
    for (let i = 0; i < 3; i++) {
        let goals = [" ", " ", " "]
        let score = 0;
        for (let j = 0; j < 3; j++) {
            goals[j] = grid[j][i]
        }
        goals.forEach(el => {
            if (el == " ") return
            if (el == goals[0]) ++score
        })
        if (score == 3) {
            document.getElementById("score").innerHTML = "Player " + goals[0] + " wins !!";
            isGameOver = true;
        }
    }

    //Diagonal 1
    if (grid[0][0] != " ") {
        if (grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
            document.getElementById("score").innerHTML = "Player " + grid[0][0] + " wins !!";
            isGameOver = true;
        }
    }

    //Diagonal 2
    if (grid[2][0] != " ") {
        if (grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2]) {
            document.getElementById("score").innerHTML = "Player " + grid[2][0] + " wins !!";
            isGameOver = true;
        }
    }

    //Tie
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] == " ") return
        }
    }
    isGameOver = true;
    document.getElementById("score").innerHTML = "It's a tie";
}
