import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef, useEffect } from 'react'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

interface GalleryImage {
  id: string
  before: string
  after?: string
  title: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    before: '/gallery/deck1.webp',
    after: '/gallery/deck2.webp',
    title: 'Deck Waterproofing Transformation',
    category: 'Deck Coating'
  },
  {
    id: '2',
    before: '/gallery/deck4.webp',
    after: '/gallery/deck3.webp',
    title: 'Professional Deck Restoration',
    category: 'Deck Coating'
  },
  {
    id: '3',
    before: '/gallery/deck6.webp',
    after: '/gallery/deck5.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '4',
    before: '/gallery/deck8.webp',
    after: '/gallery/deck7.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '5',
    before: '/gallery/deck10.webp',
    after: '/gallery/deck9.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '6',
    before: '/gallery/deck12.webp',
    after: '/gallery/deck13.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '7',
    before: '/gallery/deck14.webp',
    after: '/gallery/deck13.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '8',
    before: '/gallery/deck16.webp',
    after: '/gallery/deck15.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '9',
    before: '/gallery/deck18.webp',
    after: '/gallery/deck17.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '10',
    before: '/gallery/deck20.webp',
    after: '/gallery/deck19.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '11',
    before: '/gallery/d1.webp',
    title: 'Single Image Project',
    category: 'Deck Coating'
  },
  {
    id: '12',
    before: '/gallery/d2.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '13',
    before: '/gallery/d3.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '14',
    before: '/gallery/d4.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '15',
    before: '/gallery/d5.webp',
    title: 'Pool Area Waterproofing',
    category: 'Deck Coating'
  },
  {
    id: '16',
    before: '/gallery/drain2.webp',
    after: '/gallery/drain1.webp',
    title: 'Balcony Waterproofing',
    category: 'Deck Drains'
  },
  {
    id: '17',
    before: '/gallery/drain3.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Deck Drains'
  },
  {
    id: '18',
    before: '/gallery/drain4.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Deck Drains'
  },
  {
    id: '19',
    before: '/gallery/m2.webp',
    after: '/gallery/m1.webp',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '20',
    before: '/gallery/m3.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '21',
    before: '/gallery/m4.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '22',
    before: '/gallery/m5.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '23',
    before: '/gallery/m6.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '24',
    before: '/gallery/m7.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '25',
    before: '/gallery/m8.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '26',
    before: '/gallery/m9.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '27',
    before: '/gallery/m10.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Merkote Deck Coating'
  },
  {
    id: '28',
    before: '/gallery/n2.webp',
    after: '/gallery/n1.webp',
    title: 'Deck Drain Installation',
    category: 'New Railing'
  },
  {
    id: '29',
    before: '/gallery/n4.webp',
    after: '/gallery/n3.webp',
    title: 'Deck Drain Installation',
    category: 'New Railing'
  },
  {
    id: '30',
    before: '/gallery/n5.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'New Railing'
  },
  {
    id: '31',
    before: '/gallery/n6.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'New Railing'
  },
  {
    id: '31',
    before: '/gallery/pool2.webp',
    after: '/gallery/pool1.webp',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '32',
    before: '/gallery/pool4.webp',
    after: '/gallery/pool3.webp',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '33',
    before: '/gallery/p1.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '34',
    before: '/gallery/p2.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '35',
    before: '/gallery/p3.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '36',
    before: '/gallery/p4.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '37',
    before: '/gallery/p5.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '38',
    before: '/gallery/p6.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Pool Coatings'
  },
  {
    id: '39',
    before: '/gallery/plant2.webp',
    after: '/gallery/plant1.webp',
    title: 'Deck Drain Installation',
    category: 'Planters'
  },
  {
    id: '40',
    before: '/gallery/s2.webp',
    after: '/gallery/s1.webp',
    title: 'Deck Drain Installation',
    category: 'Stucco'
  },
  {
    id: '41',
    before: '/gallery/s4.webp',
    after: '/gallery/s3.webp',
    title: 'Deck Drain Installation',
    category: 'Stucco'
  },
  {
    id: '42',
    before: '/gallery/s6.webp',
    after: '/gallery/s5.webp',
    title: 'Deck Drain Installation',
    category: 'Stucco'
  },
  {
    id: '43',
    before: '/gallery/s8.webp',
    after: '/gallery/s7.webp',
    title: 'Deck Drain Installation',
    category: 'Stucco'
  },
  {
    id: '44',
    before: '/gallery/s9.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Stucco'
  },
  {
    id: '45',
    before: '/gallery/s10.webp',
    after: '',
    title: 'Deck Drain Installation',
    category: 'Stucco'
  },
  {
    id: '46',
    before: '/gallery/t2.webp',
    after: '/gallery/t1.webp',
    title: 'Deck Drain Installation',
    category: 'Tiles'
  },
  {
    id: '47',
    before: '/gallery/t2.webp',
    after: '/gallery/t3.webp',
    title: 'Deck Drain Installation',
    category: 'Tiles'
  },
  
]

const categories = [
  'Deck Coating',
  'Deck Drains', 
  'Merkote Deck Coating',
  'New Railing',
  'Pool Coatings',
  'Planters',
  'Stucco',
  'Tiles'
]

function BeforeAfterComparison({ image, isActive }: { image: GalleryImage, isActive: boolean }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, percentage)))
    }
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = (x / rect.width) * 100
        setSliderPosition(Math.max(0, Math.min(100, percentage)))
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging])

  if (!isActive) return null

  // If no after image, display only the before image
  if (!image.after || image.after === '') {
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Project Gallery</h3>
        <div className="relative w-full h-96 xl:h-[40rem] rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image.before} 
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Before / After</h3>
      <div 
        ref={containerRef}
        className="relative w-full h-96 xl:h-[40rem] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img 
            src={image.before} 
            alt={`${image.title} - Before`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* After Image with clipping */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={image.after} 
            alt={`${image.title} - After`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-[#00A7E8] z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#00A7E8] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState('Deck Coating')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Work Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing transformations we've achieved for our clients. 
              Drag the slider to compare before and after photos.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentImageIndex(0)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-[#00A7E8] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Image Counter */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {filteredImages.length} {filteredImages.length === 1 ? 'project' : 'projects'} in this category
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {filteredImages.length > 0 ? (
              <>
                {/* Current Image Display */}
                <BeforeAfterComparison 
                  image={filteredImages[currentImageIndex]} 
                  isActive={true}
                />
                
                {/* Navigation Controls */}
                <div className="flex justify-between items-center mb-8">
                  <button
                    onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                    disabled={currentImageIndex === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      {currentImageIndex + 1} of {filteredImages.length}
                    </p>
                    <p className="font-semibold text-gray-800">
                      {filteredImages[currentImageIndex].title}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setCurrentImageIndex(Math.min(filteredImages.length - 1, currentImageIndex + 1))}
                    disabled={currentImageIndex === filteredImages.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filteredImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                        currentImageIndex === index 
                          ? 'ring-2 ring-[#00A7E8] scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <img 
                        src={image.after || image.before} 
                        alt={image.title}
                        className="w-full h-24 object-cover"
                      />
                      {currentImageIndex === index && (
                        <div className="absolute inset-0 bg-[#00A7E8] bg-opacity-20 flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
                <p className="text-gray-600">No projects available in this category yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#00A7E8] py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you achieve the same stunning results. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[#00A7E8] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Estimate
            </a>
            <a 
              href="tel:+13105693129" 
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#00A7E8] transition-colors duration-200"
            >
              Call (310) 569-3129
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
