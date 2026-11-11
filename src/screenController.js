const COMPUTER_MOVE_DELAY_MS = 500;

class ScreenController {
	game;

	constructor(game) {
		this.game = game;
		this.squares = document.querySelectorAll('.square');

		this.setPlayerNames(this.game.player1, this.game.player2);
		this.enableBoard();

		const resetButton = document.querySelector('#reset-button');
		resetButton.addEventListener('click', this.playAgain);

		const newGameDialog = document.querySelector('dialog');

		newGameDialog.showModal();
		newGameDialog.addEventListener('submit', this.changePlayerNames);

		const opponentChoice = document.querySelector('#opponent-choice');
		opponentChoice.addEventListener('change', this.togglePlayer2Input);
	}

	isPlayingComputer() {
		return document.querySelector('input[name="opponent"]:checked').value === 'computer';
	}

	togglePlayer2Input = () => {
		document.querySelector('#player2Input').hidden = this.isPlayingComputer();
	}

	changePlayerNames = () => {
		const player1Input = document.querySelector('#player1Input');
		const player2Input = document.querySelector('#player2Input');

		if (player1Input.value)
			this.game.player1.name = player1Input.value;

		if (this.isPlayingComputer()) {
			this.game.player2.name = 'Computer';
			this.game.player2.isComputer = true;
		} else if (player2Input.value) {
			this.game.player2.name = player2Input.value;
		}

		this.setPlayerNames(this.game.player1, this.game.player2);
	}

	playRound = (squareDOM) => {
		const result = this.playMove(Number(squareDOM.target.id));

		if (result === 'continue' && this.game.activePlayer.isComputer)
			this.playComputerTurn();
	}

	playComputerTurn() {
		this.disableBoard();

		this.computerTimeout = setTimeout(() => {
			const result = this.playMove(this.game.chooseComputerMove());

			if (result === 'continue')
				this.enableBoard();
		}, COMPUTER_MOVE_DELAY_MS);
	}

	playMove(position) {
		const activePlayer = this.game.activePlayer;
		const square = this.squares[position];

		this.disableSquare(square);
		square.textContent = activePlayer.symbol;

		activePlayer.addMove(position);
		this.game.board.play(activePlayer.symbol, position);
	
		const result = this.game.checkWin(this.game.board, activePlayer);

		if (result === 'win') {
			this.disableBoard();
			this.announceWinner(activePlayer);
		}

		if (result === 'tie')
			this.announceWinner();

		this.game.nextPlayer();

		return result;
	}

	disableBoard() {
		this.squares.forEach(square => this.disableSquare(square));
	}

	enableBoard() {
		this.squares.forEach(square => {
			if (this.game.board.getPosition(Number(square.id)) === undefined)
				this.enableSquare(square);
		});
	}

	enableSquare(square) {
		square.addEventListener('click', this.playRound);
		square.classList.add('active');
	}

	disableSquare(square) {
		square.removeEventListener('click', this.playRound);
		square.classList.remove('active');
	}

	announceWinner(player) {
		const winnerText = document.querySelector('#winner-text');

		if (player)
			winnerText.innerText = `${player.name} wins!`;
		else if (player === null)
			winnerText.innerText = '';
		else
			winnerText.innerText = 'Game is a tie!';
	}

	clearBoard(squares) {
		this.game.board.clear();
		this.squares.forEach(square => square.innerText = '');
	}

	setPlayerNames(player1,  player2) {
		const player1NamePlaceholder = document.querySelector('#player1-name');
		const player2NamePlaceholder = document.querySelector('#player2-name');

		player1NamePlaceholder.innerText = player1.name;
		player2NamePlaceholder.innerText = player2.name;
	}

	playAgain = () => {
		console.log('reset!');
		clearTimeout(this.computerTimeout);
		this.announceWinner(null);
		this.clearBoard();
		this.enableBoard();
		this.game.activePlayer = this.game.player1;
	}
}

module.exports = ScreenController;

