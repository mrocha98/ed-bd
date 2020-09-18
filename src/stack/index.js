class Stack {
  constructor () {
    this.head = null
  }

  push (value) {
    const newCell = { value, next: this.head }

    this.head = newCell
  }

  pop () {
    if (!this.head) return null

    const toPop = this.head
    this.head = this.head.next

    return toPop
  }

  toArray () {
    const array = []
    let pointer = this.head
    while (pointer) {
      array.push(pointer.value)
      pointer = pointer.next
    }
    return array
  }
}

module.exports = Stack
