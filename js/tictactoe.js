const Player = (name, sign) => {
    const _name = name;
    const _sign = sign;
    
    const getName = () => {
        return _name;
    }

    const getSign = () => {
        return _sign;
    }

    return {
        getName, getSign,
    }

};

const Game = (() => {
    const board = ['','','','','','','','',''];
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    let activePlayer = player1;

    const squares = document.querySelectorAll('#game .square');  
    const resetButton = document.querySelector('#game #reset-button');

    const _add = (sign, position) => {
        if (position < 0 || position > 8) return;
        if (board[position] !== '') return;
        
        board[position] = sign;
        _render();
    }

    const _render = () => {
        squares.forEach((square) => {
            square.textContent = board[square.dataset.index];
        });
    }

    const reset = () => {
        squares.forEach((square) => {
            square.disabled = false;
            board[square.dataset.index] = '';
        });

        activePlayer = player1;

        _render();
    }

    const _toggleActivePlayer = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    // consider storing positions in the player object and doing a check using the array method contains all? 
    const checkWinner = () => {
        if ((board[0] !== '') && (board[0] === board[1] && board[0] === board[2])) {
            console.log("Chicken dinner!");

            return activePlayer;
        }
        
        return null;
    }

    // game logic/flow
    squares.forEach((square) => {
        square.addEventListener('click', (event) => {
            _add(activePlayer.getSign(), event.target.dataset.index);
            event.target.disabled = true;
            
            let winner = checkWinner();

            if (winner !== null) {
                console.log (winner.getName());
            } else {
                _toggleActivePlayer();
            }

            _render();
        })
    });

    resetButton.addEventListener('click', reset);

    return {
        reset, board,
    }
})();

