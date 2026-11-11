import Game from './game';
import Player from './player';
import { Board } from './board';

function setupGame(moves) {
	const human = new Player('Human', 'x');
	const computer = new Player('Computer', 'o');
	const board = new Board();
	const game = new Game(board, [human, computer]);

	Object.entries(moves).forEach(([position, symbol]) => {
		board.play(symbol, Number(position));
	});

	game.activePlayer = computer;

	return { game, board, human, computer };
}

describe('chooseComputerMove()', () => {
	test('takes a winning square', () => {
		const { game } = setupGame({ 0: 'o', 1: 'o', 3: 'x', 4: 'x', 8: 'x' });

		expect(game.chooseComputerMove()).toBe(2);
	});

	test('takes the winning square when it is position 0', () => {
		const { game } = setupGame({ 1: 'o', 2: 'o', 3: 'x', 4: 'x' });

		expect(game.chooseComputerMove()).toBe(0);
	});

	test('prefers winning over blocking', () => {
		const { game } = setupGame({ 0: 'x', 1: 'x', 6: 'o', 7: 'o' });

		expect(game.chooseComputerMove()).toBe(8);
	});

	test('blocks the opponent when it cannot win', () => {
		const { game } = setupGame({ 0: 'x', 1: 'x', 4: 'o' });

		expect(game.chooseComputerMove()).toBe(2);
	});

	test('blocks the opponent when the block is position 0', () => {
		const { game } = setupGame({ 1: 'x', 2: 'x', 4: 'o' });

		expect(game.chooseComputerMove()).toBe(0);
	});

	test('always picks an open square when there is no win or block', () => {
		const moves = { 0: 'x', 4: 'o' };
		const { game } = setupGame(moves);

		for (let i = 0; i < 100; i++) {
			const move = game.chooseComputerMove();

			expect(move).toBeGreaterThanOrEqual(0);
			expect(move).toBeLessThanOrEqual(8);
			expect(moves[move]).toBeUndefined();
		}
	});
});

describe('checkWin() on a full board', () => {
	test('is a win when the last move completes a line', () => {
		const { game, board, human } = setupGame({
			0: 'x', 1: 'x', 3: 'o',
			4: 'o', 5: 'x', 6: 'o',
			7: 'x', 8: 'o',
		});

		board.play('x', 2);

		expect(game.checkWin(board, human)).toBe('win');
	});

	test('is a tie when no line is completed', () => {
		const { game, board, human } = setupGame({
			0: 'x', 1: 'o', 2: 'x',
			3: 'x', 4: 'o', 5: 'o',
			6: 'o', 7: 'x', 8: 'x',
		});

		expect(game.checkWin(board, human)).toBe('tie');
	});
});
