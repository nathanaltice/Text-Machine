class PhysicsText extends Phaser.Scene {
    constructor() {
        super({key: 'physicstextScene'})

        this.TEXT_VEL = 300
    }

    create() {
        this.exampleText = this.add.text(centerX, centerY, 'Physics Text', {
            fontFamily: 'Verdana',
            fontSize: '48px',
            color: 'white'
        }).setOrigin(0.5)

        // give text an Arcade physics body
        this.physics.add.existing(this.exampleText, false)  // .existing(gameObject, isStatic?)
        this.exampleText.body.setCollideWorldBounds(true)

        // input control
        this.cursors = this.input.keyboard.createCursorKeys()

        // info text
        document.getElementById('info').innerHTML = '<strong>PhysicsText.js</strong>: Cursors move text'

        // to-do: have text change according to a timer
    }

    update() {
        let textDirection = new Phaser.Math.Vector2(0)
        if (this.cursors.left.isDown) {
            textDirection.x = -1
        } else if (this.cursors.right.isDown) {
            textDirection.x = 1
        } 
        if (this.cursors.up.isDown) {
            textDirection.y = -1
        } else if (this.cursors.down.isDown) {
            textDirection.y = 1
        }
        textDirection.normalize()
        this.exampleText.body.setVelocity(this.TEXT_VEL * textDirection.x, this.TEXT_VEL * textDirection.y)
    }
}