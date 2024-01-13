// Nathan Altice
// Created: 5/8/23
// Updated: 1/13/24
// Text Machine
// An assortment of Phaser 3 text examples including config options, text with physics, web fonts, and bitmap text

'use strict'

let config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
    scene: [ Load, Basic, PhysicsText, WebFont, BitmapTextExample,  ]
}

const game = new Phaser.Game(config)

let { width, height } = game.config
let centerX = width / 2
let centerY = height / 2
let sceneSwitchKey
let sceneResetKey

// Phaser 3 Text examples: https://labs.phaser.io/index.html?dir=game%20objects/text/&q=
// == BASICS ==
// Basic Text: default and styled text - good starter
// Text Key: add default text (not sure why this exists)
// Change Text: .text and .setText to update text on screen
// Emojis: emoji, both standard and unicode sequence
// Right Origin: .setOrigin property
// Text Origin: text rotation around its origin

// == CONFIGURATION ==
// Create From Config: this.make.text with configuration object

// == STYLE ==
// Text With Fallback Font: as described, for web compatibility
// Custom Webfont: injecting CSS, using custom otf fonts, WebFont.load
// Google Webfont: loading/using Google web fonts, WebFont.load

// == FORMATTING ==
// Italic Text: bold/italic text, padding, background color
// Align Text: left/right/center align multi-line text
// Multi Line Text: exactly as described
// Multi Line Text With Alignment: exactly as described
// Line Spacing: lineSpacing config property
// Shadow Stroke Styles: .setShadow/.setStroke methods
// Text Gradient: as described
// Right To Left Text: .rtl config property (for Arabic, etc.)
// Padding From Config: padding config property
// Text Padding: .setPadding method
// Word Wrap By Callback: use callback method to set wordWrap property
// Word Wrap By Width: wordWrap property examples (including useAdvancedWrap)

// == MISCELLANEOUS ==
// Set Test String: .testString config property (the test string is used to measure the font)
// Speech Bubble: custom speech bubbles
// Text Bounds: .getBounds method
// Text Metrics: manually set Text Metrics (not sure what these are??)
// To Json: .toJSON method (???)

// Phaser 3 Bitmap Text examples: https://labs.phaser.io/index.html?dir=game%20objects/bitmaptext/&q=
// [[ to-do ]]


// == OTHER TEXT-RELATED EXAMPLES
// Text Input [Input/Keyboard]: keydown event updating .text property
// Tween Text Size [Tweens]: as described
// Text Tint [Display/Tint]
// Rainbow Text [Display/Tint]
// Barrel Text [Fx/Barrel]
// Text Shadow Fx [Fx/Shadow]
// Glow Text [Fx/Glow]
// Text Texture [Textures]: make text, use as texture for particles
// Text To Render Texture [Game Objects/Render Texture]
// Text Light [Game Objects/Lights]: text illuminated by spotlight
// Add Body To Text [Physics/Matterjs]: as described, using .gameObject method
// Add Body To Bitmap Text [Physics/Matterjs]

