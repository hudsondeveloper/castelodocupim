import { Users, MessageCircle, CheckCircle } from 'lucide-react'

interface Kit {
  id: number
  name: string
  people: string
  image: string
  price: number
  items: string[]
}

interface KitCardProps {
  kit: Kit
}

export default function KitCard({ kit }: KitCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de pedir o ${kit.name} (até ${kit.people})`
    window.open(`https://wa.me/5571993070352?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
      {/* Image section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-900 to-orange-900">
        <img
          src={kit.image}
          alt={kit.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 right-4 backdrop-blur-md bg-white/90 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <Users className="w-4 h-4 text-red-600" />
          <span className="text-sm font-bold text-neutral-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Até {kit.people}
          </span>
        </div>

        {/* Kit name */}
        <div className="absolute bottom-4 left-4">
          <h3 
            className="text-3xl font-extrabold text-white drop-shadow-lg"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {kit.name}
          </h3>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-6 text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg">
            <span className="text-sm font-semibold opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
              R$
            </span>
            <span 
              className="text-2xl font-extrabold ml-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {kit.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {kit.items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-neutral-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Pedir Este Kit</span>
        </button>
      </div>
    </div>
  )
}
