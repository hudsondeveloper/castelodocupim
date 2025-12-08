import { MessageCircle } from 'lucide-react'
import logo from '../assets/LOGO_CASTELO_DO_CUPIM.png'
import carne_suculenta from '../assets/carne_suculenta.jpg'
export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571993070352', '_blank')
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${carne_suculenta})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <img 
            src={logo} 
            alt="Castelo do Cupim" 
            className="h-92 md:h-120 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Seu Churras Fácil,<br />
          <span className="text-yellow-400">Sem Filas Em Mercado!</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium drop-shadow-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Apenas Delivery Salvador e Lauro de Freitas
        </p>

        {/* WhatsApp CTA */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative mt-8 px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-4 animate-pulse hover:animate-none"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <MessageCircle className="w-8 h-8" />
          <span>Faça Seu Pedido</span>
          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>

        {/* Floating badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white">
          <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/30 shadow-lg">
            <p className="font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>🔥 Entrega Rápida</p>
          </div>
          <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/30 shadow-lg">
            <p className="font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>✨ Carne Premium</p>
          </div>
          <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/30 shadow-lg">
            <p className="font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>⭐ Avaliação 5.0</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
