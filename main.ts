radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P1.setAngle(0)
        servos.P2.setAngle(180)
    }
    if (receivedNumber == 2) {
        servos.P1.setAngle(180)
        servos.P2.setAngle(0)
    }
    if (receivedNumber == 3) {
        servos.P0.setAngle(110)
    }
    if (receivedNumber == 4) {
        servos.P0.setAngle(0)
    }
    if (receivedNumber == 5) {
        servos.P1.stop()
        servos.P2.stop()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
