input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("sad face")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
radio.setGroup(1)
