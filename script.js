document.addEventListener("DOMContentLoaded", () => {
    const tabuleiro = document.getElementById("tabuleiro");
    const cells = document.querySelectorAll(".celula");
    const resetButton = document.getElementById("resetButton");
    const message = document.getElementById("message");

    let jogadorAtual = "X";
    let tabuleiroDoJogo = ["", "", "", "", "", "", "", "", ""];
    let jogoAtivo = true

    function verificarGanhador() {
        const padraoDeVitoria = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]             // Diagonais
        ];
    for (let pattern of padraoDeVitoria) {
        const [a, b, c] = pattern;
        if (tabuleiroDoJogo[a] && tabuleiroDoJogo[a] === tabuleiroDoJogo[b] && tabuleiroDoJogo[a] === tabuleiroDoJogo[c])
        {
            return tabuleiroDoJogo[a];            
        }
        console.log(tabuleiroDoJogo);
    }
    return null;
}
    function verificarEmpate(){
        return !tabuleiroDoJogo.includes("");
    }
    function clique(index){
         if (tabuleiroDoJogo[index] === "" && jogoAtivo) {
            tabuleiroDoJogo[index] = jogadorAtual;
            cells[index].innerText = jogadorAtual;

            const winner = verificarGanhador();
            if (winner) {
                message.innerText = `Jogador ${winner} venceu!`;
            } else if (verificarEmpate()) {
                message.innerText = "Empate!";
            } else {
                jogadorAtual = jogadorAtual === "X" ? "O" : "X";
                message.innerText = `Vez do Jogador ${jogadorAtual}`;
            }
        }
    }
    function resetarJogo(){
        tabuleiroDoJogo = ["", "", "", "", "", "", "", "", ""];
        jogadorAtual = "X";
        message.innerText = "Vez do jogador X";

        cells.forEach(cell => {
            cell.innerText = "";
        });
    }
    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => clique(index));
    });
    resetButton.addEventListener("click", resetarJogo);
});

