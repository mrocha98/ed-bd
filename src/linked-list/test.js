const LinkedList = require('.')

describe('Linked List', () => {
  it('should initialize with 0 length', () => {
    const lk = new LinkedList()

    expect(lk.length).toEqual(0)
  })

  it('should prepend values in list', () => {
    const lk = new LinkedList()
    expect(lk.head).toBeNull()

    const insertions = [1, 2, 3]
    insertions.forEach((number) => {
      lk.prepend(number)
      expect(lk.head.value).toEqual(number)
    })

    expect(lk.length).toEqual(insertions.length)
  })

  it('should append values in list', () => {
    const lk = new LinkedList()
    expect(lk.head).toBeNull()

    const insertions = [3, 2, 1]
    insertions.forEach((number) => lk.append(number))

    expect(lk.length).toEqual(insertions.length)

    const firstItem = insertions[0]
    expect(lk.head.value).toEqual(firstItem)
  })

  it('should find values in list', () => {
    const lk = new LinkedList()

    const toFind = 3
    const notInList = 10

    const insertions = [1, 1, 1, toFind]

    insertions.forEach((number) => lk.prepend(number))

    expect(lk.find(toFind).value).toEqual(toFind)
    expect(lk.find(notInList)).toBeNull()
  })

  it('should transform list in array', () => {
    const lk = new LinkedList()

    const insertions = [1, 2, 3]
    insertions.forEach((number) => lk.append(number))

    lk.toArray().forEach((cell, index) => expect(cell.value).toEqual(insertions[index]))
  })

  it('should clean list', () => {
    const lk = new LinkedList()

    lk.prepend(Math.random())
    lk.prepend(Math.random())
    lk.prepend(Math.random())

    const lenghtBeforeClean = 3

    lk.clean()

    expect(lk.length).not.toEqual(lenghtBeforeClean)
    expect(lk.length).toEqual(0)
  })
})
