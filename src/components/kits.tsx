import KitCard from './KitCard'

const kits = [
  {
    id: 1,
    name: 'Kit 1',
    people: '05 pessoas',
    image: 'https://mocha-cdn.com/019aeb59-3114-760b-a96b-76691564835f/559041934_122104784487044727_1320720550641329306_n.jpg',
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
    image: 'https://mocha-cdn.com/019aeb59-3114-760b-a96b-76691564835f/558295617_122104795179044727_5975287910563612658_n.jpg',
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
    image: 'https://mocha-cdn.com/019aeb59-3114-760b-a96b-76691564835f/559064153_122104786725044727_3203508223921113868_n.jpg',
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
    image: 'https://mocha-cdn.com/019aeb59-3114-760b-a96b-76691564835f/551741515_122095783389044727_6872233665779534861_n.jpg',
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
