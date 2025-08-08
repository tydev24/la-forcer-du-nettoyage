"use client"

import { Droplets, Phone, Instagram, MapPin, Clock, Mail, Leaf, Shield, Star, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface FooterProps {
  language: 'fr' | 'ro'
}

const translations = {
  fr: {
    company: {
      title: "LA FORCE DU NETTOYAGE",
      slogan: "Pour une maison propre et une santé pure",
      description: "Service professionnel de nettoyage à la vapeur 100% écologique dans l'Essonne."
    },
    navigation: {
      title: "Navigation",
      links: [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "À propos" },
        { href: "/gallery", label: "Réalisations" },
        { href: "/contact", label: "Contact" }
      ]
    },
    services: {
      title: "Nos Services",
      list: [
        "Nettoyage vapeur haute pression",
        "Désinfection écologique",
        "Traitement anti-calcaire",
        "Nettoyage fin de chantier"
      ]
    },
    contact: {
      title: "Contact",
      phone: "+33 7 49 72 63 00",
      location: "91800 Brunoy, Essonne",
      hours: "Lun-Sam : 8h-18h",
      instagram: "@la_force_du_nettoyage"
    },
    values: {
      title: "Nos Valeurs",
      list: [
        { icon: Leaf, text: "100% Écologique" },
        { icon: Shield, text: "Sans produits chimiques" },
        { icon: Star, text: "Résultats garantis" }
      ]
    },
    legal: {
      rights: "© 2024 La Force du Nettoyage - Snejana Dinusiuc. Tous droits réservés.",
      links: ["Mentions légales", "Politique de confidentialité", "CGU"]
    }
  },
  ro: {
    company: {
      title: "LA FORCE DU NETTOYAGE",
      slogan: "Pentru o casă curată și o sănătate pură",
      description: "Serviciu profesional de curățenie cu abur 100% ecologic în Essonne."
    },
    navigation: {
      title: "Navigare",
      links: [
        { href: "/", label: "Acasă" },
        { href: "/about", label: "Despre noi" },
        { href: "/gallery", label: "Realizări" },
        { href: "/contact", label: "Contact" }
      ]
    },
    services: {
      title: "Serviciile Noastre",
      list: [
        "Curățenie cu abur înaltă presiune",
        "Dezinfecție ecologică",
        "Tratament anti-calcar",
        "Curățenie final șantier"
      ]
    },
    contact: {
      title: "Contact",
      phone: "+33 7 49 72 63 00",
      location: "91800 Brunoy, Essonne",
      hours: "Lun-Sâm : 8h-18h",
      instagram: "@la_force_du_nettoyage"
    },
    values: {
      title: "Valorile Noastre",
      list: [
        { icon: Leaf, text: "100% Ecologic" },
        { icon: Shield, text: "Fără substanțe chimice" },
        { icon: Star, text: "Rezultate garantate" }
      ]
    },
    legal: {
      rights: "© 2024 La Force du Nettoyage - Snejana Dinusiuc. Toate drepturile rezervate.",
      links: ["Mențiuni legale", "Politica de confidențialitate", "Termeni și condiții"]
    }
  }
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  const whatsappNumber = "+33749726300"

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {t.company.title}
                </h3>
                <p className="text-sm text-gray-400">Snejana Dinusiuc</p>
              </div>
            </div>
            
            <p className="text-lg font-medium mb-4" style={{ color: '#90EE90' }}>
              {t.company.slogan}
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.company.description}
            </p>

            {/* Values */}
            <div className="space-y-3">
              {t.values.list.map((value, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <value.icon className="w-4 h-4" style={{ color: '#90EE90' }} />
                  <span className="text-sm text-gray-300">{value.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#90EE90' }}>
              {t.navigation.title}
            </h4>
            <ul className="space-y-3">
              {t.navigation.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#90EE90' }}>
              {t.services.title}
            </h4>
            <ul className="space-y-3">
              {t.services.list.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#1D6246' }}></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#90EE90' }}>
              {t.contact.title}
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <Link href={`tel:${whatsappNumber}`} className="text-white hover:text-green-400 transition-colors">
                    {t.contact.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{t.contact.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{t.contact.hours}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E4405F' }}>
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <Link 
                    href="https://instagram.com/la_force_du_nettoyage" 
                    target="_blank" 
                    className="text-white hover:text-pink-400 transition-colors text-sm"
                  >
                    {t.contact.instagram}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                {t.legal.rights}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center space-x-6">
              {t.legal.links.map((link, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
