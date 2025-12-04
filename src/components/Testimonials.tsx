import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'Achei excelente. Entrega foi rápida, carne de qualidade e preço justo. Sinceramente, superou o que eu esperava. Parabéns pelo trabalho!',
    rating: 5
  },
  {
    id: 2,
    text: 'Opa! Tudo sim. Rapaz, gostei demais viu! As carnes vieram fresquinhas, bem embaladas e medida certa. Foi só acender a churrasqueira e mandar bala. O pessoal aqui em casa também gostou. Pode ter certeza que vou pedir de novo 👍',
    rating: 5
  },
  {
    id: 3,
    text: 'Show de bola! A carne veio fresquinha e o kit facilitou demais. Economizei tempo e o churrasco saiu perfeito. Recomendo sem pensar duas vezes',
    rating: 5
  },
  {
    id: 4,
    text: 'Gostei bastante viu? A carne veio macia, sem nervo, e a quantidade deu certinho pra família. Foi muito mais prático do que ir no mercado',
    rating: 5
  },
  {
    id: 5,
    text: 'Massa demais! Fiz ontem à noite aqui em casa, e o povo não parava de elogiar. Fora a praticidade, porque chegou tudo pronto pro churrasco. Vou virar freguês, certeza',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neutral-900 via-neutral-800 to-red-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            O Que Nossos Clientes Dizem
          </h2>
          <p 
            className="text-xl text-white/80"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Avaliação 5.0 baseada em centenas de pedidos
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p 
                className="text-white/90 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
