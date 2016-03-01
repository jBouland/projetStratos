
/*global states*/
function Character(hp, sprite, posX, posY, speed) {
    'use strict';
    //Stats:
    this.hp = hp;
    this.speed = speed;

    //affichage:
    this.sprite = sprite;
    this.posX = posX;
    this.posY = posY;
    this.state = states.IDLE;
    this.sprite.inputEnabled = true;
  //  this.sprite.events.onInputDown.add(charSelect, this);
}

Character.prototype.castBatiment = function (typeBatiment) {
    'use strict';
};

function theEnd () {
    'use strict';
    this.state = states.IDLE;
};

Character.prototype.movement = function (direction, tw) {
    'use strict';
    console.log(this.posY + ";" + this.posX + " et " + map.col1 + ";" + map.col2);

    if (this.state === states.IDLE){
        if (direction == directions.LEFT && this.posX > 0){
         this.state = states.MOVING;
            tw = game.add.tween(this.sprite).to({x: map.tab[this.posX -1][this.posY].getX(), y: map.tab[this.posX-1][this.posY].getY() }, this.speed, Phaser.Easing.Linear.None, true, 0, false);
            this.posX = this.posX - 1;
            tw.onComplete.addOnce(theEnd, this);
        }else if(direction == directions.RIGHT && this.posX < map.col2 -1){
            this.state = states.MOVING;
            tw = game.add.tween(this.sprite).to({x: map.tab[this.posX+1][this.posY].getX(), y: map.tab[this.posX+1][this.posY].getY() }, this.speed, Phaser.Easing.Linear.None, true, 0, false);
            this.posX = this.posX + 1;
            tw.onComplete.addOnce(theEnd, this);
        }else if (direction == directions.UP && this.posY >0){
            this.state = states.MOVING;
            tw = game.add.tween(this.sprite).to({x: map.tab[this.posX][this.posY-1].getX(), y: map.tab[this.posX][this.posY-1].getY() }, this.speed, Phaser.Easing.Linear.None, true, 0, false);
            this.posY = this.posY - 1;
            tw.onComplete.addOnce(theEnd, this);
            console.log(map.tab[this.posX][this.posY].getY() + ";" + map.tab[this.posX][this.posY].getX())
        }else if (direction == directions.DOWN && this.posY < map.col1-1){
            this.state = states.MOVING;
            tw = game.add.tween(this.sprite).to({x: map.tab[this.posX][this.posY+1].getX(), y: map.tab[this.posX][this.posY+1].getY() }, this.speed, Phaser.Easing.Linear.None, true, 0, false);
            this.posY = this.posY +1;
            tw.onComplete.addOnce(theEnd, this);
        }

    }
};
