class BitmapTextExample extends Phaser.Scene {
    constructor() {
        super({ key: 'bitmaptextexampleScene' })
    }

    preload() {
        this.load.path = './assets/'
        this.load.bitmapFont('midnew', 'fonts/midnewbmp.png', 'fonts/midnewbmp.xml')
    }

    create() {
        this.cameras.main.setBackgroundColor('#EEE')

        // add bitmap text (x, y, font, text, size, align)
        this.add.bitmapText(centerX, centerY, 'midnew', 'GUNDAMMIT!').setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 84, 'midnew', 'Part IV: these mechs\nare mad as hell', 36, 1).setOrigin(0.5)

        // keyboard
        sceneSwitchKey = this.input.keyboard.addKey('S')
        sceneResetKey = this.input.keyboard.addKey('R')

        // info text
        document.getElementById('info').innerHTML = `S: Switch scene | R: Restart scene`
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(sceneSwitchKey)) {
            this.scene.start('webfontScene')
        }

        if(Phaser.Input.Keyboard.JustDown(sceneResetKey)) {
            this.scene.restart()
        }
    }
}