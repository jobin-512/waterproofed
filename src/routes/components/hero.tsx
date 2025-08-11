import { useState, useEffect } from "react"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  ctaPrimary: string
  ctaSecondary: string
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    title: "SPRINGTIME SPECIALS",
    subtitle: "FOR LEAKING DECKS !!",
    description: "Intrinsicly predominate backward-compatible potentialities without alternative total linkage. Interactively fabricate cross-unit growth strategies.",
    image: "/hero-1.webp",
    ctaPrimary: "DISCOVER MORE",
    ctaSecondary: "OUR SERVICES"
  },
  {
    id: 2,
    title: "PROFESSIONAL ROOFING",
    subtitle: "EXPERT SOLUTIONS !!",
    description: "Comprehensive roofing services with certified professionals. Quality materials and guaranteed workmanship for your peace of mind.",
    image: "/hero-2.webp",
    ctaPrimary: "GET QUOTE",
    ctaSecondary: "VIEW PROJECTS"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-[500px] md:h-[750px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {slide.subtitle}
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-[#00A7E8] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 min-w-[200px]">
                    {slide.ctaPrimary}
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 min-w-[200px]">
                    {slide.ctaSecondary}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-4">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-[#00A7E8] rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carousel Indicators */}
          <div className="flex flex-col gap-2 mt-4">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-500' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
        <div className="flex gap-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-500' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 