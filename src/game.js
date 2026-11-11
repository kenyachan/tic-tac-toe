const WINNING_COMBOS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
];

class Game {
	board;

	constructor(board, players) {
		this.board = board;

		if (players instanceof Array)
			this.players = players;
		else
			throw new Error(`${players} is not an Array`);

		players[0].active = true;
	}
	
	get activePlayer() {
		if (this.players[1].active)
			return this.players[1];

		return this.players[0];
	};

	get board() {
		return this.board;
	}

	checkWin(board, player) {
		const WIN = 'win';
		const TIE = 'tie';
		const CONTINUE = 'continue';

		const result = WINNING_COMBOS.some(combo => 
			combo.every(position => 
				board.getPosition(position) === player.symbol
			)
		);

		if (result)
			return WIN;

		if (board.getSquares().size === 9)
			return TIE;

		return CONTINUE;
	}

	// Takes a winning square if there is one, otherwise blocks the opponent's
	// winning square, otherwise picks an open square at random.
	chooseComputerMove() {
		const computer = this.activePlayer;
		const opponent = computer === this.player1 ? this.player2 : this.player1;

		const openPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(position =>
			this.board.getPosition(position) === undefined
		);

		const completesLine = (symbol) => openPositions.find(position =>
			WINNING_COMBOS.some(combo =>
				combo.includes(position) &&
				combo.every(square =>
					square === position || this.board.getPosition(square) === symbol
				)
			)
		);

		return completesLine(computer.symbol) ??
			completesLine(opponent.symbol) ??
			openPositions[Math.floor(Math.random() * openPositions.length)];
	}

	nextPlayer() {
		if (this.players[0].active) {
			this.players[1].active = true;
			this.players[0].active = false;
		} else {
			this.players[1].active = false;
			this.players[0].active = true;
		}
	}

	playRound(position) {
		this.board.play(this.activePlayer.symbol, position);

		const result = this.checkWin(this.board, this.activePlayer.symbol);

		if (result) return this.activePlayer;

		this.activePlayer = 
			this.activePlayer === this.players[0] ?
			this.players[1] : 
			this.players[0];

		return null;
	}

	set activePlayer(player) {
		this.players.forEach(p => {
			if (p === player)
				p.active = true;
			else 
				p.active = false;
		});
	}

	get player1() {
		return this.players[0];
	}

	get player2() {
		return this.players[1];
	}
}

module.exports = Game;
