"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Sparkles, Leaf, Shield, Star, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const translations = {
  fr: {
    hero: {
      title: "LA FORCE DU NETTOYAGE",
      subtitle: "Nettoyage à la vapeur écologique",
      slogan: "Pour une maison propre et une santé pure",
      cta: "Demander un devis",
      location: "91800 Brunoy, Essonne, Île-de-France",
      description: "Service professionnel de nettoyage à la vapeur 100% écologique. Résultats visibles immédiatement, sans produits chimiques."
    },
    features: [
      { icon: Leaf, text: "100% Écologique" },
      { icon: Shield, text: "Sans produits chimiques" },
      { icon: Star, text: "Résultats garantis" }
    ],
    services: {
      title: "Nos Services Principaux",
      list: [
        "Nettoyage à la vapeur haute pression",
        "Désinfection écologique complète", 
        "Traitement anti-calcaire et moisissures",
        "Nettoyage de fin de chantier"
      ]
    },
    why: {
      title: "Pourquoi La Force du Nettoyage ?",
      reasons: [
        "Résultats visibles immédiatement",
        "Méthode 100% écologique",
        "Équipement professionnel dernière génération",
        "Sérieux, ponctualité, discrétion"
      ]
    },
    cta: {
      title: "Prêt pour un nettoyage professionnel ?",
      subtitle: "Contactez-nous dès maintenant pour un devis gratuit",
      phone: "Appeler maintenant",
      whatsapp: "WhatsApp"
    }
  },
  ro: {
    hero: {
      title: "LA FORCE DU NETTOYAGE", 
      subtitle: "Curățenie cu abur ecologică",
      slogan: "Pentru o casă curată și o sănătate pură",
      cta: "Solicită o ofertă",
      location: "91800 Brunoy, Essonne, Île-de-France",
      description: "Serviciu profesional de curățenie cu abur 100% ecologic. Rezultate vizibile imediat, fără substanțe chimice."
    },
    features: [
      { icon: Leaf, text: "100% Ecologic" },
      { icon: Shield, text: "Fără substanțe chimice" },
      { icon: Star, text: "Rezultate garantate" }
    ],
    services: {
      title: "Serviciile Noastre Principale",
      list: [
        "Curățenie cu abur de înaltă presiune",
        "Dezinfecție ecologică completă",
        "Tratament anti-calcar și mucegai", 
        "Curățenie de final de șantier"
      ]
    },
    why: {
      title: "De ce La Force du Nettoyage?",
      reasons: [
        "Rezultate vizibile imediat",
        "Metodă 100% ecologică", 
        "Echipament profesional de ultimă generație",
        "Seriozitate, punctualitate, discreție"
      ]
    },
    cta: {
      title: "Gata pentru o curățenie profesională?",
      subtitle: "Contactează-ne acum pentru o ofertă gratuită",
      phone: "Sună acum",
      whatsapp: "WhatsApp"
    }
  }
}

export default function HomePage() {
  const [language, setLanguage] = useState<'fr' | 'ro'>('fr')

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const t = translations[language]

  const whatsappNumber = "+33749726300"
  const whatsappMessage = language === 'fr' 
    ? "Bonjour, je souhaiterais obtenir un devis pour un nettoyage à la vapeur."
    : "Bună ziua, aș dori să obțin o ofertă pentru curățenie cu abur."

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFAEE' }}>
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-hero.jpg"
            alt="Nettoyage à la vapeur professionnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 text-white bg-white/20 backdrop-blur-sm border-white/30">
              {t.hero.location}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 drop-shadow-md">
              {t.hero.subtitle}
            </p>
            
            <p className="text-lg md:text-xl mb-6 font-medium drop-shadow-md" style={{ color: '#90EE90' }}>
              {t.hero.slogan}
            </p>

            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto drop-shadow-md opacity-90">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#1D6246' }}
                asChild
              >
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.hero.cta}
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                asChild
              >
                <Link href={`tel:${whatsappNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {whatsappNumber}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <feature.icon className="w-5 h-5" style={{ color: '#90EE90' }} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12" style={{ color: '#1D6246' }}>
              {t.services.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.services.list.map((service, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#1D6246' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#1D6246' }} />
                      <span className="font-medium text-left">{service}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 px-8 py-3 text-lg"
                style={{ borderColor: '#1D6246', color: '#1D6246' }}
                asChild
              >
                <Link href="/gallery">
                  Voir nos réalisations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#FCFAEE' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12" style={{ color: '#1D6246' }}>
              {t.why.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.why.reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 p-6 rounded-lg bg-white border-2 shadow-sm" style={{ borderColor: '#1D6246' }}>
                  <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#1D6246' }} />
                  <span className="font-medium text-left">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-lg px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
                style={{ color: '#1D6246' }}
                asChild
              >
                <Link href={`tel:${whatsappNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {t.cta.phone}
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 font-semibold transition-colors"
                style={{ backgroundColor: '#25D366' }}
                asChild
              >
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.cta.whatsapp}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  )
}
