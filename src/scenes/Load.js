class Load extends Phaser.Scene {
    constructor() {
        super({key: 'loadScene'})
    }

    preload() {
        // load our remote Web Font Loader script
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
    }

    create() {
        // maintain scene context
        let currentScene = this

        // load our Google fonts using Web Font Loader
        // see: https://github.com/typekit/webfontloader
        window.WebFont.load({
            google: {
                families: [ 'Caveat', 'Foldit', 'Bruno Ace', 'Rubik Pixels' ]
            },
            // the 'active' event triggers when the fonts have rendered
            active: function() {
                console.log('web fonts rendered 👍')
                currentScene.scene.start('basicScene')
            }
        })
    }
}