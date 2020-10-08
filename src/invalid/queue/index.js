class Queue {
  constructor () {
    this.head = null
    this.length = 0
  }

  push (value) {
    const newCell = { value, next: this.head }

    this.head = newCell
    this.length++
  }

  pop () {
    if (!this.head) return

    let toPop
    if (!this.head.next) {
      toPop = this.head
      this.head = null

      this.length--
      return toPop.value
    }

    let pointer = this.head.next
    let previous = this.head

    while (pointer.next) {
      previous = pointer
      pointer = pointer.next
    }

    toPop = pointer

    previous.next = null

    this.length--
    return toPop.value
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

module.exports = Queue
