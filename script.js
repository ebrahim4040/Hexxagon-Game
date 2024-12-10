
document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    
    // Create a hexagonal board
    const rows = 7;
    const cols = 7;
    const center = Math.floor(rows / 2);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (Math.abs(r - center) + Math.abs(c - center) <= center) {
                const cell = document.createElement("div");
                cell.classList.add("hex-cell");
                cell.dataset.row = r;
                cell.dataset.col = c;
                gameBoard.appendChild(cell);
            }
        }
    }
});
