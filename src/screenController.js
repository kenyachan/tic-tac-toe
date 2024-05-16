import { Gameboard } from './gameboard.js';

const ScreenController = (() => {
	const gameboardDOM = document.querySelector('#gameboard'); 
	const squares = document.querySelectorAll('.square');
	let activePlayer = {
		symbol: 'x',
	};

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
		// nextPlayer();
	}

	return {

	}
})();

export { ScreenController };
