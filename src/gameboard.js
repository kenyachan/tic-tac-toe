const Gameboard = (() => {
	const board = [];

	function play(symbol, position) {
		if (position < 0 || position > 8)
			throw new Error(`Position not valid: ${position}`);

		if (this.board[position] !== undefined)
			throw new Error(`Position already taken: ${this.board[position]}`);

		this.board[position] = symbol;

		return this.board[position];
	}

	function clear() {
		return this.board.forEach(square => square = undefined);
	}

	return {
		board,
		play,
		clear,
	}
})();

export { Gameboard };
