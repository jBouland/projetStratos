/*global Phaser*/
window.NewGame = {

	// reference to the Phaser.Game instance
	game: null,

	// main function
	main: function () {
        'use strict';
		this.game = new Phaser.Game(mt.data.map.viewportWidth, mt.data.map.viewportHeight, Phaser.AUTO, document.body, window.NewGame.state.boot);
	},

	// here we will store all states
	state: {}
};

window.addEventListener('DOMContentLoaded', function () {
    'use strict';
	window.NewGame.main();
}, false);
