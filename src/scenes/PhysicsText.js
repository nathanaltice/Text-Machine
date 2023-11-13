class PhysicsText extends Phaser.Scene {
    constructor() {
        super({key: 'physicstextScene'})

        this.TEXT_VEL = 300
    }

    create() {
        this.physics.world.gravity.y = 100

        // define example text
        this.exampleText = this.add.text(centerX, centerY, 'Poetry', {
            fontFamily: 'Verdana',
            fontSize: '48px',
            color: 'white'
        }).setOrigin(0.5)

        // give text an Arcade physics body
        this.physics.add.existing(this.exampleText, false)  // .existing(gameObject, isStatic?)
        this.exampleText.body.setCollideWorldBounds(true)

        // add group to spawn letters into
        this.alphaBits = this.add.group()

        // input control
        sceneSwitchKey = this.input.keyboard.addKey('S')
        sceneResetKey = this.input.keyboard.addKey('R')
        this.leftRotationKey = this.input.keyboard.addKey('Q')
        this.rightRotationKey = this.input.keyboard.addKey('E')
        this.cursors = this.input.keyboard.createCursorKeys()

        // info text
        document.getElementById('info').innerHTML = `Cursors: move center text | Q: rotate left | E: rotate right | SPACE: 🌧️ | S: Switch scene`

        this.physics.add.collider(this.alphaBits)
        this.physics.add.collider(this.exampleText, this.alphaBits)
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(sceneSwitchKey)) {
            this.scene.start('bitmaptextexampleScene')
        }

        if(Phaser.Input.Keyboard.JustDown(sceneResetKey)) {
            this.scene.restart()
        }

        // text movement
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
        
        // text angular rotation
        if(Phaser.Input.Keyboard.JustDown(this.leftRotationKey)) {
            this.exampleText.body.setAngularVelocity(Phaser.Math.Between(-500, -50))
        }
        if(Phaser.Input.Keyboard.JustDown(this.rightRotationKey)) {
            this.exampleText.body.setAngularVelocity(Phaser.Math.Between(50, 500))
        }

        // text rain
        if(this.cursors.space.isDown) {
            this.textRain()
        }
    }

    textRain() {
        let spawnPositionX = Math.random() * width
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        //let alphabet = 'あえいうおはへひふほかけきくこまめみむもられりるろたてちつと'
        let character = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        let alphaBit = this.add.text(spawnPositionX, 0, character, {
            fontFamily: 'Verdana',
            fontSize: '24px'
        }).setOrigin(0.5)
        this.physics.add.existing(alphaBit, false)
        alphaBit.body.setCollideWorldBounds(true)
        alphaBit.body.setBounce(1)
        alphaBit.body.setCircle(10)
        alphaBit.body.setAngularVelocity(Phaser.Math.Between(-10, 10))

        // add character to group
        this.alphaBits.add(alphaBit)
    }
}