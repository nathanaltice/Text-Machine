class Basic extends Phaser.Scene {
    constructor() {
        super({ key: 'basicScene' })
    }

    create() {
        // enable graphics to draw text bounds
        this.graphics = this.add.graphics()

        // 🍯🧸
        let poohText = [ 
            `The Piglet lived in a very grand house in the middle of a beech-tree, and the beech-tree was in the middle of the forest, and the Piglet lived in the middle of the house. Next to his house was a piece of broken board which had: "TRESPASSERS W" on it. When Christopher Robin asked the Piglet what it meant, he said it was his grandfather's name, and had been in the family for a long time, Christopher Robin said you couldn\'t be called Trespassers W, and Piglet said yes, you could, because his grandfather was, and it was short for Trespassers Will, which was short for Trespassers William. And his grandfather had had two names in case he lost one—Trespassers after an uncle, and William after Trespassers.\n`,
            `"I've got two names," said Christopher Robin carelessly.\n`,
            `"Well, there you are, that proves it," said Piglet.` ]

        const style0 = {}

        const style1 = {
            fontSize: '28px',
            fontFamily: 'Garamond',
            backgroundColor: '#000000',
            color: 'yellow',
            wordWrap: {
                width: 700
            },
            align: 'left'
        }

        const style2 = {
            fontSize: '18px',
            fontFamily: 'Caslon',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            wordWrap: {
                width: 700
            },
            lineSpacing: 9
        }

        const style3 = {
            fontSize: '12px',
            fontFamily: 'Helvetica',
            backgroundColor: '#FFFFFF',
            color: '#333333',
            align: 'center',
            wordWrap: {
                width: 400 
            },
            lineSpacing: 18
        }

        const style4 = {
            fontSize: '20px',
            fontFamily: 'Avenir',
            backgroundColor: 'black',
            color: 'white',
            strokeThickness: 5,
            stroke: 'green',
            align: 'left',
            wordWrap: {
                width: 600
            }
        }

        const style5 = {
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',   // font stack
            align: 'right',
            backgroundColor: 'brown',
            color: '#EEEEEE',
            strokeThickness: 0,
            wordWrap: {
                width: 600
            }
        }

        // add a text object to the screen (x, y, text, config object)
        // replace the config object variable each define above to see formatting differences
        this.styleList = [ style0, style1, style2, style3, style4, style5, ]
        this.paddingList = [ {}, {x:0,y:0}, {y:100}, 36, {x: 36, y: 0}, {top: 12, bottom: 48, left: 0, right: 128}]
        this.styleIndex = 0
        this.sampleText = this.add.text(50, 50, poohText, this.styleList[this.styleIndex])
        this.sampleText.setPadding(this.paddingList[this.styleIndex])

        // keyboard
        sceneSwitchKey = this.input.keyboard.addKey('S')
        sceneResetKey = this.input.keyboard.addKey('R')
        this.styleSwitchKey = this.input.keyboard.addKey('SPACE')

        // info text
        document.getElementById('info').innerHTML = `SPACE: Change style | S: Switch scene | R: Restart scene`
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(sceneSwitchKey)) {
            this.scene.start('physicstextScene')
        }

        if(Phaser.Input.Keyboard.JustDown(sceneResetKey)) {
            this.scene.restart()
        }

        // note that looping through styles will carry over properties that aren't redefined
        if(Phaser.Input.Keyboard.JustDown(this.styleSwitchKey)) {
            this.styleIndex++
            if(this.styleIndex > this.styleList.length - 1) { this.styleIndex = 0 }
            this.sampleText.setStyle(this.styleList[this.styleIndex])
            this.sampleText.setPadding(this.paddingList[this.styleIndex])
        }

        // outline text bounds
        this.graphics.clear()
        this.graphics.lineStyle(3, 0x00FF00, 1)
        this.graphics.strokeRectShape(this.sampleText)
    }
}