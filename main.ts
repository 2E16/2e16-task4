let x = 0
let choice = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        let y = 0
        if (x >= 4) {
            choice = 0
        }
        if (x <= 0) {
            choice = 1
        }
        if (choice == 0) {
            x += -1
            basic.clearScreen()
            led.plot(x, y)
            basic.pause(200)
        }
        if (choice == 1) {
            x += 1
            basic.clearScreen()
            led.plot(x, y)
            basic.pause(200)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
