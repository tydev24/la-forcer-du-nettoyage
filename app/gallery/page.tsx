"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const translations = {
  fr: {
    hero: {
      title: "Nos Réalisations",
      subtitle: "Découvrez la transformation spectaculaire de nos interventions"
    },
    gallery: {
      items: [
        {
          title: "Douche entartrée transformée",
          description: "Douche entartrée transformée en une surface éclatante grâce au nettoyage vapeur haute pression.",
          category: "Salle de bain"
        },
        {
          title: "WC désinfecté",
          description: "Nettoyage et désinfection complète des sanitaires avec élimination totale des bactéries.",
          category: "Sanitaires"
        },
        {
          title: "Receveur de douche",
          description: "Élimination complète des moisissures et du calcaire sur receveur de douche.",
          category: "Salle de bain"
        },
        {
          title: "Paroi de douche",
          description: "Nettoyage vapeur haute pression pour un résultat impeccable sur paroi de douche.",
          category: "Salle de bain"
        }
      ]
    },
    cta: {
      title: "Impressionné par nos résultats ?",
      subtitle: "Contactez-nous pour transformer votre espace",
      button: "Demander un devis gratuit"
    }
  },
  ro: {
    hero: {
      title: "Realizările Noastre",
      subtitle: "Descoperă transformarea spectaculoasă a intervențiilor noastre"
    },
    gallery: {
      items: [
        {
          title: "Duș cu calcar transformat",
          description: "Duș plin de calcar, reîmprospătat și strălucitor prin curățenie cu abur de înaltă presiune.",
          category: "Baie"
        },
        {
          title: "WC dezinfectat",
          description: "Curățenie și dezinfecție completă a sanitarelor cu eliminarea totală a bacteriilor.",
          category: "Sanitare"
        },
        {
          title: "Cadă de duș",
          description: "Eliminarea completă a mucegaiului și calcarului de pe cada de duș.",
          category: "Baie"
        },
        {
          title: "Perete de duș",
          description: "Curățenie cu abur de înaltă presiune pentru un rezultat impecabil pe peretele de duș.",
          category: "Baie"
        }
      ]
    },
    cta: {
      title: "Impresionat de rezultatele noastre?",
      subtitle: "Contactează-ne pentru a-ți transforma spațiul",
      button: "Solicită o ofertă gratuită"
    }
  }
}

export default function GalleryPage() {
  const [language, setLanguage] = useState<'fr' | 'ro'>('fr')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const t = translations[language]

  const beforeAfterImages = [
    { before: "/images/avant1.jpg", after: "/images/apres1.jpg", index: 0 },
    { before: "/images/avant3.jpg", after: "/images/apres3.jpg", index: 1 },
    { before: "/images/avant4.jpg", after: "/images/apres4.jpg", index: 2 },
    { before: "/images/avant6.jpg", after: "/images/apres6.jpg", index: 3 }
  ]

  const whatsappNumber = "+33749726300"
  const whatsappMessage = language === 'fr' 
    ? "Bonjour, j'ai vu vos réalisations et je souhaiterais obtenir un devis."
    : "Bună ziua, am văzut realizările dumneavoastră și aș dori să obțin o ofertă."

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % beforeAfterImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? beforeAfterImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFAEE' }}>
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery-background.jpg"
            alt="Processus de nettoyage professionnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              Avant / Après
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md opacity-90">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16" style={{ backgroundColor: '#FCFAEE' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {beforeAfterImages.map((images, index) => (
                <Card 
                  key={index} 
                  className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group" 
                  style={{ borderColor: '#1D6246' }}
                  onClick={() => setSelectedImage(index)}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2">
                      <div className="relative overflow-hidden">
                        <Image
                          src={images.before || "/placeholder.svg"}
                          alt={`Avant ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-500 text-white font-bold">
                            AVANT
                          </Badge>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <Image
                          src={images.after || "/placeholder.svg"}
                          alt={`Après ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="text-white font-bold" style={{ backgroundColor: '#1D6246' }}>
                            APRÈS
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" style={{ borderColor: '#1D6246', color: '#1D6246' }}>
                          {t.gallery.items[index].category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#1D6246' }}>
                        {t.gallery.items[index].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t.gallery.items[index].description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={beforeAfterImages[selectedImage].before || "/placeholder.svg"}
                  alt={`Avant ${selectedImage + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white font-bold text-lg px-3 py-1">
                    AVANT
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={beforeAfterImages[selectedImage].after || "/placeholder.svg"}
                  alt={`Après ${selectedImage + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="text-white font-bold text-lg px-3 py-1" style={{ backgroundColor: '#1D6246' }}>
                    APRÈS
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1D6246' }}>
                {t.gallery.items[selectedImage].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {t.gallery.items[selectedImage].description}
              </p>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevImage}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextImage}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Close button */}
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1D6246' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.cta.subtitle}
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-lg px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: '#1D6246' }}
              asChild
            >
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  )
}
