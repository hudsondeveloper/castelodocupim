import { MessageCircle, Instagram } from 'lucide-react'

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571993070352', '_blank')
  }

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/castelodocupim/', '_blank')
  }

  return (
    <footer className="bg-neutral-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* CTA Section */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <h3 
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Pronto Para Seu Churrasco?
          </h3>
          <p 
            className="text-xl text-white/80 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Faça seu pedido agora pelo WhatsApp
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>Pedir Agora</span>
          </button>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <img 
              src="https://mocha-cdn.com/019aeb59-3114-760b-a96b-76691564835f/logo.png" 
              alt="Castelo do Cupim" 
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p 
              className="text-white/70"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Kits de churrasco premium<br />
              Delivery em Salvador e Lauro de Freitas
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contato
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto md:mx-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>(71) 99307-0352</span>
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Redes Sociais
            </h4>
            <button
              onClick={handleInstagramClick}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto md:mx-0"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Instagram className="w-5 h-5" />
              <span>@castelodocupim</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2024 Castelo do Cupim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
