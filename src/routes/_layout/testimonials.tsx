import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/testimonials')({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Hear from real customers about their experience with Waterproofed. Trusted waterproofing and deck coating experts in Southern California.',
      },
      {
        title: 'Client Testimonials & Reviews | Southern California Decking',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/banner.webp" 
            alt="Southern California Decking professional waterproofing banner" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Customer Testimonials
          </h1>
          <p className="text-xl md:text-2xl">
            Hear what our satisfied customers have to say
          </p>
        </div>
      </section>

      {/* Main Testimonial - Michelle Kurtz */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#00A7E8]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Testimonial</h2>
              <p className="text-gray-600">July 17, 2013</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">To Whom It May Concern</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am writing to express my complete satisfaction with Southern California Decking. 
                The quality of work, lack of disputes or delays, consistent staff, and excellent 
                coordination with independent contractors has been outstanding.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Darren Elliott, your supervisor, is a leak solution expert, job coordinator, and 
                negotiator. I would be happy to share my experience with anyone who calls me at 
                213-700-0080.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I had a long-standing issue with a leaking roof-deck on my house. A previous 
                contractor failed to fix the problem. After researching deck waterproofing 
                technology, I contacted Southern California Decking. Darren Elliott provided 
                a successful solution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The job expanded in scope due to discoveries like 60-year-old disintegrated 
                tar paper, leaks through stucco walls, a glass brick window, and rusting deck 
                railing. Darren's integrity in handling change-orders was exemplary, and he 
                recommended an outstanding railing (iron welder) contractor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I highly recommend Southern California Decking for any deck waterproofing needs.
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">Sincerely,</p>
                <p className="text-gray-700">Michelle Kurtz</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Phone: 213-700-0080</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">More Customer Reviews</h2>
            <p className="text-gray-600">Real feedback from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "The walkways came out great! Thank you for working around our children's 
                  schedules, ensuring cleanliness, and addressing rain problems. I would 
                  definitely recommend and use your company again."
                </p>
              </div>
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>

            {/* Testimonial 2 - Chloe Dauncey */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  "There was some rot, but additional expenses were kept to a minimum. The 
                  construction workers were skilled and professional, very hard working in 
                  spite of the extreme heat. The deck was transformed... even better than 
                  we expected! Within a few days, it was complete."
                </p>
                <p className="text-gray-600 text-sm font-semibold">- Chloe Dauncey, Santa Clarita, CA</p>
              </div>
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>

            {/* Testimonial 3 - Jake */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Now that work has begun, I have a better idea of the scope of the work, 
                  plus the way your crew is approaching it. Very professional and thorough."
                </p>
                <p className="text-gray-600 text-sm font-semibold">- Jake</p>
              </div>
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>

            {/* Testimonial 4 - Hayley */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "I've been so busy lately, but wanted to let you know that after several 
                  rains, the deck is great. No water in the dining room!"
                </p>
                <p className="text-gray-600 text-sm font-semibold">- Hayley</p>
              </div>
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>

            {/* Testimonial 5 - Phyllis */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Thanks Darren, the crew is easy to have around. We're working around my 
                  schedule picking up grandkids. Work is progressing nicely and the weather 
                  is good."
                </p>
                <p className="text-gray-600 text-sm font-semibold">- Phyllis</p>
              </div>
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>

            {/* Testimonial 6 - Phyllis Update */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Update on Lary's deck - stucco removal and crew working on the roof. 
                  Good weather expected."
                </p>
                <p className="text-gray-600 text-sm font-semibold">- Phyllis</p>
              </div>
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional References Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional References</h2>
            <p className="text-gray-600">More detailed testimonials available upon request</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/eric_younger_testimonial.pdf" className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-[#00A7E8] mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Judge Eric Younger</h3>
                <p className="text-gray-600 mb-4">Decking Testimonial</p>
                <p className="text-sm text-gray-500">PDF file available</p>
              </div>
            </a>
            
            <a href="/brigitte_cox_testimonial.pdf" className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-[#00A7E8] mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Brigitte Cox</h3>
                <p className="text-gray-600 mb-4">Decking Testimonial</p>
                <p className="text-sm text-gray-500">PDF file available</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonial Photos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Image Placeholder 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/test1.webp" alt="Customer testimonial deck waterproofing Los Angeles" className='w-fit h-full '/>
            </div>

            {/* Image Placeholder 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 flex items-center justify-center h-[30rem]">
                  <img src="/test2.webp" alt="Happy client testimonial for deck waterproofing services" className='w-fit h-full '/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#00A7E8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Our Quality Work?
          </h2>
          <p className="text-xl text-white mb-8">
            Join our satisfied customers and get your deck waterproofing project started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-[#00A7E8] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              GET FREE QUOTE
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#00A7E8] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              CALL US NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}