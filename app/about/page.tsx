"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Award, Users, Leaf, Shield } from 'lucide-react'
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const translations = {
  fr: {
    hero: {
      title: "À propos de Snejana",
      subtitle: "Fondatrice de La Force du Nettoyage"
    },
    story: {
      title: "Mon Histoire",
      content: "Bonjour, je m'appelle Snejana. Je suis moldave, j'ai 36 ans et j'ai fondé La Force du Nettoyage. J'utilise une méthode 100% écologique, sans produits chimiques, pour offrir un environnement propre et sain.",
      mission: "Ma mission est de transformer votre espace de vie en un environnement sain et propre, en utilisant uniquement des méthodes respectueuses de l'environnement et de votre santé."
    },
    values: {
      title: "Mes Valeurs",
      list: [
        {
          icon: Heart,
          title: "Passion du métier",
          description: "Chaque intervention est réalisée avec soin et attention aux détails"
        },
        {
          icon: Leaf,
          title: "Respect de l'environnement", 
          description: "Méthodes 100% écologiques, sans produits chimiques nocifs"
        },
        {
          icon: Shield,
          title: "Sécurité avant tout",
          description: "Protection de votre santé et de celle de votre famille"
        },
        {
          icon: Award,
          title: "Excellence du service",
          description: "Résultats professionnels garantis à chaque intervention"
        }
      ]
    },
    experience: {
      title: "Mon Expertise",
      items: [
        "Spécialiste du nettoyage à la vapeur haute pression",
        "Formation aux techniques de désinfection écologique",
        "Expérience avec tous types de surfaces",
        "Maîtrise des équipements professionnels dernière génération"
      ]
    },
    approach: {
      title: "Mon Approche",
      description: "Je crois fermement qu'un environnement propre contribue à une meilleure qualité de vie. C'est pourquoi j'ai choisi le nettoyage à la vapeur : une méthode naturelle, efficace et respectueuse de votre santé.",
      benefits: [
        "Élimination de 99,9% des bactéries et virus",
        "Aucun résidu chimique",
        "Respect des surfaces délicates", 
        "Séchage rapide"
      ]
    }
  },
  ro: {
    hero: {
      title: "Despre Snejana",
      subtitle: "Fondatoarea La Force du Nettoyage"
    },
    story: {
      title: "Povestea Mea",
      content: "Bună ziua! Mă numesc Snejana, am 36 de ani și sunt moldoveancă. Sunt fondatoarea La Force du Nettoyage. Ofer servicii de curățenie cu abur – soluție eficientă și ecologică, fără substanțe toxice.",
      mission: "Misiunea mea este să transform spațiul tău de locuit într-un mediu sănătos și curat, folosind doar metode care respectă mediul și sănătatea ta."
    },
    values: {
      title: "Valorile Mele",
      list: [
        {
          icon: Heart,
          title: "Pasiunea pentru meserie",
          description: "Fiecare intervenție este realizată cu grijă și atenție la detalii"
        },
        {
          icon: Leaf,
          title: "Respectul pentru mediu",
          description: "Metode 100% ecologice, fără substanțe chimice nocive"
        },
        {
          icon: Shield,
          title: "Siguranța mai presus de toate",
          description: "Protecția sănătății tale și a familiei tale"
        },
        {
          icon: Award,
          title: "Excelența serviciului",
          description: "Rezultate profesionale garantate la fiecare intervenție"
        }
      ]
    },
    experience: {
      title: "Expertiza Mea",
      items: [
        "Specialist în curățenie cu abur de înaltă presiune",
        "Formare în tehnici de dezinfecție ecologică",
        "Experiență cu toate tipurile de suprafețe",
        "Stăpânirea echipamentelor profesionale de ultimă generație"
      ]
    },
    approach: {
      title: "Abordarea Mea",
      description: "Cred cu tărie că un mediu curat contribuie la o calitate mai bună a vieții. De aceea am ales curățenia cu abur: o metodă naturală, eficientă și care respectă sănătatea ta.",
      benefits: [
        "Eliminarea a 99,9% din bacterii și viruși",
        "Fără reziduuri chimice",
        "Respectă suprafețele delicate",
        "Uscare rapidă"
      ]
    }
  }
}

export default function AboutPage() {
  const [language, setLanguage] = useState<'fr' | 'ro'>('fr')

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const t = translations[language]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFAEE' }}>
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-background.jpg"
            alt="Nettoyage écologique professionnel"
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
              Fondatrice & Experte
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

      {/* Story Section */}
      <section className="py-16" style={{ backgroundColor: '#FCFAEE' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D6246' }}>
                  {t.story.title}
                </h2>
                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  {t.story.content}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  {t.story.mission}
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-xl">
                  <div className="w-64 h-64 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                    <span className="text-8xl font-bold text-white">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1D6246' }}>
              {t.values.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {t.values.list.map((value, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#1D6246' }}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D6246' }}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#1D6246' }}>
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16" style={{ backgroundColor: '#FCFAEE' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1D6246' }}>
              {t.experience.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.experience.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-6 rounded-lg bg-white border-2 shadow-sm" style={{ borderColor: '#1D6246' }}>
                  <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#1D6246' }} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D6246' }}>
                  {t.approach.title}
                </h2>
                <p className="text-lg mb-8 leading-relaxed text-gray-700">
                  {t.approach.description}
                </p>
                
                <div className="space-y-4">
                  {t.approach.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1D6246' }} />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/background-hero.jpg"
                  alt="Nettoyage professionnel à la vapeur"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  )
}
