const Gameboard = (() {
	const board = ['o'];

	function play(symbol, position) {
		if (position < 0 || position > 8)
			throw new Error(`Position not valid: ${position}`);

		if (this.board[position] !== undefined)
			throw new Error(`Position already taken: ${this.board[position]}`);

		this.board[position] = symbol;

		return this.board[position];
	}

	return {
		board,
		play,
	}
})();

export Gameboard;
