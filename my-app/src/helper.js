export function calculateWinner(cells){
    const winningLines = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6] // diagonals
    ];
    for (let i = 0; i < winningLines.length; i++){
        const [a,b,c] = winningLines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            return cells[a];
        }
    }
    return null;
}