const Board = ((squares) => {
    const _board = ['','','','','','','','',''];
    const _squares = squares;

    const play = (sign, position) => {
        if (position < 0 || position > 8) return;
        
        _board[position] = sign;
        disable(position);
        _render();
    }

    const _render = () => {
        _squares.forEach((square) => {
            square.textContent = _board[square.dataset.index];
        });
    }

    const reset = () => {
        _squares.forEach((square) => {
            square.disabled = false;
            _board[square.dataset.index] = '';
        });

        _render();
    }

    const getBoard = () => {
        return _board;
    }

    const enable = (position) => {
        if (position === undefined) {
            _squares.forEach(square => {
                square.disabled = false;
            });

            return true;
        }

        _squares.forEach(square => {
            if (square.dataset.index === position) {
                square.disabled = false;
            }
        });

        return position;
    }

    const disable = (position) => {
        if (position === undefined) {
            _squares.forEach(square => {
                square.disabled = true;
            });

            return true;
        }

        _squares.forEach(square => {
            if (square.dataset.index === position) {
                square.disabled = true;
            }
        });

        return position;
    }

    const isFull = () => {
        let full = _board.every(square => {
            return square !== '';
        })

        return full === true;
    }

    return {
        play, reset, getBoard, disable, enable, isFull,
    };
});

const Player = (name, sign) => {
    const _moves = [];
    const _name = name;
    const _sign = sign;
    
    const getName = () => {
        return _name;
    }

    const getSign = () => {
        return _sign;
    }

    const addMove = (position) => {
        _moves.push(position);
    }

    const getMoves = () => {
        return _moves;
    }

    return {
        getName, getSign, addMove, getMoves,
    }

};

const Modal = (() => {
    const overlay = document.querySelector('.modal-widget .overlay');
    const modalForm = document.querySelector('.modal-widget .modal')
    const newGameButton = document.querySelector('.modal-widget #new-game-form #new-game-button');
    const gameModeSwitch = document.querySelector('.modal-widget .switch-widget #game-mode-switch');
    const player2NameInput = document.querySelector('.modal-widget #playerTwoName');
    const player2NameInputLabel = document.querySelector('.modal-widget #playerTwoLabel')
    

    gameModeSwitch.addEventListener('change', ()=> {
        player2NameInput.classList.toggle('hidden');
        player2NameInputLabel.classList.toggle('hidden');
    });

    newGameButton.addEventListener('click', ()=> {
        toggle();
        newGame();
    });

    const toggle = () => {
        overlay.classList.toggle('active');
        modalForm.classList.toggle('active');
    }

    const newGame = () => {
        TicTacToe.newGame(Player(playerOneName.value, 'X'), Player(playerTwoName.value, 'O'));
    }

    return {
        newGame, toggle,
    }
})();

const TicTacToe = (() => {
    const squares = document.querySelectorAll('#game .square');
    const resetButton = document.querySelector('#game #reset-button');
    const players = document.querySelectorAll('#game .player');
    const outcomeText = document.querySelector('#outcome-text');
    
    const winningCombos = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];
    
    let _player1;
    let _player2;
    let _activePlayer;
    let board;
    

    //
    const newGame = (player1, player2) => {
        _player1 = player1;
        _player2 = player2;
        _activePlayer = _player1;
        board = Board(squares);
        players[0].textContent = `${_player1.getName()}: ${_player1.getSign()}`;
        players[1].textContent = `${_player2.getName()}: ${_player2.getSign()}`;
    }

    //
    const reset = () => {
        board.reset();
        Modal.newGame();

        players[0].classList.add('active');
        players[1].classList.remove('active');

        outcomeText.textContent = '';
        outcomeText.classList.add('hidden');
    }

    const toggleActivePlayer = () => {
        _activePlayer = _activePlayer === _player1 ? _player2 : _player1;

        players.forEach((player) => {
            player.classList.toggle('active');
        });
    }

    const checkWin = (player) => {
        let moves = player.getMoves();

        let winResult = !winningCombos.every(combo => {
            let containsWinningCombo = !combo.every(value => moves.includes(value));

            if (containsWinningCombo === true) return true;
        });

        return winResult;
    }

    const declareOutcome = (player, outcome) => {
        switch(outcome) {
            case 'win':
                outcomeText.textContent = `${player.getName()} wins!`;
                break;
            case 'tie':
                outcomeText.textContent = 'Tie game!';
                break;
        }

        outcomeText.classList.remove('hidden');
    }

    const playRound = (player, position, board) => {
        player.addMove(position);
        board.play(player.getSign(), position);

        if (player.getMoves().length >= 3) {
            let win = checkWin(player);

            if (win === true) {
                board.disable();
                declareOutcome(player, 'win');
                return;
            }

            if (win === false && board.isFull() === true) {
                declareOutcome(player, 'tie');
                return;
            }
        }

        toggleActivePlayer();
    }

    squares.forEach(square => {
        square.addEventListener('click', (event) => playRound(_activePlayer, event.target.dataset.index, board));
    });

    resetButton.addEventListener('click', () => reset());

    return {
        newGame,
    }
})();
