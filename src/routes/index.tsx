import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Hero from './components/hero'
import TrustedPartners from './components/trusted-partners'
import Testimonial from './components/testimonial'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [openFaq, setOpenFaq] = useState(0) // 0 means first FAQ is open by default

  const faqData = [
    {
      id: 0,
      question: "1. How do I know if I need waterproofing?",
      answer: "Common signs include water stains, musty odors, mold growth, or visible cracks in your basement or foundation. If you're seeing any of these, it's best to schedule a free inspection."
    },
    {
      id: 1,
      question: "2. What does your free estimate include?",
      answer: "Our free estimate includes a thorough inspection of your property, identification of water issues, detailed recommendations, and a comprehensive written quote with no hidden fees or pressure to sign up immediately."
    },
    {
      id: 2,
      question: "3. Do you offer warranties?",
      answer: "Yes, we offer comprehensive warranties on all our work. Our waterproofing systems come with lifetime transferable warranties, and we stand behind our craftsmanship with detailed warranty documentation."
    },
    {
      id: 3,
      question: "4. How long does waterproofing take?",
      answer: "The timeline varies depending on the scope of work. Simple repairs might take a day, while full basement waterproofing systems typically take 2-3 days. We'll provide a detailed timeline during your free estimate."
    }
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? -1 : id) // Close if already open, otherwise open
  }
  return (
    <>
      
      <Hero />
      <TrustedPartners />
      
      {/* About Us Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Images and Statistics */}
            <div className="lg:w-1/2 relative">
              {/* Top Image */}
              <div className="relative">
                <img 
                  src="/about.webp" 
                  alt="Professional working on roof with safety gear" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
            </div>
            
            {/* Right Column - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <p className="text-brand-blue-500 font-semibold text-sm uppercase tracking-wide mb-2">
                  About Us Water Proofed
                </p>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Decades of Waterproofing Excellence
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Waterproofed.com is a team of experienced professionals dedicated to keeping your home safe and dry. With over 30 years in the industry, we've earned the trust of homeowners through exceptional service, expert craftsmanship, and reliable solutions.
              </p>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To protect homes and properties from water damage through honest work, dependable systems, and unbeatable customer service.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission:</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Since our founding, we've helped thousands of families across the region secure their foundations and prevent costly water damage. From small repairs to full basement systems, no job is too big or small.
                </p>
              </div>
              
              <div className="pt-4">
                <a href='/about' className="bg-[#00A7E8] hover:bg-brand-blue-600 text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-200 text-lg shadow-lg cursor-pointer">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="flex items-center gap-3 mb-4 lg:mb-0">
              <div className="w-8 h-8 bg-[#00A7E8] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#00A7E8] font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 lg:mb-0">See Our Water Proofed Services</h2>
            <button className="bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              EXPLORE ALL SERVICES
            </button>
          </div>
          
          {/* Services Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Waterproof Deck Coatings */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className=" w-fit  rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.2" cx="75" cy="75" r="75" fill="#323232"/>
                  <circle cx="75" cy="75" r="60" fill="#323232"/>
                  <path d="M69.0975 40.1196C65.796 40.7897 63.2995 43.7299 63.2995 46.9572C63.2995 48.9675 64.9775 50.3487 66.9147 49.9384C68.1152 49.6786 69.1657 48.3658 69.1657 47.0803C69.1657 46.6017 69.6159 46.0547 70.0661 45.9589C70.5436 45.8769 71.1848 46.0957 71.3485 46.4102C71.4303 46.5743 71.4849 49.282 71.4849 53.4256V60.1948L69.343 60.2495C67.0102 60.3042 66.6964 60.3863 66.0143 61.1384C65.4413 61.7401 65.2094 62.3282 65.2094 63.1624V63.9145H62.4127H59.616V62.3555C59.616 60.523 59.3978 59.6615 58.702 58.8547C57.9789 58.0068 57.1604 57.5965 56.0827 57.5145C54.3637 57.3914 53.0268 58.1436 52.2901 59.6478C51.949 60.3589 51.9081 60.5914 51.8535 62.1641L51.8126 63.9145H51.1714C49.1796 63.9145 47.6108 65.1316 47.1196 67.0598C46.7922 68.3726 47.1469 69.7675 48.0609 70.7384C48.6203 71.3265 49.9845 71.9829 50.6394 71.9829C51.0623 71.9829 51.1578 72.0376 51.2123 72.2837C51.6352 74.3487 51.7853 74.9778 52.14 76.0854C52.3583 76.7966 52.904 78.1231 53.3405 79.0256C55.687 83.8803 59.2886 87.4906 64.2272 89.9248L65.8915 90.759V100.072C65.8915 105.186 65.9461 109.453 66.0007 109.535C66.2871 109.973 66.6964 110 74.4862 110C82.276 110 82.6853 109.973 82.9718 109.535C83.0263 109.453 83.0809 105.186 83.0809 100.072V90.759L84.7726 89.9248C89.6974 87.4906 93.4355 83.7299 95.7137 78.8889C96.6551 76.8923 97.2007 75.1419 97.7601 72.3111C97.801 72.0786 97.9374 72.0102 98.4695 71.9555C100.202 71.7914 101.675 70.3282 101.976 68.4683C102.098 67.7162 101.744 66.3897 101.239 65.6376C100.516 64.5846 99.1789 63.9145 97.801 63.9145H97.1598L97.1189 62.1641C97.0643 60.5914 97.0234 60.3589 96.6823 59.6478C95.9456 58.1436 94.6087 57.3914 92.8898 57.5145C91.7984 57.5965 90.9935 58.0068 90.2568 58.882C89.5747 59.6752 89.3564 60.5094 89.3564 62.3692V63.9145H86.5597H83.763V63.1624C83.763 62.3282 83.5311 61.7401 82.9581 61.1384C82.2624 60.3863 81.9622 60.3042 79.5748 60.2495L77.3511 60.1948V53.0427C77.3511 46.3008 77.3375 45.8358 77.0783 45.0153C76.0551 41.6649 72.4262 39.4495 69.0975 40.1196ZM72.167 42.294C73.5312 42.8136 74.7318 44.0307 75.1956 45.3572C75.4139 46 75.4275 46.7111 75.4412 53.1384V60.2222H74.4999H73.5449L73.504 53.2752C73.463 46.8205 73.4494 46.3145 73.2038 45.8632C72.5626 44.6598 71.5804 44.0307 70.3253 44.0307C69.4795 44.0444 69.1384 44.1538 68.3608 44.7418C67.8697 45.1111 67.2558 46.2598 67.2558 46.8478C67.2558 47.8051 66.5873 48.3111 65.7824 47.9692C64.7456 47.5316 65.1548 45.2478 66.56 43.6478C67.1603 42.9777 68.4426 42.2256 69.3294 42.0341C70.1343 41.87 71.3212 41.9794 72.167 42.294ZM56.7375 59.6478C57.5151 60.0718 57.7061 60.6051 57.7061 62.3692V63.9145H55.728H53.7498V62.4923C53.7498 61.6991 53.818 60.8923 53.8999 60.6735C54.0772 60.2085 54.5411 59.6889 54.9094 59.5384C55.3869 59.3333 56.26 59.388 56.7375 59.6478ZM94.4859 59.8256C95.0725 60.3589 95.2226 60.9059 95.2226 62.4786V63.9145H93.2445H91.2663V62.3692C91.2663 60.6051 91.4573 60.0718 92.2349 59.6478C92.8898 59.2786 93.9948 59.3743 94.4859 59.8256ZM81.6621 62.4649C81.7712 62.6153 81.8531 62.9983 81.8531 63.3265V63.9145H74.4862H67.1193V63.3265C67.1193 62.7248 67.2967 62.3692 67.665 62.2324C67.7742 62.1914 70.9256 62.1641 74.6636 62.1777C81.2255 62.2051 81.4711 62.2188 81.6621 62.4649ZM98.906 66.0752C99.5882 66.4171 99.9974 67.0871 99.9974 67.9077C99.9974 68.6598 99.7792 69.1521 99.2471 69.6581L98.8788 70L74.6636 70.041C53.0813 70.0683 50.4074 70.041 50.0254 69.8632C49.357 69.535 49.0568 69.029 49.0023 68.0854C48.9613 67.4017 49.0023 67.1829 49.2751 66.7863C49.4525 66.5265 49.8072 66.1983 50.0664 66.0752C50.5166 65.8427 51.9627 65.829 74.4862 65.829C97.0098 65.829 98.4558 65.8427 98.906 66.0752ZM95.7683 72.2837C95.7683 73.323 94.6496 76.8513 93.7492 78.6427C93.0808 79.9692 91.5119 82.2256 90.4614 83.3607C85.9594 88.229 79.2201 90.8957 72.8628 90.3214C65.2094 89.6239 58.9748 85.5624 55.4278 78.9572C54.4046 77.0564 53.2041 73.5145 53.2041 72.3521V71.9829H74.4862H95.7683V72.2837ZM69.7114 91.812C73.2175 92.5504 77.1055 92.4273 80.8026 91.4701L81.171 91.3743V99.7299V108.085L74.4589 108.058L67.7332 108.017L67.6923 99.6889L67.665 91.3607L68.0334 91.4427C68.2516 91.4974 69.002 91.6615 69.7114 91.812Z" fill="white"/>
                  <path d="M59.7116 74.7452C59.3432 75.0324 59.275 75.7025 59.5888 76.0854L59.8616 76.4272H74.4863H89.1109L89.3837 76.0854C89.6975 75.7025 89.6293 75.0324 89.2609 74.7452C89.0836 74.6221 85.9049 74.5811 74.4863 74.5811C63.0676 74.5811 59.8889 74.6221 59.7116 74.7452Z" fill="white"/>
                  <path d="M70.2162 94.6563C70.0115 94.8888 69.9843 95.4631 69.9843 100.195C69.9843 105.446 69.9843 105.473 70.2844 105.761C70.68 106.13 71.1575 106.102 71.5531 105.692L71.8942 105.364V100.195C71.8942 94.3417 71.9078 94.4101 70.9529 94.4101C70.6254 94.4101 70.3526 94.5058 70.2162 94.6563Z" fill="white"/>
                  <path d="M77.2965 94.711C77.1055 94.9708 77.0782 95.7366 77.0782 100.195V105.364L77.4193 105.692C77.8149 106.102 78.2924 106.13 78.688 105.761C78.9882 105.473 78.9882 105.446 78.9882 100.167C78.9882 95.2033 78.9745 94.8477 78.7426 94.6426C78.3606 94.3007 77.5557 94.3417 77.2965 94.711Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Waterproof Deck Coatings</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  When it comes to installing plumbing in a basement bathroom, there are a few options that may work for your space. If you are lucky enough.
                </p>
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-sm">
                  READ MORE
                </button>
              </div>
              
              {/* Card 2: Decorative Coatings */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className=" w-fit  rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.2" cx="75" cy="75" r="75" fill="#323232"/>
                <circle cx="75" cy="75" r="60" fill="white"/>
                <path d="M61.6833 40.0849C60.4933 40.2403 58.8358 40.6359 57.7167 41.0173C55.0108 41.9779 53.0275 43.2353 50.9025 45.3543C48.2958 47.9537 46.8225 50.5955 45.93 54.2686C45.6467 55.3987 45.6325 55.9638 45.5758 63.5501L45.5192 71.6449H43.6067C41.765 71.6449 41.68 71.6591 41.3542 71.9981C41 72.3372 41 72.3654 41 75.0355C41 77.7055 41 77.7337 41.3542 78.0728C41.68 78.4119 41.765 78.426 43.6208 78.426H45.5333V79.5561V80.6863H44.7542C44.1025 80.6863 43.9042 80.7428 43.6208 81.0395C43.2667 81.3786 43.2667 81.4068 43.2667 84.0768C43.2667 86.7469 43.2667 86.7751 43.6208 87.1142C43.9042 87.4108 44.1025 87.4674 44.7542 87.4674H45.5333V89.3745C45.5333 91.2252 45.5475 91.3099 45.8875 91.6349L46.2275 91.988H52.3333H58.4392L58.7792 91.6349C59.1192 91.3099 59.1333 91.2252 59.1333 89.3745V87.4674H59.9125C60.5642 87.4674 60.7625 87.4108 61.0458 87.1142C61.4 86.7751 61.4 86.7469 61.4 84.0768C61.4 81.4068 61.4 81.3786 61.0458 81.0395C60.7625 80.7428 60.5642 80.6863 59.9125 80.6863H59.1333V79.5561V78.426H61.0458C62.9017 78.426 62.9867 78.4119 63.3125 78.0728C63.6667 77.7337 63.6667 77.7055 63.6667 75.0355C63.6667 72.3654 63.6667 72.3372 63.3125 71.9981C62.9867 71.6591 62.9017 71.6449 61.0458 71.6449H59.1192L59.1617 64.2565L59.2042 56.8821L59.5583 56.1757C59.9975 55.2716 60.8617 54.424 61.7542 53.986C62.335 53.7035 62.6892 53.647 63.6667 53.647C64.7008 53.647 64.97 53.7035 65.5933 54.0143C66.6558 54.5652 67.1092 55.0032 67.6475 55.9921L68.1292 56.8821L68.2142 66.7004C68.2992 75.9961 68.3133 76.5894 68.5967 77.7196C69.475 81.3644 71.005 84.0768 73.5692 86.6338C76.19 89.2615 79.1508 90.872 82.7917 91.649C84.4775 92.0163 88.1892 92.0163 89.875 91.649C93.5158 90.872 96.4767 89.2615 99.0975 86.6338C101.662 84.0768 103.178 81.3644 104.07 77.7196C104.353 76.5894 104.368 76.0244 104.424 68.424L104.481 60.3432H106.393C108.235 60.3432 108.32 60.3291 108.646 59.9901C109 59.651 109 59.6227 109 56.9527C109 54.2827 109 54.2544 108.646 53.9154C108.32 53.5763 108.235 53.5622 106.379 53.5622H104.467V52.432V51.3019H105.246C105.897 51.3019 106.096 51.2454 106.379 50.9487C106.733 50.6096 106.733 50.5814 106.733 47.9113C106.733 45.2413 106.733 45.2131 106.379 44.874C106.096 44.5773 105.897 44.5208 105.246 44.5208H104.467V42.6137C104.467 40.763 104.453 40.6782 104.113 40.3533L103.773 40.0001H97.6667H91.5608L91.2208 40.3533C90.8808 40.6782 90.8667 40.763 90.8667 42.6137V44.5208H90.0875C89.4358 44.5208 89.2375 44.5773 88.9542 44.874C88.6 45.2131 88.6 45.2413 88.6 47.9113C88.6 50.5814 88.6 50.6096 88.9542 50.9487C89.2375 51.2454 89.4358 51.3019 90.0875 51.3019H90.8667V52.432V53.5622H88.9542C87.0983 53.5622 87.0133 53.5763 86.6875 53.9154C86.3333 54.2544 86.3333 54.2827 86.3333 56.9527C86.3333 59.6227 86.3333 59.651 86.6875 59.9901C87.0133 60.3291 87.0983 60.3432 88.9542 60.3432H90.8808L90.8383 67.7176L90.7958 75.1061L90.3142 75.9961C89.7758 76.985 89.3225 77.423 88.26 77.9739C87.6508 78.2847 87.3533 78.3412 86.3333 78.3412C85.3133 78.3412 85.0158 78.2847 84.4067 77.9739C83.3442 77.423 82.8908 76.985 82.3525 75.9961L81.8708 75.1061L81.7858 65.2877C81.7008 55.9921 81.6867 55.3987 81.4033 54.2686C80.525 50.6238 78.995 47.9113 76.4308 45.3543C73.8525 42.7832 71.0192 41.2151 67.4917 40.4098C66.3158 40.1414 62.8025 39.9436 61.6833 40.0849ZM66.075 42.4724C69.4042 42.9668 72.4358 44.5067 74.8583 46.9224C77.3375 49.4088 78.8817 52.5027 79.3917 56.0345C79.4625 56.5995 79.5333 60.767 79.5333 65.8528C79.5333 73.3261 79.5617 74.8236 79.7458 75.5299C80.695 79.1465 84.4067 81.3927 87.9342 80.4744C90.385 79.8387 92.2833 77.9598 92.9208 75.5299C93.0908 74.8377 93.1333 73.5097 93.1333 67.5198V60.3432H97.6667H102.2V67.647C102.2 75.0778 102.143 76.0385 101.619 78.0728C100.982 80.6016 98.9275 83.9356 96.9442 85.6591C91.9433 89.9961 85.2708 90.9285 79.4625 88.1172C75.4958 86.1818 72.5917 82.876 71.2317 78.7509C70.5233 76.5753 70.4667 75.6853 70.4667 66.1354C70.4667 58.761 70.4383 57.1646 70.2542 56.4865C69.6167 54.0425 67.7325 52.1495 65.2958 51.5138C61.74 50.5955 58.0283 52.8417 57.0792 56.4583C56.9092 57.1505 56.8667 58.4785 56.8667 64.4684V71.6449H52.3333H47.8V64.2565C47.8 58.4643 47.8425 56.6137 48.0125 55.6106C48.82 50.6379 51.9367 46.3574 56.4275 44.0405C59.445 42.4865 62.7033 41.9497 66.075 42.4724ZM102.2 43.3907V44.5208H97.6667H93.1333V43.3907V42.2605H97.6667H102.2V43.3907ZM104.467 47.9113V49.0415H97.6667H90.8667V47.9113V46.7812H97.6667H104.467V47.9113ZM102.2 52.432V53.5622H97.6667H93.1333V52.432V51.3019H97.6667H102.2V52.432ZM106.733 56.9527V58.0829H97.6667H88.6V56.9527V55.8225H97.6667H106.733V56.9527ZM61.4 75.0355V76.1656H52.3333H43.2667V75.0355V73.9053H52.3333H61.4V75.0355ZM56.8667 79.5561V80.6863H52.3333H47.8V79.5561V78.426H52.3333H56.8667V79.5561ZM59.1333 84.0768V85.207H52.3333H45.5333V84.0768V82.9467H52.3333H59.1333V84.0768ZM56.8667 88.5975V89.7277H52.3333H47.8V88.5975V87.4674H52.3333H56.8667V88.5975Z" fill="#00A7E8"/>
                <path d="M51.8091 94.4178C51.2991 94.672 47.545 100.436 47.1341 101.608C45.9725 104.928 47.1341 108.121 50.0241 109.534C50.9025 109.958 51.0866 110 52.3333 110C53.5516 110 53.7641 109.958 54.6283 109.548C55.9458 108.926 56.7675 108.135 57.405 106.85C57.915 105.804 57.9291 105.734 57.9291 104.222C57.915 101.962 57.6458 101.312 55.1808 97.5822C52.9566 94.2482 52.6875 93.9939 51.8091 94.4178ZM53.7925 99.6024C55.6483 102.4 56.0591 103.784 55.5633 105.465C55.3366 106.242 54.1608 107.415 53.3816 107.641C51.5825 108.163 49.755 107.217 49.1458 105.423C48.5933 103.798 48.99 102.442 50.8741 99.6024C51.6391 98.444 52.2908 97.4975 52.3333 97.4975C52.3758 97.4975 53.0275 98.444 53.7925 99.6024Z" fill="#00A7E8"/>
                <path d="M56.1685 71.8365C55.5843 72.0417 55.4348 72.4795 55.4348 73.8886C55.4348 75.0104 55.4756 75.2567 55.7201 75.5714C56.0734 76.0228 56.7935 76.0639 57.2011 75.6534C57.4321 75.4209 57.4729 75.202 57.4729 73.9297C57.4729 73.1362 57.4185 72.37 57.337 72.2332C57.1604 71.9186 56.5354 71.6997 56.1685 71.8365Z" fill="white"/>
                <path d="M51.3722 76.5566C51.1277 76.8712 51.0869 77.1175 51.0869 78.2667C51.0869 79.4569 51.1141 79.6484 51.3994 79.9494C51.8342 80.4419 52.4048 80.483 52.8532 80.0315C53.0978 79.7852 53.125 79.58 53.125 78.253C53.125 76.9259 53.0978 76.7207 52.8532 76.4745C52.4456 76.064 51.7255 76.1051 51.3722 76.5566Z" fill="white"/>
                <path d="M55.7201 78.7453C55.4756 79.06 55.4348 79.3062 55.4348 80.4554C55.4348 81.6593 55.462 81.8372 55.7473 82.1655C56.1685 82.6444 56.8614 82.6854 57.2283 82.2339C57.4321 81.974 57.4729 81.673 57.4729 80.4281C57.4729 79.1147 57.4457 78.9095 57.2011 78.6632C56.7935 78.2528 56.0734 78.2939 55.7201 78.7453Z" fill="white"/>
                <path d="M51.3722 83.1234C51.1277 83.438 51.0869 83.6843 51.0869 84.7651C51.0869 85.4628 51.1548 86.1879 51.2364 86.3794C51.5489 87.0771 52.6358 87.1319 52.9755 86.4752C53.057 86.3247 53.125 85.5586 53.125 84.7651C53.125 83.4928 53.0842 83.2739 52.8532 83.0413C52.4456 82.6309 51.7255 82.6719 51.3722 83.1234Z" fill="white"/>
                <path d="M55.7201 85.3121C55.4756 85.6268 55.4348 85.873 55.4348 86.9538C55.4348 87.6515 55.5027 88.3766 55.5843 88.5681C55.8968 89.2659 56.9837 89.3206 57.3234 88.6639C57.4049 88.5134 57.4729 87.7473 57.4729 86.9538C57.4729 85.6815 57.4321 85.4626 57.2011 85.23C56.7935 84.8196 56.0734 84.8606 55.7201 85.3121Z" fill="white"/>
                <path d="M51.3722 89.69C51.1277 90.0047 51.0869 90.2509 51.0869 91.3317C51.0869 92.0295 51.1548 92.7545 51.2364 92.9461C51.5489 93.6438 52.6358 93.6985 52.9755 93.0418C53.057 92.8913 53.125 92.1389 53.125 91.3454C53.125 90.0457 53.0978 89.9089 52.8125 89.6353C52.3641 89.2112 51.7255 89.2386 51.3722 89.69Z" fill="white"/>
                <path d="M55.7745 91.8654C55.462 92.1664 55.4348 92.3032 55.4348 93.4934C55.4348 94.9299 55.5707 95.3814 56.0734 95.614C56.5625 95.8328 56.7663 95.8055 57.1332 95.4224C57.4593 95.1078 57.4729 94.9983 57.4729 93.6029C57.4729 92.2211 57.4457 92.098 57.1604 91.8244C56.7392 91.4276 56.1821 91.4413 55.7745 91.8654Z" fill="white"/>
                <path d="M51.4131 96.2432C51.0734 96.5852 51.0598 96.64 51.1142 98.0901C51.1549 99.7318 51.25 99.937 51.9973 100.088C52.3506 100.156 52.5 100.101 52.7718 99.8276C53.1115 99.4856 53.125 99.4035 53.125 97.9807C53.125 96.5989 53.0979 96.4758 52.8125 96.2022C52.3914 95.8054 51.8343 95.8191 51.4131 96.2432Z" fill="white"/>
                <path d="M55.7607 98.432C55.4211 98.7741 55.4075 98.8288 55.4618 100.293C55.5026 101.688 55.5298 101.825 55.8287 102.071C56.2363 102.413 56.6711 102.399 57.1194 102.044C57.4591 101.77 57.4727 101.729 57.4727 100.224C57.4727 98.7877 57.4455 98.6646 57.1602 98.391C56.739 97.9943 56.1819 98.0079 55.7607 98.432Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">FLOOR LEVELING</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Efficiently morph timely intellectual capital rather than equity invested applications. Proactively leverage other's intuitive human capital rather than effective.
                </p>
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-sm">
                  READ MORE
                </button>
              </div>
              
              {/* card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className=" w-fit  rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.2" cx="75" cy="75" r="75" fill="#323232"/>
                  <circle cx="75" cy="75" r="60" fill="#323232"/>
                  <path d="M70.7201 40.0286C65.1359 40.6442 59.8098 43.4488 56.3723 47.5804C53.356 51.2195 51.6984 55.1459 51.2228 59.7427C51.1141 60.8372 51.0326 61.0971 50.8016 61.2613C50.2446 61.658 50 62.4652 50 64.0111C50 65.174 50.0543 65.5434 50.2717 65.9948C50.8016 67.062 50.9103 67.103 54.212 67.144C56.9429 67.1714 57.1603 67.1577 57.5815 66.8978C58.4103 66.3916 58.5598 65.9401 58.5598 64.0522C58.5598 62.2737 58.5054 62.0274 57.8804 61.357C57.5136 60.9603 57.5 60.9329 57.6223 59.9206C57.8804 57.7316 58.8451 55.1459 60.1087 53.2306C60.4484 52.7244 61.1821 51.7941 61.7527 51.1785C62.7038 50.1387 62.7853 50.0019 62.7174 49.6052C62.6223 49.099 62.1875 48.7023 61.7255 48.7023C61.3451 48.7023 60.2174 49.7146 59.2391 50.9596C57.2962 53.4221 55.856 56.9108 55.6114 59.7427L55.5299 60.7414H54.3478H53.1658L53.2201 60.0163C53.3152 58.9082 53.7908 56.6782 54.1576 55.5427C55.5571 51.3427 58.587 47.4847 62.4457 44.9811C64.144 43.8729 66.9429 42.7785 69.2391 42.327C70.9239 41.985 74.7283 41.985 76.3995 42.3133C80.4484 43.1341 83.7636 44.9127 86.6984 47.8677C89.0625 50.2619 90.5842 52.7518 91.5625 55.8573C92.4728 58.7303 92.4321 57.9779 92.4864 73.834L92.5408 88.2399H91.3859H90.231L90.1766 73.9024C90.1223 58.142 90.163 59.0176 89.2663 56.2951C88.7772 54.8039 88.0707 53.3674 87.1603 51.9857C86.2092 50.5355 83.8995 48.2508 82.3641 47.2384C77.4185 43.9687 71.2364 43.4488 65.788 45.8566C64.7418 46.3218 64.4837 46.4996 64.3071 46.8553C64.1168 47.2521 64.1168 47.3342 64.3207 47.7172C64.5924 48.2645 65.0815 48.3876 65.7337 48.114C66.0054 48.0045 66.6712 47.7172 67.1875 47.4983C70.3804 46.1576 74.3478 46.0482 77.731 47.211C82.7989 48.9622 86.4674 53.0938 87.8125 58.5525C88.0842 59.688 88.0978 60.03 88.1386 74.0118L88.1793 88.3083L87.5408 88.7187C87.1875 88.9376 86.712 89.4028 86.481 89.7174C86.1277 90.251 86.0734 90.4425 86.019 91.4686L85.9783 92.6178H81.5897H77.1875L77.1467 89.5943C77.106 86.6119 77.106 86.5708 76.7799 86.3109C76.3995 86.0099 75.8424 85.9689 75.462 86.2425C75.2174 86.4204 75.2038 86.6666 75.1359 89.4849L75.0679 92.5357L74.606 92.6315C74.0217 92.7546 73.5054 93.1376 73.1658 93.7259C72.9212 94.15 72.894 94.4373 72.894 96.9272C72.894 99.5813 72.9076 99.6771 73.2201 100.197C73.8587 101.223 73.8995 101.237 80.3397 101.237H86.0054V102.4V103.562H85.6386C85.0679 103.562 83.9402 104.151 83.5054 104.671C82.8533 105.45 82.7446 105.875 82.7446 107.721C82.7446 110.252 81.7799 109.992 91.3995 109.992H99.3342L99.6603 109.65C99.9728 109.349 100 109.226 100 107.899C100 106.162 99.769 105.286 99.1168 104.616C98.5326 104 98.0435 103.74 97.2962 103.617L96.7391 103.521V102.783C96.7391 102.181 96.6712 101.989 96.3995 101.716C95.9783 101.278 95.394 101.264 95 101.688C94.769 101.934 94.7011 102.181 94.7011 102.783V103.562H91.3723H88.0435V97.2693V90.9624L88.3832 90.6341C88.7092 90.292 88.7228 90.292 91.3315 90.292C93.1793 90.3057 94.0217 90.3468 94.1712 90.4699C94.6603 90.8529 94.7011 91.1813 94.7011 94.8067V98.3774L95.0543 98.7331C95.3261 99.0067 95.4755 99.0615 95.8288 98.9931C96.6848 98.8152 96.6712 98.8836 96.6712 94.5605V90.6204L96.3315 89.95C96.087 89.4849 95.7609 89.1155 95.3125 88.8145L94.6332 88.3494L94.5652 73.9024C94.4973 60.9466 94.4701 59.3186 94.2527 58.2104C93.0707 52.0541 89.7962 46.9785 84.8641 43.6677C81.3043 41.2736 77.6359 40.1107 73.3696 40.0149C72.2147 39.9876 71.019 40.0012 70.7201 40.0286ZM56.5217 63.9564V65.1193H54.2799H52.038V63.9564V62.7935H54.2799H56.5217V63.9564ZM81.6576 96.9272V99.1846L78.3016 99.1572L74.9321 99.1162L74.8913 97.0641C74.8777 95.9422 74.8913 94.9435 74.9185 94.8478C74.9728 94.7109 75.7201 94.6699 78.3288 94.6699H81.6576V96.9272ZM86.0054 96.9272V99.1846H84.8505H83.6957V96.9272V94.6699H84.8505H86.0054V96.9272ZM97.5679 106.011C97.9076 106.367 97.962 106.518 97.962 107.174V107.94H91.3723H84.7826V107.119C84.7826 106.422 84.837 106.23 85.1223 105.957L85.4484 105.615H91.3043H97.1739L97.5679 106.011Z" fill="white"/>
                  <path d="M51.8207 69.6475C51.2364 69.8527 51.087 70.2905 51.087 71.6996C51.087 72.8215 51.1277 73.0677 51.3723 73.3824C51.7256 73.8339 52.4457 73.8749 52.8533 73.4645C53.0843 73.2319 53.125 73.013 53.125 71.7407C53.125 70.9472 53.0707 70.1811 52.9891 70.0443C52.8125 69.7296 52.1875 69.5107 51.8207 69.6475Z" fill="white"/>
                  <path d="M56.1685 71.8365C55.5842 72.0417 55.4348 72.4795 55.4348 73.8886C55.4348 75.0104 55.4755 75.2567 55.7201 75.5714C56.0734 76.0228 56.7935 76.0639 57.2011 75.6534C57.4321 75.4209 57.4728 75.202 57.4728 73.9297C57.4728 73.1362 57.4185 72.37 57.337 72.2332C57.1603 71.9186 56.5353 71.6997 56.1685 71.8365Z" fill="white"/>
                  <path d="M51.3723 76.5566C51.1277 76.8712 51.087 77.1175 51.087 78.2667C51.087 79.4569 51.1141 79.6484 51.3995 79.9494C51.8343 80.4419 52.4049 80.483 52.8533 80.0315C53.0978 79.7852 53.125 79.58 53.125 78.253C53.125 76.9259 53.0978 76.7207 52.8533 76.4745C52.4457 76.064 51.7256 76.1051 51.3723 76.5566Z" fill="white"/>
                  <path d="M55.7201 78.7453C55.4755 79.06 55.4348 79.3062 55.4348 80.4554C55.4348 81.6593 55.462 81.8372 55.7473 82.1655C56.1685 82.6444 56.8614 82.6854 57.2283 82.2339C57.4321 81.974 57.4728 81.673 57.4728 80.4281C57.4728 79.1147 57.4457 78.9095 57.2011 78.6632C56.7935 78.2528 56.0734 78.2939 55.7201 78.7453Z" fill="white"/>
                  <path d="M51.3723 83.1234C51.1277 83.438 51.087 83.6843 51.087 84.7651C51.087 85.4628 51.1549 86.1879 51.2364 86.3794C51.5489 87.0771 52.6359 87.1319 52.9756 86.4752C53.0571 86.3247 53.125 85.5586 53.125 84.7651C53.125 83.4928 53.0843 83.2739 52.8533 83.0413C52.4457 82.6309 51.7256 82.6719 51.3723 83.1234Z" fill="white"/>
                  <path d="M55.7201 85.3121C55.4755 85.6268 55.4348 85.873 55.4348 86.9538C55.4348 87.6515 55.5027 88.3766 55.5842 88.5681C55.8967 89.2659 56.9837 89.3206 57.3234 88.6639C57.4049 88.5134 57.4728 87.7473 57.4728 86.9538C57.4728 85.6815 57.4321 85.4626 57.2011 85.23C56.7935 84.8196 56.0734 84.8606 55.7201 85.3121Z" fill="white"/>
                  <path d="M51.3723 89.69C51.1277 90.0047 51.087 90.2509 51.087 91.3317C51.087 92.0295 51.1549 92.7545 51.2364 92.9461C51.5489 93.6438 52.6359 93.6985 52.9756 93.0418C53.0571 92.8913 53.125 92.1389 53.125 91.3454C53.125 90.0457 53.0978 89.9089 52.8125 89.6353C52.3641 89.2112 51.7256 89.2386 51.3723 89.69Z" fill="white"/>
                  <path d="M55.7745 91.8654C55.462 92.1664 55.4348 92.3032 55.4348 93.4934C55.4348 94.9299 55.5707 95.3814 56.0734 95.614C56.5625 95.8328 56.7663 95.8055 57.1332 95.4224C57.4592 95.1078 57.4728 94.9983 57.4728 93.6029C57.4728 92.2211 57.4457 92.098 57.1603 91.8244C56.7391 91.4276 56.1821 91.4413 55.7745 91.8654Z" fill="white"/>
                  <path d="M51.413 96.2432C51.0734 96.5852 51.0598 96.64 51.1141 98.0901C51.1549 99.7318 51.25 99.937 51.9973 100.088C52.3505 100.156 52.5 100.101 52.7717 99.8276C53.1114 99.4856 53.125 99.4035 53.125 97.9807C53.125 96.5989 53.0978 96.4758 52.8125 96.2022C52.3913 95.8054 51.8342 95.8191 51.413 96.2432Z" fill="white"/>
                  <path d="M55.7609 98.432C55.4212 98.7741 55.4076 98.8288 55.462 100.293C55.5027 101.688 55.5299 101.825 55.8288 102.071C56.2364 102.413 56.6712 102.399 57.1196 102.044C57.4592 101.77 57.4728 101.729 57.4728 100.224C57.4728 98.7877 57.4457 98.6646 57.1603 98.391C56.7391 97.9943 56.1821 98.0079 55.7609 98.432Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Floor Leveling</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Efficiently morph timely intellectual capital rather than equity invested applications. Proactively leverage other's intuitive human capital rather than effective.
                </p>
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-sm">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Services Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Left Section - Blue Background */}
            <div className="lg:w-1/3 bg-[#00A7E8] p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Light blue strip */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-300"></div>
              
              <div className="text-white relative z-10">
                <p className="text-sm font-semibold uppercase tracking-wide mb-2">EMERGENCY SERVICES</p>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight">Having an urgent problem and can't wait?</h3>
              </div>
            </div>
            
            {/* Right Section - Contact Form */}
            <div className="lg:w-2/3 bg-gray-800 p-8 lg:p-12">
              <form className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Your name *" 
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#00A7E8] focus:outline-none"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Your Email *" 
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#00A7E8] focus:outline-none"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#00A7E8] focus:outline-none"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Services Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
                  Why Choosing Our Services
                </p>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Why Homeowners Trust Waterproofed.com
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                At Waterproofed.com, we combine decades of experience with proven techniques to deliver lasting solutions for every home. Our team is licensed, insured, and highly trained to tackle even the most complex water problems. We don't believe in one-size-fits-all fixes — just honest evaluations, transparent pricing, and work that's built to last. From our lifetime transferable warranties to our local reputation for reliability, everything we do is focused on protecting your home and earning your trust.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Experience You Can Trust</h3>
                    <p className="text-gray-600 text-sm">With over 30 years in waterproofing, we know how to diagnose and solve even the toughest water problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Lifetime Warranty</h3>
                    <p className="text-gray-600 text-sm">We stand behind our work with warranties that give you lasting peace of mind — and they're fully transferable.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Honest, Upfront Pricing</h3>
                    <p className="text-gray-600 text-sm">No gimmicks, no pressure. Just clear estimates and straightforward recommendations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Top-Rated Service</h3>
                    <p className="text-gray-600 text-sm">Hundreds of 5-star reviews and an A+ BBB rating speak for themselves.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Local & Reliable</h3>
                    <p className="text-gray-600 text-sm">We're not a national chain — we live and work in your community, and we treat your home like our own.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Images and Overlay */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                
                {/* Bottom Image with Video Play Button */}
                <div className="relative">
                  <img 
                    src="/s1.webp" 
                    alt="Waterproofing application process" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="w-full  py-16 bg-[#eeeeee]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">1.25k</div>
              <div className="text-gray-800 font-medium">Successful Projects</div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">1.24k</div>
              <div className="text-gray-800 font-medium">Satisfied Customer</div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">250+</div>
              <div className="text-gray-800 font-medium">Expert Plumbers</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">100%</div>
              <div className="text-gray-800 font-medium">Quality Products</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - About Waterproofing */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
                  Frequently Asked Have Any Question?
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  What to Know About Waterproofing, Our Services, and Your Protection.
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Globally repurpose interdependent products after enterprise alignments. Credibly orchestrate worldwide web services whereas bleeding-edge networks. Interactively target sticky architectures. Holistically aggregate team driven human capital via customer directed interfaces. Seamlessly scale diverse total linkage rather than cross-unit process improvements.
              </p>
              
              <div className="pt-4">
                <button className="bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  ASK QUESTIONS
                </button>
              </div>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="lg:w-1/2 space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <div 
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                      openFaq === faq.id ? 'bg-gray-50 rounded-t-lg' : 'bg-white'
                    }`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-[#00A7E8] transition-transform duration-200 ${
                        openFaq === faq.id ? 'transform rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                  {openFaq === faq.id && (
                    <div className="p-4 border-t border-gray-200">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Standard Working Process Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Standard Working Process</h2>
          </div>
          
          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Step 1: Free Inspection & Assessment */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full  overflow-hidden mb-4">
                <img 
                  src="/w1.webp" 
                  alt="Inspector with clipboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Free Inspection & Assessment</h3>
              <p className="text-gray-600 text-sm">
                When booking, it helps customers when they are shown a calendar. They can then click on the day they want and book from there.
              </p>
            </div>
            
            {/* Arrow 1 */}
            <div className="hidden lg:block">
              <svg className="w-8 h-8 text-[#00A7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 2: Clear, Upfront Estimate */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full overflow-hidden mb-4">
                <img 
                  src="/w2.webp" 
                  alt="Consultation meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clear, Upfront Estimate</h3>
              <p className="text-gray-600 text-sm">
                Professionally engage end-to-end channels after functionalized supply chains. Continually underwhelm cooperative.
              </p>
            </div>
            
            {/* Arrow 2 */}
            <div className="hidden lg:block">
              <svg className="w-8 h-8 text-[#00A7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 3: Expert Installation */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full  overflow-hidden mb-4">
                <img 
                  src="/w3.webp" 
                  alt="Worker with power drill" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Installation</h3>
              <p className="text-gray-600 text-sm">
                Some common plumbing problems include low water pressure, clogged drains, leaky pipes, running toilets, and dripping faucets.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Projects Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
                Latest Projects
              </p>
              <h2 className="text-4xl font-bold text-gray-800">Our Completed Projects</h2>
            </div>
          </div>
          
          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1: Waterproof Deck Coatings */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/t1.webp" 
                  alt="Waterproof deck coatings project" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[#00A7E8] text-sm font-medium mb-2">Kitchen</p>
                    <h3 className="text-xl font-bold mb-4">Waterproof Deck Coatings</h3>
                  </div>
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00A7E8] text-white rounded-lg flex items-center justify-center hover:bg-[#0095d1] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project 2: Roof Coating Application */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/t2.webp" 
                  alt="Roof coating application project" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[#00A7E8] text-sm font-medium mb-2">Roofing</p>
                    <h3 className="text-xl font-bold mb-4">Roof Coating Application</h3>
                  </div>
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00A7E8] text-white rounded-lg flex items-center justify-center hover:bg-[#0095d1] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project 3: Tile Roof Treatment */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/t3.webp" 
                  alt="Tile roof treatment project" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[#00A7E8] text-sm font-medium mb-2">Exterior</p>
                    <h3 className="text-xl font-bold mb-4">Tile Roof Treatment</h3>
                  </div>
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00A7E8] text-white rounded-lg flex items-center justify-center hover:bg-[#0095d1] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <Testimonial/>

    </>
  )
}