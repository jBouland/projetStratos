/*global Case, game*/

function Board(col1, col2, typeBoard) {
    'use strict';
    this.tab = [col1];
    this.col1 = col1;
    this.col2 = col2;
    this.typeBoard = typeBoard;
    var i, j = 0;
    for (i = 0; i < col1; i += 1) {
        this.tab[i] = [col2];

        for (j = 0; j < col2; j += 1) {
            this.tab[i][j] = new Case(i, j, game.add.sprite((i + 1) * 64, (j + 1) * 64, 'tile1'), 0);
        }
    }
}
