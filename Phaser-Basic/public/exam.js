class exam extends Phaser.Scene{
    constructor(){
        super({key:'exam'});
    }
    preload(){
        this.load.image('bg','bg.png');
    }
    create(){
        this.image = this.add.image(0,0,'bg');
    }
}