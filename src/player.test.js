const Player = require('./player');

const name = 'player';
const symbol = 'x';

describe('A player will have a name and symbol', () => {
	// Arrange
	// Act
	const player = new Player(name, symbol);

	// Assert
	test('Player will have name "player"', () => {
		expect(player.name).toBe(name);
	});

	test('Player will have symbol "x"', () => {
		expect(player.symbol).toBe(symbol);
	});
});

describe('A player will have a history of moves', () => {
	// Arrange
	const player = new Player(name, symbol);
	const firstMove = 1;
	const secondMove = 2;
	const expectedMoveHistory = [firstMove, secondMove];

	// Act
	player.addMove(firstMove);
	player.addMove(secondMove);

	// Assert
	test('Player history will be [1, 2]', () => {
		expect(player.moves).toEqual(expectedMoveHistory);
	});
});
