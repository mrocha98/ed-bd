const Stack = require('.')

const plates = new Stack()

;[1, 2, 3, 4].forEach((plate) => plates.push(plate))

console.log(plates.toArray())

console.log({ pop: plates.pop().value, plates: plates.toArray() })
console.log({ pop: plates.pop().value, plates: plates.toArray() })
console.log({ pop: plates.pop().value, plates: plates.toArray() })
plates.push(100)
console.log({ pop: plates.pop().value, plates: plates.toArray() })
console.log({ pop: plates.pop().value, plates: plates.toArray() })

console.log('\n============================\n')

const stack = new Stack()

stack.push('w')
stack.push('o')
stack.push('r')
stack.push('d')

const reversed = []

reversed.push(stack.pop().value)
reversed.push(stack.pop().value)
reversed.push(stack.pop().value)
reversed.push(stack.pop().value)

console.log(reversed.join('').toString())
