"use client"
import { Button } from "../ui/button"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9717243531', '_blank')
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center z-50"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </Button>
  )
}
