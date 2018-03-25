var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', 'bg.png');
}

function create() {
    this.image = this.add.image(0, 0, 'bg');
}

function update() {
}