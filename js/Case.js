function Case(x, y, sprite, etat) {
    'use strict';
    this.x = x;
    this.y = y;
    this.occupe = false;
    //Stats:
    this.etat = etat;

    //affichage:
    this.sprite = sprite;
}

Case.prototype.getX = function () {
    'use strict';
    return (this.x + 1) * 64;
};
Case.prototype.getY = function () {
    'use strict';
    return (this.y + 1) * 64;
};
