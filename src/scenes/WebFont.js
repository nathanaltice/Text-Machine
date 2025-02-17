class WebFont extends Phaser.Scene {
    constructor() {
        super({ key: 'webfontScene' })
    }

    create() {
        // Note that these fonts are loaded in the Load.js scene

        // add the text
        this.add.text(0, 0, 'This text should be set in Caveat (not Papyrus).', {
            fontFamily: 'Caveat, Papyrus',  // adding Papyrus in our font stack will show us if the font didn't load
            fontSize: '32px',
            color: 'yellow'
        })

        this.add.text(0, 64, 'This text should be set in Foldit.', {
            fontFamily: 'Foldit, Papyrus',
            fontSize: '48px'
        })

        this.add.text(0, 128, 'This text should be set in Tangerine.', {
            fontFamily: 'Tangerine-Regular, Papyrus',
            fontSize: '52px',
            color: '#42F5DA'
        })

        this.add.text(0, 192, 'This text should be set in Rubik Pixels.', {
            fontFamily: 'Rubik, Papyrus',
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