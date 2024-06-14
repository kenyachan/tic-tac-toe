import './style.css';
import './board.css';

import ScreenController from './screenController.js';
import Board from './board.js';
import Player from './player.js';
import Game from './game.js';

const player1 = new Player('Player 1', 'x');
const player2 = new Player('Player 2', 'o');
const board = new Board();
const game = new Game(board, [player1, player2]);

const screenController = new ScreenController(game);

/*
 * Create all your game objects here, i.e. board, players, game, etc.
 *
 * Pass these objects to the screen controller.
 */
