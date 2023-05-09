class Basic extends Phaser.Scene {
    constructor() {
        super({ key: 'basicScene' })
    }

    create() {
        let poohText = [ 
            `The Piglet lived in a very grand house in the middle of a beech-tree, and the beech-tree was in the middle of the forest, and the Piglet lived in the middle of the house. Next to his house was a piece of broken board which had: "TRESPASSERS W" on it. When Christopher Robin asked the Piglet what it meant, he said it was his grandfather's name, and had been in the family for a long time, Christopher Robin said you couldn\'t be called Trespassers W, and Piglet said yes, you could, because his grandfather was, and it was short for Trespassers Will, which was short for Trespassers William. And his grandfather had had two names in case he lost one—Trespassers after an uncle, and William after Trespassers.\n`,
            `"I've got two names," said Christopher Robin carelessly.\n`,
            `"Well, there you are, that proves it," said Piglet.` ]

        const defaultStyle = {}

        const style1 = {
            fontSize: '28px',
            fontFamily: 'Garamond',
            color: 'yellow',
            wordWrap: {
                width: width
            }
        }

        const style2 = {
            fontSize: '18px',
            fontFamily: 'Caslon',
            color: '#FFFFFF',
            wordWrap: {
                width: width
            },
            padding: {
                top: 100
            },
            lineSpacing: 9
        }

        const style3 = {
            fontSize: '18px',
            fontFamily: 'Helvetica',
            color: '#FFFFFF',
            align: 'center',
            backgroundColor: '#FACADE',
            wordWrap: {
                width: width/2
            },
            padding: 36
        }

        const style4 = {
            fontSize: '20px',
            fontFamily: 'Avenir',
            color: 'white',
            strokeThickness: 5,
            stroke: 'green',
            wordWrap: {
                width: 600
            }
        }

        // add a text object to the screen (x, y, text, config object)
        // replace the config object variable each define above to see formatting differences
        this.add.text(0, 0, poohText, style4)

        document.getElementById('info').innerHTML = '<strong>Basic.js:</strong> Basic text formatting'
    }
}