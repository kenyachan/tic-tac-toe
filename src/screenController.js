import { Gameboard } from './gameboard.js';

const ScreenController = (() => {
	const gameboardDOM = document.querySelector('#gameboard'); 
	const squares = document.querySelectorAll('.square');
	let players = [
		{
			player: "player1",
			symbol: 'x',
		},
		{
			player: "player2",
			symbol: 'o',
		}
	];

	let activePlayer = players[0];

	//squares.forEach(square => square.addEventListener('click', () => console.log('hehehe... that tickles')));

	squares.forEach(square => {
		//square.addEventListener('click', event => playRound(event.target));
		square.addEventListener('click', playRound);
	});
	
	function playRound(squareDOM) {
		squareDOM.target.removeEventListener('click', playRound);
		squareDOM.target.textContent = activePlayer.symbol;

		Gameboard.play(activePlayer.symbol, squareDOM.target.id);

		console.log(Gameboard.board);
		nextPlayer();
	}

	function nextPlayer() {
		return activePlayer == players[0] ? 
			activePlayer = players[1] :
			activePlayer = players[0];
	}

	return {

	}
})();

export { ScreenController };
