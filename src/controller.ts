export default class Controller {
  private gamepad: Gamepad | null = null
  private isCapturing = false
  private interval?: number
  private deadzone = 0

  attach = (gamepad: Gamepad): void => {
    this.gamepad = gamepad

    console.log(`Gamepad attached: ${this.gamepad.id}`)
  }

  detach = (): void => {
    console.log('Gamepad detached')
    this.gamepad = null
  }

  setDeadzone = (deadzone: number): void => {
    this.deadzone = deadzone
    console.log(`Deadzone set to ${deadzone}`)
  }

  /* TODO: startCapture and stopCapture to record inputs for replay capability */
  startCapture = (): boolean => {
    this.isCapturing = true

    return this.isCapturing
  }

  stopCapture = (): boolean => {
    this.isCapturing = false

    return this.isCapturing
  }

  startPoll = (frequency: number): void => {
    this.interval = window.setInterval(this.handleInput, 1000 / frequency)
    console.log(`Polling at ${frequency}Hz`)
  }

  stopPoll = (): void => {
    window.clearInterval(this.interval)
  }

  handleInput = (): Gamepad | null => {
    if (!(this.gamepad instanceof Gamepad)) {
      return null
    }

    const lastGamepadState = navigator.getGamepads()[this.gamepad.index]

    if (!lastGamepadState) {
      return null
    }

    const { axes, buttons } = lastGamepadState

    const axisLogOutputLabels = ['leftX', 'leftY', 'rightX', 'rightY']
    const buttonLogOutputLabels = [
      'cross',
      'circle',
      'square',
      'triangle',
      'l1',
      'r1',
      'l2',
      'r2'
    ]

    const axisLogOutput = axes
      .map((axis, index) => ({
        label: axisLogOutputLabels[index],
        value: Number(axis.toFixed(3))
      }))
      .filter(axis => Math.abs(axis.value) >= Math.abs(this.deadzone))
      .map(axis => `${axis.label}: ${axis.value}`)
      .join(' ')

    const buttonLogOutput = buttons
      .map((button, index) => ({ value: button.value, label: buttonLogOutputLabels[index] }))
      .filter(button => button.value)
      .map(button => button.label)
      .join(' ')

    const logOutput = `${axisLogOutput} ${buttonLogOutput}`.trim()

    if (logOutput) {
      console.log(logOutput)
    }

    return lastGamepadState
  }
}
