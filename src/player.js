class Player {
	#moves = [];
	active = false;

	constructor(name, symbol) {
		this.name = name;
		this.symbol = symbol;
	}

	addMove(move) {
		return this.#moves.push(move);
	}

	get moves() {
		return this.#moves;
	}
}

module.exports = Player;
