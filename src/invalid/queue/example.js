const faker = require('faker/locale/pt_BR')
const Queue = require('.')

const separator = () => console.log('\n=====================================\n')

const ex1 = () => {
  console.log('Fila de atendimento do Caixa Tem 🏦\n')

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
}

const ex2 = () => {
  console.log('Trem de carga 🚂\n')

  const trem = new Queue()

  const cargas = ['Minério de ferro', 'Carvão', 'Madeira']

  cargas.forEach((carga) => trem.push(carga))

  console.log('início da viagem', trem.toArray())

  console.log('1° parada')
  trem.pop()
  console.log(trem.toArray())

  console.log('2° parada')
  trem.pop()
  console.log(trem.toArray())

  console.log('3° parada')
  trem.pop()
  trem.push('Cascalho')
  console.log(trem.toArray())

  console.log('4° parada')
  trem.pop()
  console.log(trem.toArray())
}

separator()

ex1()

separator()

ex2()

separator()
