let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    x += 1
    basic.clearScreen()
    led.plot(x, y)
    basic.pause(200)
    if (x >= 4) {
        x += -1
    }
    if (x <= 0) {
        x += 1
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        basic.clearScreen()
        led.plot(x, y)
        basic.pause(200)
    }
    if (x >= 4) {
        x = -1
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        y += 1
        basic.clearScreen()
        led.plot(x, y)
        basic.pause(200)
    }
    if (y >= 4) {
        y = -1
    }
})
