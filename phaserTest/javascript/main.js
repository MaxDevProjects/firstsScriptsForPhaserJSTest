var GAME = new Phaser.Game(500, 500, Phaser.AUTO, 'content');

var MainState = {
    preload: function () {
        //charger les assets
        this.game.load.image('js', 'assets/img/js.png');
    },
    create: function () {
        //initialiser le jeu
        var halfX = this.stage.width/2
        var halfY = this.stage.height/2
        this.logo = this.game.add.sprite(0, 0, 'js');
        this.logo.anchor.setTo(0.5, 0.5);
        this.logo.angle = Math.floor(Math.random() * 90);
        this.logo.x = 300;
        this.logo.y = 300;
        this.logo.vx = Math.floor(Math.random() * 10);
        this.logo.vy = Math.floor(Math.random() * 10);
        console.log(this.logo.angle);
    },
    update: function () {
        //notre jeu toutes les 60fps
        this.logo.angle += 0.5;
        this.logo.oldX = this.logo.x;
        this.logo.oldY = this.logo.y;
        while (this.logo.vx === 0 && this.logo.vy === 0) {
            this.logo.vx = Math.floor(Math.random() * 10);
            this.logo.vy = Math.floor(Math.random() * 10);
        }
        //this.logo.x += 2;
        if (this.logo.x >= 500) {
            this.logo.x = this.logo.oldX;
            this.logo.vx = Math.floor(Math.random() * 10);
            this.logo.vy = Math.floor(Math.random() * 10);
            this.logo.vx = -this.logo.vx;         
        }
        if (this.logo.x <= 0) {
            this.logo.x = this.logo.oldX;
            this.logo.vx = Math.floor(Math.random() * 10);
            this.logo.vy = Math.floor(Math.random() * 10);
            this.logo.vx = +this.logo.vx;
        }
        if (this.logo.y <= 0) {
            this.logo.y = this.logo.oldY;
            this.logo.vx = Math.floor(Math.random() * 10);
            this.logo.vy = Math.floor(Math.random() * 10);
            this.logo.vy = +this.logo.vy; 
        }
        if (this.logo.y >= 500) {
            this.logo.y = this.logo.oldY;
            this.logo.vx = Math.floor(Math.random() * 10);
            this.logo.vy = Math.floor(Math.random() * 10);
            this.logo.vy = -this.logo.vy; 
        }

        this.logo.x += this.logo.vx *0.9;
        this.logo.y += this.logo.vy * 0.9;
        console.log("vx: " + this.logo.vx + " vy: " + this.logo.vy)
    }
};

//const GAME = new Phaser.Game(1000,600, Phaser.AUTO, 'content')
GAME.state.add('MainState', MainState);
GAME.state.start('MainState');