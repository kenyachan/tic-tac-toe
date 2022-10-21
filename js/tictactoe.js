const Game = (() => {
    const board = ['','','','','','','','',''];

    const squares = document.querySelectorAll('#game-board > div');

    const add = (sign, position) => {
        if (position > 8 || position < 0) 
            return;
        board[position] = sign;
        _render();
    }

    const _render = () => {
        let i = 0;

        squares.forEach((square) => {
            square.textContent = board[i];

            i += 1;
        });
    }

    const reset = () => {
        board.forEach((square) => {
            board[board.indexOf(square)] = '';
        });

        _render();
    }

    return {
        add, reset, board,
    }
})();
