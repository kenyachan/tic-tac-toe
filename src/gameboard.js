(function Gameboard () {
	const board = [];

	function play(symbol, position) {
		if (position < 0 || position > 8)
			throw new Error(`Position not valid: ${position}`);

		if (board[position] !== undefined)
			throw new Error(`Position already taken: ${board[position]}`);

		board[position] = symbol;

		return board[position];
	}

	return {
		play,

	}
})();
