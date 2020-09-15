class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  append (value) {
    const newCell = { value, next: null }

    if (!this.head) this.head = newCell
    else {
      let current = this.head
      while (current.next) current = current.next

      current.next = newCell
    }
    this.length++
  }

  prepend (value) {
    const newCell = { value, next: this.head }

    this.head = newCell
    this.length++
  }

  remove (value) {
    if (this.head.value === value) {
      this.head = this.head.next
      this.length--
      return
    }

    let pointer = this.head.next
    let previous = this.head
    while (pointer) {
      if (pointer.value === value) {
        previous.next = pointer.next
        this.length--
        return
      }
      previous = pointer
      pointer = pointer.next
    }
  }

  find (value) {
    if (!this.head) return null
    if (this.head.value === value) return this.head

    let pointer = this.head
    while (pointer.next) {
      pointer = pointer.next
      if (pointer.value === value) return pointer
    }

    return null
  }

  toArray () {
    const array = []
    let pointer = this.head
    while (pointer) {
      array.push(pointer)
      pointer = pointer.next
    }
    return array
  }

  clean () {
    this.head = null
    this.length = 0
  }
}

module.exports = LinkedList
