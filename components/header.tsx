"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Droplets, Phone, MessageCircle, Instagram, Languages, Menu, X } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  language: 'fr' | 'ro'
  setLanguage: (lang: 'fr' | 'ro') => void
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos", 
      gallery: "Réalisations",
      contact: "Contact"
    }
  },
  ro: {
    nav: {
      home: "Acasă",
      about: "Despre noi",
      gallery: "Realizări", 
      contact: "Contact"
    }
  }
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = translations[language]
  
  const whatsappNumber = "+33749726300"

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact }
  ]

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md bg-white/95" style={{ borderColor: '#1D6246' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D6246' }}>
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#1D6246' }}>LA FORCE DU NETTOYAGE</h1>
              <p className="text-sm text-gray-600">Snejana Dinusiuc</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-green-600 ${
                  pathname === item.href ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Language + Contact */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'fr' ? 'ro' : 'fr')}
              className="border-2 hidden sm:flex"
              style={{ borderColor: '#1D6246', color: '#1D6246' }}
            >
              <Languages className="w-4 h-4 mr-1" />
              {language === 'fr' ? 'RO' : 'FR'}
            </Button>

            {/* Contact Info - Desktop */}
            <div className="hidden xl:flex items-center space-x-4">
              <Link href={`tel:${whatsappNumber}`} className="flex items-center space-x-1 text-sm" style={{ color: '#1D6246' }}>
                <Phone className="w-4 h-4" />
                <span>{whatsappNumber}</span>
              </Link>
              <Link href="https://instagram.com/la_force_du_nettoyage" target="_blank" className="flex items-center space-x-1 text-sm" style={{ color: '#1D6246' }}>
                <Instagram className="w-4 h-4" />
                <span>@la_force_du_nettoyage</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden border-2"
              style={{ borderColor: '#1D6246', color: '#1D6246' }}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t" style={{ borderColor: '#1D6246' }}>
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-green-600 ${
                    pathname === item.href ? 'text-green-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'fr' ? 'ro' : 'fr')}
                className="border-2 w-fit sm:hidden"
                style={{ borderColor: '#1D6246', color: '#1D6246' }}
              >
                <Languages className="w-4 h-4 mr-1" />
                {language === 'fr' ? 'RO' : 'FR'}
              </Button>

              {/* Mobile Contact */}
              <div className="flex flex-col space-y-2 xl:hidden">
                <Link href={`tel:${whatsappNumber}`} className="flex items-center space-x-2 text-sm" style={{ color: '#1D6246' }}>
                  <Phone className="w-4 h-4" />
                  <span>{whatsappNumber}</span>
                </Link>
                <Link href="https://instagram.com/la_force_du_nettoyage" target="_blank" className="flex items-center space-x-2 text-sm" style={{ color: '#1D6246' }}>
                  <Instagram className="w-4 h-4" />
                  <span>@la_force_du_nettoyage</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
