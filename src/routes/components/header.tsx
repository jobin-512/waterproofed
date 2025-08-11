import logo from "/logo.webp"
import { useState, useRef, useEffect } from "react"
import { Link, useMatchRoute } from "@tanstack/react-router"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<number | null>(null)
  const matchRoute = useMatchRoute()

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar - Dark Blue/Black Background */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-2 md:mb-0">Welcome to Water Proofed</div>
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">Working Time: Mon - Fri 09AM - 6PM</span>
            <span className="sm:hidden">Mon - Fri 09AM - 6PM</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Social Media Icons */}
            <svg className="w-4 h-4 cursor-pointer hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-[#00A7E8]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Header Section - White Background */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-16 lg:h-20" />
            </a>
          </div>

          {/* Contact Information - Hidden on mobile, shown on tablet and up */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Call Us Any Time:</div>
                <div className="font-semibold text-gray-800">+1 (310) 569-3129</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Email Us:</div>
                <div className="font-semibold text-gray-800">scd@waterproofed.com</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Our Office Location:</div>
                <div className="font-semibold text-gray-800">United States of America</div>
              </div>
            </div>
          </div>

          {/* Get a Quote Button */}
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors font-semibold">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - White Background */}
      <div className="bg-white py-4 border-t">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex items-center gap-8">
              <Link 
                to="/" 
                className={`font-semibold hover:text-blue-700 ${
                  matchRoute({ to: "/" }) ? "text-[#00A7E8]" : "text-gray-700 hover:text-[#00A7E8]"
                }`}
              >
                Home 
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-[#00A7E8] ${
                  matchRoute({ to: "/about" }) ? "text-[#00A7E8] font-semibold" : "text-gray-700"
                }`}
              >
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/service" 
                  className={`hover:text-[#00A7E8] flex items-center gap-1 ${
                    matchRoute({ to: "/service" }) ? "text-[#00A7E8] font-semibold" : "text-gray-700"
                  }`}
                >
                  Services 
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesDropdownOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <Link 
                        to="/services/balcony-waterproofing-coating-repair"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A7E8] transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="font-semibold text-gray-800">Balcony Waterproofing</div>
                        <div className="text-sm text-gray-600">Coating & Repair Services</div>
                      </Link>
                      <Link 
                        to="/services/deck-waterproofing-coating-repair"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A7E8] transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="font-semibold text-gray-800">Deck Waterproofing</div>
                        <div className="text-sm text-gray-600">Coating & Repair Services</div>
                      </Link>
                      <Link 
                        to="/services/planter-waterproofing-coating-repair"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00A7E8] transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="font-semibold text-gray-800">Planter Waterproofing</div>
                        <div className="text-sm text-gray-600">Coating & Repair Services</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-700 hover:text-[#00A7E8]">Area </a>
              <a href="/blog" className="text-gray-700 hover:text-[#00A7E8]">Blog </a>
              <Link 
                to="/contact" 
                className={`hover:text-[#00A7E8] ${
                  matchRoute({ to: "/contact" }) ? "text-[#00A7E8] font-semibold" : "text-gray-700"
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            {/* Mobile Menu Toggle */}
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-gray-800">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-[#00A7E8] focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="mt-4 bg-white border rounded-lg shadow-lg">
                <nav className="flex flex-col">
                  <Link 
                    to="/" 
                    className={`px-4 py-3 border-b hover:bg-gray-50 ${
                      matchRoute({ to: "/" }) ? "text-[#00A7E8] font-semibold" : "text-gray-700 hover:text-[#00A7E8]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home 
                  </Link>
                  <Link 
                    to="/about" 
                    className={`px-4 py-3 border-b hover:bg-gray-50 ${
                      matchRoute({ to: "/about" }) ? "text-[#00A7E8] font-semibold" : "text-gray-700 hover:text-[#00A7E8]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  
                  {/* Mobile Services Section */}
                  <div className="border-b">
                    <div className="px-4 py-3 text-gray-700 font-semibold">
                      Services
                    </div>
                    <div className="bg-gray-50">
                      <Link 
                        to="/services/balcony-waterproofing-coating-repair"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#00A7E8] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium text-gray-800">Balcony Waterproofing</div>
                        <div className="text-sm text-gray-600">Coating & Repair Services</div>
                      </Link>
                      <Link 
                        to="/services/deck-waterproofing-coating-repair"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#00A7E8] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium text-gray-800">Deck Waterproofing</div>
                        <div className="text-sm text-gray-600">Coating & Repair Services</div>
                      </Link>
                      <Link 
                        to="/services/planter-waterproofing-coating-repair"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#00A7E8] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium text-gray-800">Planter Waterproofing</div>
                        <div className="text-sm text-gray-600">Coating & Repair Services</div>
                      </Link>
                    </div>
                  </div>
                  
                  <a href="#" className="px-4 py-3 text-gray-700 border-b hover:bg-gray-50 hover:text-[#00A7E8]">Area </a>
                  <a href="/blog" className="px-4 py-3 text-gray-700 border-b hover:bg-gray-50 hover:text-[#00A7E8]">Blog </a>
                  <Link 
                    to="/contact" 
                    className={`px-4 py-3 hover:bg-gray-50 ${
                      matchRoute({ to: "/contact" }) ? "text-[#00A7E8] font-semibold" : "text-gray-700 hover:text-[#00A7E8]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
