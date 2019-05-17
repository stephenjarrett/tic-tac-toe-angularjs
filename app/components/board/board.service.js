export class BoardService {
    constructor() {}

    isWinner(squareArray) {
        let winningMove = false;
        const winningArrays = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winningArrays.forEach(array => {
            if (
                squareArray[array[0]] && // checks to make sure they aren't all blanks
                // check for winning match
                squareArray[array[0]] === squareArray[array[1]] &&
                squareArray[array[1]] === squareArray[array[2]]
            ) {
                winningMove = true;
            }
        });
        return winningMove;
    }
}

angular.module('app').service('boardService', BoardService);
