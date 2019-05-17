    'use strict';

    class BoardController {
        // static $inject = ['boardService'];
        value = 'test value';
        xScore = 0;
        yScore = 0;
        drawScore = 0;
        draw = false;
        winner = null;
        squareValues = {
            X: 'X',
            O: 'O',
            Empty: ''
        };
        boardService;
        squareArray = new Array(9).fill('');
        playerTurn = 'X';

        constructor(boardService) {
            this.boardService = boardService;
        }

        $onInit() {
            // this.gameService.logStuff();
        }

        handleClick(value) {
            console.log(value);
        }

        handleSquareClick(index) {
            // cannot make a move if there's a winner or a play in that square already
            if (!this.squareArray[index] && !this.winner && !this.draw) {
                this.squareArray[index] = this.playerTurn;

                if (this.boardService.isWinner(this.squareArray)) {
                    alert(`${this.playerTurn} wins!`);
                    this.winner = true;
                    this.addToWinTotal();
                    return;
                }

                if (this.isDraw()) {
                    alert('Draw!');
                    this.drawScore++;
                    this.draw = true;
                    return;
                }

                if (this.playerTurn === this.squareValues.X) {
                    this.playerTurn = this.squareValues.O;
                } else {
                    this.playerTurn = this.squareValues.X;
                }
            }
        }

        addToWinTotal() {
            if (this.playerTurn === this.squareValues.X) {
                this.xScore++;
            } else {
                this.yScore++;
            }
        }

        isDraw() {
            if (
                this.squareArray.every(
                    value => value !== this.squareValues.Empty
                )
            ) {
                return true;
            }
            return false;
        }

        handleNewRound() {
            this.draw = false;
            this.winner = null;
            this.squareArray.fill(this.squareValues.Empty);
        }

        handleReset() {
            this.playerTurn = this.squareValues.X;
            this.xScore = 0;
            this.yScore = 0;
            this.drawScore = 0;
            this.draw = false;
            this.winner = null;
            this.squareArray.fill(this.squareValues.Empty);
        }
    }

    BoardController.$inject = ['boardService'];
    angular.module('app').component('board', {
        templateUrl: 'components/board/board.component.html',
        controller: BoardController,
        controllerAs: 'vm'
    });

