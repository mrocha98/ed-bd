const faker = require('faker/locale/pt_BR')
const Queue = require('.')

console.log('Fila de atendimento do Caixa Tem')

const caixaTem = new Queue()

const clientes = Array.from({ length: 3 }, () => faker.name.firstName())

clientes.forEach((cliente) => caixaTem.push(cliente))

console.log('Fila antes do Bob chegar: ', caixaTem.toArray())

caixaTem.push('Bob')

console.log('Fila com o Bob: ', caixaTem.toArray())

const atendidos = []

atendidos.push(caixaTem.pop())
console.log('\n1° atendimento: ', { fila: caixaTem.toArray(), atendidos })

atendidos.push(caixaTem.pop())
console.log('\n2° atendimento: ', { fila: caixaTem.toArray(), atendidos })

atendidos.push(caixaTem.pop())
console.log('\n3° atendimento: ', { fila: caixaTem.toArray(), atendidos })

atendidos.push(caixaTem.pop())
console.log('\n4° atendimento: ', { fila: caixaTem.toArray(), atendidos })
