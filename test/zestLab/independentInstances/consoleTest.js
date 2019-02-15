import { writeLine } from './someModule'

function testConsolePrint () {
  const message = 'Hello ES6!'
  writeLine(message)
}

export {
  testConsolePrint
}
