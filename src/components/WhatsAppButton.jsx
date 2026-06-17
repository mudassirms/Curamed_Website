import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '918050107353' // owner's number with country code, no +
const WHATSAPP_MESSAGE = 'Hello! I found you on your website and would like to enquire about your care services.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-lg"
      style={{ background: '#25D366' }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: '#25D366', opacity: 0.35 }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.845 1.89 6.918L2 30l7.287-1.862A13.94 13.94 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.452a11.39 11.39 0 01-5.812-1.594l-.416-.247-4.326 1.105 1.13-4.218-.272-.433A11.388 11.388 0 014.55 16.003c0-6.313 5.14-11.452 11.453-11.452 6.312 0 11.45 5.14 11.45 11.452 0 6.312-5.138 11.449-11.45 11.449zm6.28-8.573c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.547-.172-.777.172-.23.344-.893 1.118-1.094 1.348-.2.23-.402.259-.746.086-.344-.172-1.452-.535-2.765-1.707-1.022-.912-1.712-2.038-1.912-2.383-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.777-1.875-1.065-2.566-.28-.674-.565-.583-.777-.594l-.661-.011c-.23 0-.603.086-.919.43-.316.344-1.208 1.18-1.208 2.878s1.237 3.337 1.409 3.567c.172.23 2.435 3.72 5.9 5.214.824.356 1.468.568 1.969.727.827.263 1.58.226 2.174.137.663-.1 2.036-.832 2.323-1.636.287-.803.287-1.493.2-1.636-.086-.143-.316-.23-.66-.402z" />
      </svg>
    </motion.a>
  )
}