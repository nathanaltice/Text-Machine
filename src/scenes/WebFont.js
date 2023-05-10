class WebFont extends Phaser.Scene {
    constructor() {
        super({key: 'webfontScene'})
    }

    create() {
        // ⛔️ IMPORTANT ⛔️
        // Most of the setup for this example is done in Load.js
        // None of these fonts will work unless they are loaded from Google via the Web Font Loader script

        // add the text
        this.add.text(0, 0, 'This text should be set in Caveat (not Papyrus).', {
            fontFamily: 'Caveat, Papyrus',  // adding Papyrus in our font stack will show us if the font didn't load
            fontSize: '48px',
            color: 'yellow'
        })

        this.add.text(0, 64, 'This text should be set in Foldit.', {
            fontFamily: 'Foldit, Papyrus',
            fontSize: '48px'
        })

        this.add.text(0, 128, 'This text should be set in Bruno Ace.', {
            fontFamily: 'Bruno Ace, Papyrus',
            fontSize: '24px',
            color: '#42F5DA'
        })

        this.add.text(0, 192, 'This text should be set in Rubik Pixels.', {
            fontFamily: 'Rubik Pixels, Papyrus',
            fontSize: '36px',
            color: '#ebc986'
        })

        // keyboard
        sceneSwitchKey = this.input.keyboard.addKey('S')
        sceneResetKey = this.input.keyboard.addKey('R')

        // info text
        document.getElementById('info').innerHTML = `S: Switch scene | R: Restart scene`
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(sceneSwitchKey)) {
            this.scene.start('basicScene')
        }

        if(Phaser.Input.Keyboard.JustDown(sceneResetKey)) {
            this.scene.restart()
        }
    }
}