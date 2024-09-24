'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CameraIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const feedbacks = [
    { name: "Maria Silva", comment: "Fotos incríveis do meu bebê recém-nascido!" },
    { name: "João Santos", comment: "A sessão de fotos da gravidez foi maravilhosa!" },
    { name: "Ana Oliveira", comment: "Amamos as fotos temáticas da nossa família!" },
    { name: "Carlos Mendes", comment: "Capturaram perfeitamente a personalidade do nosso cachorro!" },
    { name: "Fernanda Lima", comment: "As fotos do nosso casamento ficaram deslumbrantes!" },
    { name: "Ricardo Souza", comment: "Profissionalismo e criatividade em cada clique!" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % feedbacks.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const headerRef = useRef(null)
  const servicesRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth'
    })
  }
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Nazareth Clicks DF</h1>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-6">
              <li><Button variant="ghost" onClick={() => scrollToSection(headerRef)}>Início</Button></li>
              <li><Button variant="ghost" onClick={() => scrollToSection(servicesRef)}>Serviços</Button></li>
              <li><Button variant="ghost" onClick={() => scrollToSection(testimonialsRef)}>Depoimentos</Button></li>
              <li><Button variant="ghost" onClick={() => scrollToSection(contactRef)}>Contato</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32">
        {/* Introduction */}
        <section ref={headerRef} id="inicio" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">Capturando Momentos Especiais</h2>
            <p className="text-xl mb-8">Transformando suas memórias em arte fotográfica</p>
            <Button size="lg">Agende sua Sessão</Button>
          </div>
        </section>

        {/* Services and Prices */}
        <section ref={servicesRef} id="servicos" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CameraIcon className="w-12 h-12 mb-4 text-gray-800" />
                  <h3 className="text-2xl font-semibold mb-2">Ensaio Recém-Nascido</h3>
                  <p className="text-gray-600 mb-4">Capture os primeiros momentos do seu bebê</p>
                  <p className="text-xl font-bold">R$300</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CameraIcon className="w-12 h-12 mb-4 text-gray-800" />
                  <h3 className="text-2xl font-semibold mb-2">Ensaio de Gravidez</h3>
                  <p className="text-gray-600 mb-4">Eternize a beleza da sua gestação</p>
                  <p className="text-xl font-bold">R$300</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CameraIcon className="w-12 h-12 mb-4 text-gray-800" />
                  <h3 className="text-2xl font-semibold mb-2">Ensaio Familiar Temático Mensal</h3>
                  <p className="text-gray-600 mb-4">Crie memórias únicas com sua família</p>
                  <p className="text-xl font-bold">R$100</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-8 text-gray-600">
              Taxa de deslocamento de R$50 para sessões realizadas na casa do cliente.
            </p>

            {/* Pet Friendly Section */}
            <div className="mt-16 bg-gray-100 rounded-lg p-8">
              <div className="max-w-3xl mx-auto flex items-center">
                <img
                  src="https://media.istockphoto.com/id/509052128/photo/golden-retriever-sitting-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=ElpbUJyqy2vPdkzfrCin4thzBvEveakY6J1wNyz0Gkk="
                  alt="Golden Retriever"
                  className="w-1/2 h-auto rounded-lg shadow-lg"
                />
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <p className="text-xl font-semibold">Nosso estúdio é Pet Friendly!</p>
                    <p className="mt-2">Traga seu amiguinho peludo para a sessão de fotos!</p>
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-[16px] border-r-white border-b-8 border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Feedback Carousel */}
        <section ref={testimonialsRef} id="depoimentos" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {feedbacks.map((feedback, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                          <p className="text-xl mb-4">{feedback.comment}</p>
                          <p className="font-semibold">{feedback.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center mt-4 space-x-2">
                {feedbacks.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`w-3 h-3 rounded-full p-0 ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <span className="sr-only">Slide {index + 1}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Nossa Localização</h2>
            <div className="max-w-3xl mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.10735179777595!2d-47.89262235055686!3d-15.763365105693506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b02c08eb19f%3A0x676d8534e25e85bc!2sMARIA%20PIMENTA%20CAL%C3%87ADOS%20LTDA!5e1!3m2!1spt-BR!2sbr!4v1727155789885!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="mt-4 text-center">
                <p className="flex items-center justify-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  708/709 ASA NORTE, ao lado da Maria Pimenta Calçados, Brasília, DF - Brasil
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section ref={contactRef} id="contato" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
            <div className="max-w-2xl mx-auto">
              {/* <form className="space-y-4">
                <Input type="text" placeholder="Nome" className="bg-gray-700 text-white" />
                <Input type="email" placeholder="E-mail" className="bg-gray-700 text-white" />
                <Input type="tel" placeholder="Telefone" className="bg-gray-700 text-white" />
                <Textarea placeholder="Mensagem" className="bg-gray-700 text-white" />
                <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
              </form> */}
            </div>
            <div className="mt-12 text-center space-y-2">
              <p className="flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                        <a href="https://api.whatsapp.com/send/?phone=5561982775830&text=Eu+quero+fotos+no+estilo+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">(61) 9 8277-5830</a>
              </p>
              <p className="flex items-center justify-center">
                <MailIcon className="w-5 h-5 mr-2" />
                <a href="mailto:nazarethclciksdf@gmail.com">nazarethclciksdf@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Nazareth Clicks DF. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
