const Player = (name, sign) => {
    const moves = [];
    
    const _name = name;
    const _sign = sign;
    
    const getName = () => {
        return _name;
    }

    const getSign = () => {
        return _sign;
    }

    const addMove = (position) => {
        moves.push(position);
    }

    const getMoves = () => {
        return moves;
    }

    return {
        getName, getSign, addMove, getMoves,
    }

};

const Board = (squares) => {
    const board = ['','','','','','','','',''];
    const _squares = squares;

    const add = (sign, position) => {
        if (position < 0 || position > 8) return;
        if (board[position] !== '') return;
        
        board[position] = sign;
        _render();
    }

    const _render = () => {
        _squares.forEach((square) => {
            square.textContent = board[square.dataset.index];
        });
    }

    const reset = () => {
        _squares.forEach((square) => {
            square.disabled = false;
            board[square.dataset.index] = '';
        });

        // activePlayer = player1;

        _render();
    }

    const getBoard = () => {
        return board;
    }

    return {
        add, reset, getBoard,
    };
};


const Game = (() => {
    const squares = document.querySelectorAll('#game .square');  
    const resetButton = document.querySelector('#game #reset-button');
    
    const board = Board(squares);
    const winningCombos = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];
    
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    let activePlayer = player1;


    // resetButton.addEventListener('click', () => board.reset());
    

    const _toggleActivePlayer = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    const checkWinner = () => {
        let activePlayerMoves = activePlayer.getMoves();
        let win = null;
        
        if (activePlayerMoves.length < 3) 
            return null;

        win = !winningCombos.every(combo => {
            let containsWinningCombo = !combo.every(value => activePlayerMoves.includes(value));

            if (containsWinningCombo === true)
                return true;
        });

        if (win === true) 
            return activePlayer;

        return null;
    }

    // game logic/flow
    squares.forEach((square) => {
        square.addEventListener('click', (event) => {
            activePlayer.addMove(event.target.dataset.index);
            board.add(activePlayer.getSign(), event.target.dataset.index);
            event.target.disabled = true;
            
            let winner = checkWinner();

            if (winner !== null) {
                console.log (winner.getName());
            } else {
                _toggleActivePlayer();
            }

        })
    });

})();

