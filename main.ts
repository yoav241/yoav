input.onButtonPressed(Button.A, function () {
    כי += -1
})
input.onButtonPressed(Button.B, function () {
    כי += 1
})
let כי = 1
basic.forever(function () {
    basic.showNumber(כי)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
