const Game = require('./game');

const Board = jest.createMockFromModule('./board');
const Player = jest.mock('./player');
jest.mock('./player');

const player1 = { name: 'player1', symbol: 'x' };
const player2 = { name: 'player2', symbol: 'o' };
const players = [player1, player2];

describe('checkWin() will return the strings "win", "tie", or "continue" depending on the state of the board', 
	() => {
	const winningCombos = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	const randomNumber = Math.floor(Math.random() * (7 - 0 + 1) + 0);
	const winningCombo = winningCombos[randomNumber];
	let squares = new Map();

	winningCombo.forEach(position => squares.set(position, player1.symbol));

	const board = {
		getPosition(position) {
			return squares.get(position);
		},

		getSquares() {
			return squares;
		}
	};

	const game = new Game(board, players);

	const player1Result = game.checkWin(board, player1);
	const player2Result = game.checkWin(board, player2);

	describe('player with 3 symbols in a row', () => {
		test('should be be "win"', () => {
			expect(player1Result).toBe('win');
		});
	});

	describe('player without 3 symbols in a row', () => {
		test('should be "continue"', () => {
			expect(player2Result).toBe('continue');	
		});
	});

	describe('when board is full and no player has 3 in a row', () => {
		squares = new Map([
			[0, 'x'], [1, 'o'], [2, 'x'],
			[0, 'o'], [1, 'o'], [2, 'x'],
			[0, 'x'], [1, 'x'], [2, 'o']
		]);


	});
});

describe('getActivePlayer()', () => {
	const game = new Game(new Board(), players);

	test('Active player is "Player 1"', () => {
		expect(game.activePlayer.name).toBe(player1.name);
	});
});

