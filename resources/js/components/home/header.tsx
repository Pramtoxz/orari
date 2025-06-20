import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"
import Foto from "@/assets/orari.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="w-25 h-10 rounded-full bg-[#ffff] flex items-center justify-center mr-3">
               <img
                src={Foto}
                alt="Logo ORARI"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              </div>
              {/* <div>
                <h1 className="text-lg font-bold text-[#CC1616]">ORARI</h1>
                <p className="text-lg font-bold text-[#CC1616]"> Daerah Sumatera Barat</p>
              </div> */}
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "#hero" },
              { name: "Event", href: "https://orari.or.id/events/" },
              { name: "EQSL", href: "/public/esql" },
              { name: "Bimbingan & Pelatihan", href: "https://orari.or.id/diy-aprs-tracker-menggunakan-ht-uv-k5-k6/" },
              { name: "Contact", href: "#footer" }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-gray-700 hover:text-[#CC1616] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#CC1616] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              href={route('login')}
            >
              Masuk <ChevronRight className="ml-1 h-4 w-4" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#02188B] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {[
                { name: "Home", href: "#hero" },
                { name: "Event", href: "https://orari.or.id/events/" },
                { name: "E-QSL", href: "/public/esql" },
                { name: "Bimbingan & Pelatihan", href: "https://orari.or.id/diy-aprs-tracker-menggunakan-ht-uv-k5-k6/" },
                { name: "Contact", href: "#footer" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#CC1616] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href={route('login')} className="mt-3 w-full bg-[#CC1616] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                Masuk <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 