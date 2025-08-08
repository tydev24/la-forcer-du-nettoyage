"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Instagram, MapPin, Clock, Mail } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Image from "next/image"

const translations = {
  fr: {
    hero: {
      title: "Contactez-nous",
      subtitle: "Prêt pour un nettoyage professionnel ? Nous sommes là pour vous aider"
    },
    contact: {
      title: "Informations de Contact",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      location: "Zone d'intervention",
      hours: "Horaires",
      hoursText: "Lundi - Samedi : 8h - 18h"
    },
    form: {
      title: "Demande de Devis Gratuit",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      service: "Service souhaité",
      message: "Décrivez votre besoin",
      submit: "Envoyer la demande",
      services: [
        "Nettoyage à la vapeur",
        "Désinfection écologique",
        "Nettoyage fin de chantier",
        "Traitement anti-calcaire",
        "Nettoyage canapé",
        "Autre"
      ]
    },
    why: {
      title: "Pourquoi nous contacter ?",
      reasons: [
        "Devis gratuit et sans engagement",
        "Intervention rapide dans l'Essonne",
        "Méthode 100% écologique",
        "Résultats garantis"
      ]
    }
  },
  ro: {
    hero: {
      title: "Contactează-ne",
      subtitle: "Gata pentru o curățenie profesională? Suntem aici să te ajutăm"
    },
    contact: {
      title: "Informații de Contact",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      location: "Zona de intervenție",
      hours: "Program",
      hoursText: "Luni - Sâmbătă : 8h - 18h"
    },
    form: {
      title: "Cerere Ofertă Gratuită",
      name: "Nume complet",
      email: "Email",
      phone: "Telefon",
      service: "Serviciul dorit",
      message: "Descrie nevoia ta",
      submit: "Trimite cererea",
      services: [
        "Curățenie cu abur",
        "Dezinfecție ecologică",
        "Curățenie final șantier",
        "Tratament anti-calcar",
        "Curățenie canapea",
        "Altul"
      ]
    },
    why: {
      title: "De ce să ne contactezi?",
      reasons: [
        "Ofertă gratuită și fără angajament",
        "Intervenție rapidă în Essonne",
        "Metodă 100% ecologică",
        "Rezultate garantate"
      ]
    }
  }
}

export default function ContactPage() {
  const [language, setLanguage] = useState<'fr' | 'ro'>('fr')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const t = translations[language]
  const whatsappNumber = "+33749726300"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Bonjour, je souhaite obtenir un devis pour:
    
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFAEE' }}>
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-background.jpg"
            alt="Service de nettoyage professionnel"
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
              Contact
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

      {/* Contact Info + Form */}
      <section className="py-16" style={{ backgroundColor: '#FCFAEE' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#1D6246' }}>
                  {t.contact.title}
                </h2>
                
                <div className="space-y-6">
                  <Card className="border-2" style={{ borderColor: '#1D6246' }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: '#1D6246' }}>
                            {t.contact.phone}
                          </h3>
                          <Link href={`tel:${whatsappNumber}`} className="text-lg hover:underline">
                            {whatsappNumber}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2" style={{ borderColor: '#1D6246' }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: '#1D6246' }}>
                            {t.contact.whatsapp}
                          </h3>
                          <Link href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" className="text-lg hover:underline">
                            {whatsappNumber}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2" style={{ borderColor: '#1D6246' }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E4405F' }}>
                          <Instagram className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: '#1D6246' }}>
                            {t.contact.instagram}
                          </h3>
                          <Link href="https://instagram.com/la_force_du_nettoyage" target="_blank" className="text-lg hover:underline">
                            @la_force_du_nettoyage
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2" style={{ borderColor: '#1D6246' }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: '#1D6246' }}>
                            {t.contact.location}
                          </h3>
                          <p className="text-lg">91800 Brunoy, Essonne</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2" style={{ borderColor: '#1D6246' }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: '#1D6246' }}>
                            {t.contact.hours}
                          </h3>
                          <p className="text-lg">{t.contact.hoursText}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-2" style={{ borderColor: '#1D6246' }}>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#1D6246' }}>
                      {t.form.title}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1D6246' }}>
                          {t.form.name}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-2"
                          style={{ borderColor: '#1D6246' }}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1D6246' }}>
                          {t.form.email}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-2"
                          style={{ borderColor: '#1D6246' }}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#1D6246' }}>
                          {t.form.phone}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-2"
                          style={{ borderColor: '#1D6246' }}
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: '#1D6246' }}>
                          {t.form.service}
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          style={{ borderColor: '#1D6246' }}
                        >
                          <option value="">Sélectionnez un service</option>
                          {t.form.services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#1D6246' }}>
                          {t.form.message}
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="border-2"
                          style={{ borderColor: '#1D6246' }}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-white font-semibold py-3"
                        style={{ backgroundColor: '#1D6246' }}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {t.form.submit}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12" style={{ color: '#1D6246' }}>
              {t.why.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.why.reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 p-6 rounded-lg border-2 shadow-sm" style={{ borderColor: '#1D6246' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D6246' }}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="font-medium text-left">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  )
}
