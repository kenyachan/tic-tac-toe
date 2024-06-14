class Board {
	#squares;

	constructor() {
		this.#squares = new Map();
	}

	play(symbol, position) {
		if (position < 0 || position > 8)
			throw new Error(`Positions not valid ${position}`);

		if (this.#squares.get(position) !== undefined)
			throw new Error(`Position already taken: ${this.#squares.get(position)}`);

		return this.#squares.set(position, symbol);
	}

	getSquares() {
		return this.#squares;
	}

	getPosition(position) {
		return this.#squares.get(position);
	}

	clear() {
		return this.#squares.clear();
	}
}

module.exports = Board;

