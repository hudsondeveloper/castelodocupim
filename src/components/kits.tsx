import KitCard from './KitCard'
import kit1 from '../assets/KIT_1.jpg'
import kit2 from '../assets/KIT_2.jpg'
import kit3 from '../assets/KIT_3.jpg'
import kit4 from '../assets/KIT_4.jpg'

const kits = [
  {
    id: 1,
    name: 'Kit 1',
    people: '05 pessoas',
    image: kit1,
    items: [
      '500g Cupim Grill',
      '500g Bisteca Suína',
      '500g Toscana Mista',
      '500g Coxinha de Frango',
      '1 Sal Grosso'
    ]
  },
  {
    id: 2,
    name: 'Kit 2',
    people: '06 pessoas',
    image: kit2,
    items: [
      '01 kg Cupim Grill',
      '500g Contra Filé',
      '500g Toscana Mista',
      '500g Coxinha de Frango',
      '1 Pacote de Pão de Alho',
      '1 Sal Grosso'
    ]
  },
  {
    id: 3,
    name: 'Kit 3',
    people: '07 pessoas',
    image: kit3,
    items: [
      '01 kg Cupim Grill',
      '01 kg Contra Filé',
      '500g Toscana Mista',
      '500g Coxinha de Frango',
      '1 Pacote de Pão de Alho',
      '1 Sal Grosso'
    ]
  },
  {
    id: 4,
    name: 'Kit 4',
    people: '08 pessoas',
    image: kit4,
    items: [
      '01 kg Cupim Grill',
      '500g Alcatra',
      '500g Contra Filé',
      '500g Bisteca Suína',
      '500g Toscana Mista',
      '500g Coxinha de Frango',
      '1 Pacote de Pão de Alho',
      '1 Sal Grosso'
    ]
  }
]

export default function Kits() {
  return (
    <section className="py-20 px-4" id="kits">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Escolha Seu Kit
          </h2>
          <p 
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Kits prontos para o churrasco perfeito, com carnes premium selecionadas
          </p>
        </div>

        {/* Kits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  )
}
