class Load extends Phaser.Scene {
    constructor() {
        super({key: 'loadScene'})
    }

    preload() {
        this.load.font('Caveat', '/assets/fonts/Caveat-VariableFont_wght.ttf', 'truetype')
        this.load.font('Foldit', '/assets/fonts/Foldit-VariableFont_wght.ttf', 'truetype')
        this.load.font('Rubik', '/assets/fonts/RubikPixels-Regular.ttf', 'truetype')
        this.load.font('Tangerine-Regular', '/assets/fonts/Tangerine-Regular.ttf', 'truetype')
    }

    create() {
        this.scene.start('basicScene')
    }
}