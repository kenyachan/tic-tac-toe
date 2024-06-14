const Board = require('./board');

describe('Player should not be able to play an invalid position', () => {
	let board;

	beforeEach(() => {
		board = new Board();
	});

	test('play position -1 should throw an error', () => {
		expect(() => board.play('x', -1)).toThrow(Error);
	});

	test('play position > 8 should throw an error', () => {
		expect(() => board.play('x', 9)).toThrow(Error);
	});

	test('play position 0 when it has already been played should throw an error', () => {
		expect(board.play('x', 0)).toBeTruthy();

		expect(() => board.play('o', 0)).toThrow(Error);
	});
});

describe('A valid position should contain the symbol of the player who played that position', () => {
	let board = new Board();

	test('Board position 0 should contain "x"', () => {
		const position = 0;
		const symbol = 'x';

		board.play(symbol, position);

		expect(board.getPosition(position)).toBe(symbol);
	});
});

