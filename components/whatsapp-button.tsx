"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import Link from "next/link"

interface WhatsAppButtonProps {
  language: 'fr' | 'ro'
}

export default function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const whatsappNumber = "+33749726300"
  const whatsappMessage = language === 'fr' 
    ? "Bonjour, je souhaiterais obtenir un devis pour un nettoyage à la vapeur."
    : "Bună ziua, aș dori să obțin o ofertă pentru curățenie cu abur."

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
        asChild
      >
        <Link href={whatsappUrl} target="_blank">
          <MessageCircle className="w-8 h-8 text-white" />
        </Link>
      </Button>
    </div>
  )
}
